'use client';
import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '../store/authStore';

interface RedirectIfAuthenticatedProps {
	children: ReactNode;
}

const RedirectIfAuthenticated = ({
	children,
}: RedirectIfAuthenticatedProps) => {
	const user = useAuthStore((state) => state.user);
	const router = useRouter();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (user) {
			router.push('/battlefield');
		} else {
			setLoading(false);
		}
	}, [user, router]);

	if (loading) {
		return <div>Loading...</div>;
	}

	return <>{children}</>;
};

export default RedirectIfAuthenticated;
