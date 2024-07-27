import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, db } from '../lib/firebase';
import {
	collection,
	doc,
	getDocs,
	query,
	setDoc,
	where,
} from 'firebase/firestore';
import useAuthStore from '../store/authStore';
import useShowToast from './useShowToast';

interface LoginInputs {
	email: string;
	password: string;
}

const useSignUp = () => {
	const [createUserWithEmailAndPassword, , loading, error] =
		useCreateUserWithEmailAndPassword(auth);

	const showToast = useShowToast();
	const loginUser = useAuthStore((state) => state.login);

	const signup = async (inputs: LoginInputs): Promise<void> => {
		if (!inputs.email || !inputs.password) {
			showToast('Error', 'Please fill all the fields', 'destructive');
			return;
		}

		const usersRef = collection(db, 'users');
		const q = query(usersRef, where('email', '==', inputs.email));
		const querySnapshot = await getDocs(q);

		if (!querySnapshot.empty) {
			showToast('Error', 'Email is already in use', 'destructive');
			return;
		}

		try {
			const newUser = await createUserWithEmailAndPassword(
				inputs.email,
				inputs.password
			);

			if (!newUser && error) {
				showToast('Error', error.message);
				return;
			}

			if (newUser) {
				const userDoc = {
					uid: newUser.user.uid,
					email: inputs.email,
					battles: [],
					createdAt: Date.now(),
				};

				await setDoc(doc(db, 'users', newUser.user.uid), userDoc);
				localStorage.setItem('user-info', JSON.stringify(userDoc));
				loginUser(userDoc);
			}
		} catch (error) {
			if (error instanceof Error) {
				showToast('Error', error.message, 'destructive');
			} else {
				showToast('Error', 'An unknown error occurred', 'destructive');
			}
		}
	};

	return { loading, error, signup };
};

export default useSignUp;
