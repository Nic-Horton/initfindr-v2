import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, db } from '../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import useAuthStore from '../store/authStore';
import useShowToast from './useShowToast';
import { UserData } from '../store/authStore';

interface LoginInputs {
	email: string;
	password: string;
}

const useLogin = () => {
	const showToast = useShowToast();

	const [signInWithEmailAndPassword, , loading, error] =
		useSignInWithEmailAndPassword(auth);
	const loginUser = useAuthStore((state) => state.login);

	const login = async (inputs: LoginInputs): Promise<void> => {
		if (!inputs.email || !inputs.password) {
			return showToast('Error', 'Please fill all the fields', 'destructive');
		}
		try {
			const userCred = await signInWithEmailAndPassword(
				inputs.email,
				inputs.password
			);

			if (userCred) {
				const docRef = doc(db, 'users', userCred.user.uid);
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					localStorage.setItem('user-info', JSON.stringify(docSnap.data()));
					loginUser(docSnap.data() as UserData);
				} else {
					showToast('Error', 'No such user!', 'destructive');
				}
			}
		} catch (error) {
			if (error instanceof Error) {
				showToast('Error', error.message, 'destructive');
			} else {
				showToast('Error', 'An unknown error occurred', 'destructive');
			}
		}
	};

	return { loading, error, login };
};

export default useLogin;
