'use client';
import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthContext';

interface WithAuthProps {
	children: ReactNode;
}

const WithAuth = ({ children }: WithAuthProps) => {
	const { user } = useAuth();
	const router = useRouter();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (user === undefined) {
			// user is undefined while loading
			return;
		}

		if (user === null) {
			console.log('User is null:', user);
			router.push('/signin');
		} else {
			console.log('User:', user);
			setLoading(false);
		}
	}, [user, router]);

	if (loading) {
		return <div>Loading...</div>; // Replace with your loading indicator
	}

	return <>{children}</>;
};

export default WithAuth;
