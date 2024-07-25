'use client';
import { Button } from '@/components/ui/button';
import { LogOutIcon } from 'lucide-react';
import { signOut } from '@/components/auth';
import { useRouter } from 'next/navigation';

const SignOutButton = () => {
	const router = useRouter();
	const handleSignOut = async () => {
		await signOut();

		router.push('/');
	};

	return (
		<Button
			asChild
			variant="destructive"
			size="sm"
			className="ml-auto gap-1.5 text-sm"
			onClick={handleSignOut}
		>
			<div className="cursor-pointer">
				<LogOutIcon className="size-3.5" />
				Logout
			</div>
		</Button>
	);
};

export default SignOutButton;
