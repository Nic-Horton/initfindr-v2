import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

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

export const metadata: Metadata = {
	title: 'Sign in',
};

function SigninForm() {
	return (
		<div className="bg-gradient-to-br from-stone-800 via-red-800 to-[#675f3b]">
			<MaxWidthWrapper className="h-screen pt-20">
				<Card className="mx-auto max-w-sm">
					<div className="flex justify-center mt-5">
						<Link href="/">
							<Image src={'/goldLogo.png'} alt="Logo" width={40} height={40} />
						</Link>
					</div>
					<CardHeader>
						<CardTitle className="text-2xl">Sign in</CardTitle>
						<CardDescription>
							Enter your email below to sign in to your account
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid gap-4">
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="jdoe@example.com"
									required
								/>
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
								</div>
								<Input id="password" type="password" required />
							</div>
							<Button type="submit" className="w-full">
								Sign in
							</Button>
							<Button variant="outline" className="w-full">
								Sign in with Google
							</Button>
						</div>
						<div className="mt-4 text-center text-sm">
							Don&apos;t have an account?{' '}
							<Link href="/signup" className="underline">
								Sign up
							</Link>
						</div>
					</CardContent>
				</Card>
			</MaxWidthWrapper>
		</div>
	);
}

export default SigninForm;
