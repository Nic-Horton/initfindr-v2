'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Login from './Login';
import Signup from './Signup';

export default function AuthForm() {
	const [isLogin, setIsLogin] = useState(true);

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
						{isLogin ? 'Log in' : 'Sign up'}
					</CardTitle>
					<CardDescription>
						Enter your email below to {isLogin ? 'log in' : 'create an account'}
					</CardDescription>
				</CardHeader>
				<CardContent>
					{isLogin ? <Login /> : <Signup />}

					<div className="flex mt-4 justify-center text-sm">
						<div>
							{isLogin ? "Don't have an account? " : 'Already have an account?'}
						</div>
						<div
							onClick={() => setIsLogin(!isLogin)}
							className="text-red-600 ml-1 font-bold cursor-pointer"
						>
							{isLogin ? 'Sign Up' : 'Log in'}
						</div>
					</div>
				</CardContent>
			</Card>
		</MaxWidthWrapper>
	);
}
