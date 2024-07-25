import Sidebar from '@/components/Sidebar';
import WithAuth from '@/lib/withAuth';
import SignOutButton from '@/components/signOutButton';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<WithAuth>
			<div className="grid h-screen w-full pl-[53px]">
				<Sidebar />
				<div className="flex flex-col">
					<header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
						<h1 className="text-xl font-semibold">The Battlefield</h1>
						<SignOutButton />
					</header>
					{children}
				</div>
			</div>
		</WithAuth>
	);
}
