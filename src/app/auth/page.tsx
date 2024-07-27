import type { Metadata } from 'next';

import AuthForm from '@/components/authForm/AuthForm';
import RedirectIfAuthenticated from '@/lib/RedirectIfAuth';

export const metadata: Metadata = {
	title: 'Authenticate',
};

function Auth() {
	return (
		<RedirectIfAuthenticated>
			<div className="bg-gradient-to-br from-stone-800 via-red-800 to-[#675f3b]">
				<AuthForm />
			</div>
		</RedirectIfAuthenticated>
	);
}

export default Auth;
