// src/utils/api.ts

export interface RequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: unknown;
  params?: unknown
}

export const apiRequest = async <T>(url: string, options: RequestOptions): Promise<T> => {
  const { method, headers, body } = options;

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await response.json();

  if (data.error)
    throw new Error(data.error);

  return data;
};
