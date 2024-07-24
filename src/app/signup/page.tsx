import type { Metadata } from 'next';

import Auth from '@/components/auth';

export const metadata: Metadata = {
	title: 'Sign up',
};

function SignupForm() {
	return (
		<div className="bg-gradient-to-br from-stone-800 via-red-800 to-[#675f3b]">
			<Auth />
		</div>
	);
}

export default SignupForm;
