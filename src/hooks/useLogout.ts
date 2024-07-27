import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';
import useAuthStore from '../store/authStore';
import useShowToast from './useShowToast';

const useLogout = () => {
	const [signOut, isLoggingOut, error] = useSignOut(auth);
	const showToast = useShowToast();
	const logoutUser = useAuthStore((state) => state.logout);

	const handleLogout = async () => {
		try {
			await signOut();
			localStorage.removeItem('user-info');
			logoutUser();
		} catch (error) {
			if (error instanceof Error) {
				showToast('Error', error.message, 'destructive');
			} else {
				showToast('Error', 'An unknown error occurred', 'destructive');
			}
		}
	};

	return { handleLogout, isLoggingOut, error };
};

export default useLogout;
