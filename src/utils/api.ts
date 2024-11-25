// src/utils/api.ts

export interface RequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: unknown;
  params?: unknown;
  url?: string
}

export const apiRequest = async <T>(url: string, options: RequestOptions): Promise<T> => {

  try {
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

    return data;

  } catch (error: any) {
    throw new Error(error);
  }
};
