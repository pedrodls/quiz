"use client";

import { useState, useCallback } from "react";
import { apiRequest } from "../utils/api";
import { LoginDataType } from "@/app/(auth)/login/schema";
import { SignupDataType } from "@/app/(auth)/signup/schema";
import { useRouter } from "next/navigation";
import { IAuthSession, useSession } from "./useSession";

export interface UseAuthResult {
  login: ({ email, password }: LoginDataType) => Promise<void>;
  signup: ({ email, password }: SignupDataType) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
  user: IAuthSession["user"] | null;
}

export const useAuth = (): UseAuthResult => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<IAuthSession["user"] | null>(null);

  const router = useRouter()

  const login = useCallback(async ({ email, password }: LoginDataType) => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiRequest<IAuthSession>("/api/auth/login", {
        method: "POST",
        body: { email, password },
      });

      if (data.jwt) {
        useSession.getState().setSession(data);
        setUser(data.user);
        localStorage.setItem("auth_token", data?.jwt);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }, []);

  const signup = useCallback(async ({ email, password }: SignupDataType) => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiRequest<IAuthSession>("/api/auth/signup", {
        method: "POST",
        body: { email, password, username: email.split("@")[0] },
      });

      if (data.jwt) {
        useSession.getState().setSession(data);
        setUser(data.user);
        localStorage.setItem("auth_token", data?.jwt);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = () => {

    useSession.getState().clear();

    router.push("/");
  }

  return {
    login,
    signup,
    logout,
    loading,
    error,
    user,
  };
};
