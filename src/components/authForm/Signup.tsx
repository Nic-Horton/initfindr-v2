'use client';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import useSignUp from '@/hooks/useSignUp';

import { Loader2 } from 'lucide-react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Signup() {
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	});

	const { signup, loading, error } = useSignUp();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<form className="grid gap-4" onSubmit={handleSubmit}>
			<div className="grid gap-2">
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					type="email"
					value={inputs.email}
					onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
					placeholder="jdoe@example.com"
					autoComplete="email"
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
					onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
					placeholder="Password"
					autoComplete="new-password"
				/>
			</div>

			{error && (
				<Alert variant="destructive">
					<AlertCircle className="h-4 w-4" />
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>{error.message}</AlertDescription>
				</Alert>
			)}

			<Button type="submit" className="w-full" disabled={loading}>
				{loading ? (
					<>
						<Loader2 className="mr-2 h-4 w-4 animate-spin" />
						Please wait
					</>
				) : (
					'Sign Up'
				)}
			</Button>
		</form>
	);
}
