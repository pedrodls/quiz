import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IUserSession {
  username: string;
  email: string;
  documentId: number;
}

export interface IAuthSession {
  user: IUserSession;
  jwt: string;
}

export interface ISession {
  session: IAuthSession | undefined;
  clear(): void;
  getUser(): IAuthSession | undefined;
  setSession(data: IAuthSession): void;
}

export const useSession = create(
  persist<ISession>(
    (set, get) => ({
      session: undefined,
      getUser() {
        return get().session;
      },
      clear() {
        set({ session: undefined });
      },
      setSession(data: IAuthSession) {
        set({ session: data });
      },
    }),
    {
      name: "session",
      storage: {
        getItem(name) {
          const str = localStorage.getItem(name);
          if (!str) return null;

          return JSON.parse(str);
        },
        setItem(name, newValue) {
          const str = JSON.stringify(newValue);
          localStorage.setItem(name, str);
        },
        removeItem(name) {
          localStorage.removeItem(name);
        },
      },
    }
  )
);
