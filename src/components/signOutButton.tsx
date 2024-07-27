'use client';
import { Button } from '@/components/ui/button';
import useLogout from '@/hooks/useLogout';
import { LogOutIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const SignOutButton = () => {
	const router = useRouter();
	const { handleLogout, isLoggingOut, error } = useLogout();

	return (
		<Button
			asChild
			variant="destructive"
			size="sm"
			className="ml-auto gap-1.5 text-sm"
			onClick={handleLogout}
			disabled={isLoggingOut}
		>
			<div className="cursor-pointer">
				<LogOutIcon className="size-3.5" />
				Logout
			</div>
		</Button>
	);
};

export default SignOutButton;
