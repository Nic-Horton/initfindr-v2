import Link from 'next/link';
import { LogOutIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Sidebar from '@/components/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="grid h-screen w-full pl-[53px]">
			<Sidebar />
			<div className="flex flex-col">
				<header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
					<h1 className="text-xl font-semibold">The Battlefield</h1>
					<Button
						asChild
						variant="outline"
						size="sm"
						className="ml-auto gap-1.5 text-sm"
					>
						<Link href="/logout">
							<LogOutIcon className="size-3.5" />
							Logout
						</Link>
					</Button>
				</header>
				{children}
			</div>
		</div>
	);
}
