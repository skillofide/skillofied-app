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
