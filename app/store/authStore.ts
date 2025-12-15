import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  id: number | null;
  username: string;
  role: "student" | "teacher";
  organization : string;
  setAuth: (data: { id: number; username: string; role: "student" | "teacher";organization : string }) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      id: null,
      username: "",
      role: "student",
      organization : "",
      setAuth: (data) =>
        set({
          id: data.id,
          username: data.username,
          role: data.role,
          organization : data.organization
        }),
      logout: () =>
        set({
          id: null,
          username: "",
          role: "student",
          organization : "",
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);
