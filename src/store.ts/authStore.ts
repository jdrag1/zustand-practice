import { create } from 'zustand';

interface AuthState {
  token: string | null;
  user: any | null; // Replace 'any' with your user type
  isLoggedIn: boolean;
  login: (token: string, user: any) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  isLoggedIn: false,
  login: (token, user) => set({ token, user, isLoggedIn: true }),
  logout: () => set({ token: null, user: null, isLoggedIn: false }),
}));

export default useAuthStore;