'use client';
import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '../store/authStore';

interface WithAuthProps {
	children: ReactNode;
}

const WithAuth = ({ children }: WithAuthProps) => {
	const user = useAuthStore((state) => state.user);
	const router = useRouter();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!user) {
			console.log('User is null:', user);
			router.push('/auth');
		} else {
			console.log('User:', user);
			setLoading(false);
		}
	}, [user, router]);

	if (loading) {
		return <div>Loading...</div>;
	}

	return <>{children}</>;
};

export default WithAuth;
