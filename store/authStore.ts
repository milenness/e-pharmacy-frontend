import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginUser, registerUser, logoutUser } from "../api/requests";
import { AuthCredentials } from "../types/api";

interface AuthState {
  user: { name: string | null; email: string | null };
  token: string | null;
  isLoggedIn: boolean;
  error: string | null;
  login: (credentials: AuthCredentials) => Promise<void>;
  register: (credentials: AuthCredentials) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: { name: null, email: null },
      token: null,
      isLoggedIn: false,
      error: null,

      login: async (credentials) => {
        try {
          set({ error: null });
          const data = await loginUser(credentials);
          set({
            user: { name: data.user.name, email: data.user.email },
            token: data.token,
            isLoggedIn: true,
            error: null,
          });
        } catch (error: unknown) {
          const errorMessage =
            error instanceof Error ? error.message : "Login failed";
          set({ error: errorMessage });
          throw error;
        }
      },

      register: async (credentials) => {
        try {
          set({ error: null });
          await registerUser(credentials);
          const loginData = await loginUser({
            email: credentials.email,
            password: credentials.password || "",
          });
          set({
            user: { name: loginData.user.name, email: loginData.user.email },
            token: loginData.token,
            isLoggedIn: true,
            error: null,
          });
        } catch (error: unknown) {
          const errorMessage =
            error instanceof Error ? error.message : "Registration failed";
          set({ error: errorMessage });
          throw error;
        }
      },

      logout: async () => {
        try {
          await logoutUser();
        } finally {
          set({
            user: { name: null, email: null },
            token: null,
            isLoggedIn: false,
            error: null,
          });
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
