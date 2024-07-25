'use client';
import { useState } from 'react';
import { auth } from '../lib/firebase';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut as firebaseSignOut,
} from 'firebase/auth';
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

export default function Auth() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const router = useRouter();
	const pathname = usePathname();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			if (pathname === '/signin') {
				await signInWithEmailAndPassword(auth, email, password);
			} else if (pathname === '/signup') {
				await createUserWithEmailAndPassword(auth, email, password);
			}
			router.push('/battlefield');
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
								value={email}
								onChange={(e) => setEmail(e.target.value)}
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
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Password"
								required
							/>
						</div>
						<Button type="submit" className="w-full">
							{pathname == '/signin' ? 'Sign in' : 'Sign up'}
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
				</CardContent>
			</Card>
		</MaxWidthWrapper>
	);
}

export const signOut = async () => {
	try {
		await firebaseSignOut(auth);
		console.log('User signed out successfully');
	} catch (error) {
		console.error('Error signing out:', error);
	}
};
