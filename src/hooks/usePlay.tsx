import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IUserSession } from "./useSession";

export type GameState = "Started" | "Paused" | "Finished"

export interface IPlay {
  username: string;
  email: string;
}

export interface IGamePlay {
  user: IUserSession;
  state: GameState
}

export interface IGamePlayer {
  game: IGamePlay | undefined;
  clear(): void;
  getGame(): IGamePlay | undefined;
  setGame(data: IGamePlay): void;
}

export const usePlay = create(
  persist<IGamePlayer>(
    (set, get) => ({
      game: undefined,
      getGame() {
        return get().game;
      },
      clear() {
        set({ game: undefined });
      },
      setGame(data: IGamePlay) {
        set({ game: data });
      },
    }),
    {
      name: "game",
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
