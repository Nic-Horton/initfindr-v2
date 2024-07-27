import { create } from 'zustand';

export interface AuthState {
	user: UserData | null;
	login: (user: UserData) => void;
	logout: () => void;
	setUser: (user: UserData | null) => void;
}

export interface UserData {
	uid: string;
	email: string;
	battles: string[];
	createdAt: number;
}

const useAuthStore = create<AuthState>((set) => ({
	user: JSON.parse(
		localStorage.getItem('user-info') as string
	) as UserData | null,
	login: (user) => set({ user }),
	logout: () => set({ user: null }),
	setUser: (user) => set({ user }),
}));

export default useAuthStore;
