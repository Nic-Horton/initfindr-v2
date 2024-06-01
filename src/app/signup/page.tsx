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
	title: 'Sign up',
};

function SignupForm() {
	return (
		<div className="bg-gradient-to-br from-stone-800 via-red-800 to-[#675f3b]">
			<MaxWidthWrapper className="h-screen pt-20 ">
				<Card className="mx-auto max-w-sm">
					<div className="flex justify-center mt-5">
						<Link href="/">
							<Image src={'/goldLogo.png'} alt="Logo" width={40} height={40} />
						</Link>
					</div>
					<CardHeader>
						<CardTitle className="text-2xl">Sign Up</CardTitle>
						<CardDescription>
							Enter your information to create an account
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid gap-4">
							<div className="grid gap-2">
								<Label htmlFor="name">Name</Label>
								<Input id="name" placeholder="John Doe" required />
							</div>
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
								<Label htmlFor="password">Password</Label>
								<Input id="password" type="password" />
							</div>
							<Button type="submit" className="w-full">
								Create an account
							</Button>
							<Button variant="outline" className="w-full">
								Sign up with Google
							</Button>
						</div>
						<div className="mt-4 text-center text-sm">
							Already have an account?{' '}
							<Link href="/signin" className="underline">
								Sign in
							</Link>
						</div>
					</CardContent>
				</Card>
			</MaxWidthWrapper>
		</div>
	);
}

export default SignupForm;
