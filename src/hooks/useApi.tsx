/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useCallback } from "react";
import { apiRequest } from "../utils/api";
import { useSession } from "./useSession";

export type useApiProps = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  params?: any
};

export interface IUseResult {
  loading: boolean;
  error: string | null;
  data: any;
  resolve(): Promise<any>;
}

export const useApi = ({ method, url, params }: useApiProps): IUseResult => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const resolve = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const token = useSession.getState().session?.jwt;

      const data = await apiRequest<any>("/api/" + url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: (token ? `Bearer ${token}` : undefined)!,
        },
        params
      });

      if (data) setData(data);
    } catch (err: any) {
      setError(err.message || "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }, [method, url]);

  return {
    resolve,
    loading,
    error,
    data,
  };
};