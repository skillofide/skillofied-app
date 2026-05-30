const API_BASE = 'http://localhost:8080';

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

export async function loginApi(email: string, password: string): Promise<LoginResponse> {
  const resp = await fetch(`${API_BASE}/login`, {
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

  const resp = await fetch(`${API_BASE}/graphql`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const result = await resp.json();

  if (result.errors && result.errors.length > 0) {
    throw new Error(result.errors[0].message || 'GraphQL Query Error');
  }

  return result.data;
}
