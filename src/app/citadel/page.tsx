import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Dashboard() {
	return (
		<main className="grid flex-1">
			<div className="relative flex h-full flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
				<div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
					<div className="flex flex-col items-center gap-1 text-center">
						<h3 className="text-2xl font-bold tracking-tight">
							You have no Creatures
						</h3>
						<p className="text-sm text-muted-foreground">
							You can start battling as soon as you add a creature.
						</p>
						<Button asChild className="mt-4">
							<Link href="/citadel/forge">To the Forge</Link>
						</Button>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Dashboard;
