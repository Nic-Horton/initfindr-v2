'use client';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

import useLogin from '@/hooks/useLogin';
import useSignUp from '@/hooks/useSignUp';

export default function Auth() {
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState('');
	const router = useRouter();
	const pathname = usePathname();

	const { login, loading: loginLoading, error: loginError } = useLogin();
	const { signup, loading: signUpLoading, error: signUpError } = useSignUp();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log(inputs);
		try {
			if (pathname === '/signin') {
				await login(inputs);
				router.replace('/battlefield');
			} else if (pathname === '/signup') {
				await signup(inputs);
				router.replace('/battlefield');
			}
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message);
			} else {
				setError('An unknown error occurred.');
			}
		}
	};

	return (
		<MaxWidthWrapper className="h-screen pt-20">
			<Card className="mx-auto max-w-sm">
				<div className="flex justify-center mt-5">
					<Link href="/">
						<Image src={'/goldLogo.png'} alt="Logo" width={40} height={40} />
					</Link>
				</div>
				<CardHeader>
					<CardTitle className="text-2xl">
						{pathname == '/signin' ? 'Sign in' : 'Sign up'}
					</CardTitle>
					<CardDescription>
						Enter your email below to{' '}
						{pathname === '/signin' ? 'sign in' : 'create an account'}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form className="grid gap-4" onSubmit={handleSubmit}>
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								value={inputs.email}
								onChange={(e) =>
									setInputs({ ...inputs, email: e.target.value })
								}
								placeholder="jdoe@example.com"
								required
							/>
						</div>
						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password">Password</Label>
							</div>
							<Input
								id="password"
								type="password"
								value={inputs.password}
								onChange={(e) =>
									setInputs({ ...inputs, password: e.target.value })
								}
								placeholder="Password"
								required
							/>
						</div>
						<Button
							type="submit"
							className="w-full"
							disabled={loginLoading || signUpLoading}
						>
							{loginLoading || signUpLoading
								? 'Loading...'
								: pathname == '/signin'
								? 'Sign in'
								: 'Sign up'}
						</Button>
					</form>
					<div className="mt-4 text-center text-sm">
						{pathname === '/signin' ? (
							<>
								Don&apos;t have an account?{' '}
								<Link href="/signup" className="underline">
									Sign up
								</Link>
							</>
						) : (
							<>
								Already have an account?{' '}
								<Link href="/signin" className="underline">
									Sign in
								</Link>
							</>
						)}
					</div>
					{error && <p>{error}</p>}
					{loginError && <p>{loginError.message}</p>}
					{signUpError && <p>{signUpError.message}</p>}
				</CardContent>
			</Card>
		</MaxWidthWrapper>
	);
}

// export const signOut = async () => {
// 	try {
// 		await firebaseSignOut(auth);
// 		console.log('User signed out successfully');
// 	} catch (error) {
// 		console.error('Error signing out:', error);
// 	}
// };
