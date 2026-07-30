const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

// ── Profile ────────────────────────────────────────────────────────────────────

export interface UserProfile {
  userId: string;
  // Personal Info
  gender: string;
  dob: string;
  whatsapp: string;
  phone: string;
  experience: string;
  // Generic Details
  workExperience: string;
  careerGap: string;
  currentState: string;
  currentCity: string;
  preferredLocations: string[];
  githubLink: string;
  linkedinLink: string;
  isWorkingProfessional: boolean;
  resumeName: string;
  // 10th Grade
  edu10SchoolName: string;
  edu10YearOfPassout: string;
  edu10MarksPercent: string;
  // 12th / PUC
  edu12SchoolName: string;
  edu12YearOfPassout: string;
  edu12MarksPercent: string;
  // UG Detail
  ugUniversityRollNo: string;
  ugCollegeName: string;
  ugCourseName: string;
  ugBranch: string;
  ugYearOfPassout: string;
  ugMarksPercent: string;
  ugCgpa: string;
  ugActiveBacklogs: string;
  // PG Detail
  pgHasCertificate: boolean;
}

export async function getProfileApi(): Promise<UserProfile> {
  const query = `
    query GetProfile {
      getProfile {
        userId
        gender
        dob
        whatsapp
        phone
        experience
        workExperience
        careerGap
        currentState
        currentCity
        preferredLocations
        githubLink
        linkedinLink
        isWorkingProfessional
        resumeName
        edu10SchoolName
        edu10YearOfPassout
        edu10MarksPercent
        edu12SchoolName
        edu12YearOfPassout
        edu12MarksPercent
        ugUniversityRollNo
        ugCollegeName
        ugCourseName
        ugBranch
        ugYearOfPassout
        ugMarksPercent
        ugCgpa
        ugActiveBacklogs
        pgHasCertificate
      }
    }
  `;
  const data = await graphqlRequest<{ getProfile: UserProfile }>(query);
  return data.getProfile;
}

export async function upsertProfileApi(profile: Partial<UserProfile>): Promise<void> {
  const mutation = `
    mutation UpsertProfile($profile: UserProfileInput!) {
      upsertProfile(profile: $profile) {
        success
        message
      }
    }
  `;
  // Exclude userId from the payload to send to mutation as it's enforced by JWT context
  const { userId, ...payload } = profile;
  const data = await graphqlRequest<{ upsertProfile: { success: boolean; message: string } }>(mutation, {
    profile: payload,
  });
	if (!data.upsertProfile.success) {
		throw new Error(data.upsertProfile.message || 'Failed to save profile');
	}
}

export async function getMyCoursesApi(): Promise<any[]> {
	const query = `
		query GetMyCourses {
			getMyCourses {
				id
				title
				mentor
				initial
				color
				classTime
			}
		}
	`;
	const data = await graphqlRequest<{ getMyCourses: any[] }>(query);
	return data.getMyCourses;
}

export async function getReferralsApi(): Promise<any[]> {
  const query = `
    query GetReferrals {
      getReferrals {
        id
        name
        date
        status
      }
    }
  `;
  try {
    const data = await graphqlRequest<{ getReferrals: any[] }>(query);
    return data.getReferrals || [];
  } catch (err) {
    console.error("Referrals API not fully implemented yet:", err);
    return [];
  }
}

export async function getCertificatesApi(): Promise<any[]> {
  const query = `
    query GetCertificates {
      getCertificates {
        id
        courseName
        issueDate
        credentialId
        pdfUrl
      }
    }
  `;
  try {
    const data = await graphqlRequest<{ getCertificates: any[] }>(query);
    return data.getCertificates || [];
  } catch (err) {
    console.error("Certificates API not fully implemented yet:", err);
    return [
      {
        id: 'cert-1',
        courseName: 'Full Stack Web Development',
        issueDate: '2023-08-12',
        credentialId: 'SKLO-FSWD-9X2P',
        pdfUrl: '#',
      },
      {
        id: 'cert-2',
        courseName: 'Advanced Data Structures in Java',
        issueDate: '2023-11-05',
        credentialId: 'SKLO-ADJ-4M7L',
        pdfUrl: '#',
      }
    ];
  }
}

// ── Auth / GraphQL ─────────────────────────────────────────────────────────────

export async function loginApi(email: string, password: string): Promise<LoginResponse> {
  const resp = await fetch(`${API_BASE}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!resp.ok) {
    const errData = await resp.json().catch(() => ({}));
    throw new Error(errData.error || 'Failed to authenticate');
  }

  return resp.json();
}

export async function graphqlRequest<T = any>(query: string, variables: Record<string, any> = {}): Promise<T> {
  const token = localStorage.getItem('token');
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const resp = await fetch(`${API_BASE}/api/graphql`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const result = await resp.json();

  if (result.errors && result.errors.length > 0) {
    const errMsg = result.errors[0].message || 'GraphQL Query Error';
    if (errMsg === 'authentication required') {
      localStorage.removeItem('token');
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    throw new Error(errMsg);
  }

  return result.data;
}

// ── Quiz Verification ─────────────────────────────────────────────────────────

export interface QuizAttempt {
  moduleId: string;
  score: number;
  totalQuestions: number;
  completedAt: string;
}

/**
 * Per-question outcome returned after grading. `correctAnswer` is only ever
 * sent in a submission response, which is what lets the UI reveal the right
 * option without the answer key being present in the client bundle.
 */
export interface QuizQuestionResult {
  questionId: number;
  correct: boolean;
  correctAnswer: string;
}

export interface SubmitQuizResult {
  success: boolean;
  score: number;
  totalQuestions: number;
  results: QuizQuestionResult[];
}

export async function submitQuizApi(moduleId: string, answers: { questionId: number; answer: string }[]): Promise<SubmitQuizResult> {
  const mutation = `
    mutation SubmitQuiz($moduleId: String!, $answers: [QuizAnswerInput!]!) {
      submitQuiz(moduleId: $moduleId, answers: $answers) {
        success
        score
        totalQuestions
        results {
          questionId
          correct
          correctAnswer
        }
      }
    }
  `;
  const data = await graphqlRequest<{ submitQuiz: SubmitQuizResult }>(mutation, {
    moduleId,
    answers,
  });
  return data.submitQuiz;
}

export async function getQuizAttemptsApi(): Promise<QuizAttempt[]> {
  const query = `
    query GetQuizAttempts {
      getQuizAttempts {
        moduleId
        score
        totalQuestions
        completedAt
      }
    }
  `;
  try {
    const data = await graphqlRequest<{ getQuizAttempts: QuizAttempt[] }>(query);
    return data.getQuizAttempts || [];
  } catch (err) {
    console.error("Get quiz attempts failed:", err);
    return [];
  }
}

export interface CareerjetJob {
  url: string;
  title: string;
  company: string;
  locations: string;
  description: string;
  salary: string;
  date: string;
  site: string;
}

export interface JobSearchResult {
  jobs: CareerjetJob[];
  total: number;
  pages: number;
}

export async function searchJobsApi(keywords: string, location: string, page: number = 1): Promise<JobSearchResult> {
  const query = `
    query SearchJobs($keywords: String, $location: String, $page: Int) {
      searchJobs(keywords: $keywords, location: $location, page: $page) {
        jobs {
          url
          title
          company
          locations
          description
          salary
          date
          site
        }
        total
        pages
      }
    }
  `;
  const data = await graphqlRequest<{ searchJobs: JobSearchResult }>(query, { keywords, location, page });
  return data.searchJobs;
}
