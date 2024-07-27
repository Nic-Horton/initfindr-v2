'use client';
import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '../store/authStore';
import { Loader2 } from 'lucide-react';

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
		return (
			<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-stone-800 via-red-800 to-[#675f3b]">
				<Loader2 className="mr-2 h-20 w-20 animate-spin" />
			</div>
		);
	}

	return <>{children}</>;
};

export default RedirectIfAuthenticated;
