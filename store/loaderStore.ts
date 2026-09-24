import { create } from "zustand";

interface LoaderState {
  isLoading: boolean;
  activeRequests: number;
  showLoader: () => void;
  hideLoader: () => void;
}

export const useLoaderStore = create<LoaderState>((set) => ({
  isLoading: false,
  activeRequests: 0,
  showLoader: () =>
    set((state) => ({
      activeRequests: state.activeRequests + 1,
      isLoading: true,
    })),
  hideLoader: () =>
    set((state) => {
      const activeRequests = Math.max(0, state.activeRequests - 1);
      return {
        activeRequests,
        isLoading: activeRequests > 0,
      };
    }),
}));
