import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useAuthStore = create(
  devtools((set) => ({
    name: null,
    isLogged: false,
    login(name) {
      set({ name, isLogged: true });
    },
    logout() {
      set({ name: null, isLogged: false });
    },
  }))
);
