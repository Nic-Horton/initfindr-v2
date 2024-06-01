import type { Metadata } from 'next';
import BattleController from '@/components/BattleController';

export const metadata: Metadata = {
	title: 'Battlefield',
};

function Dashboard() {
	return (
		<main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
			<div className="relative hidden flex-col items-start gap-8 md:flex">
				<BattleController />
			</div>
			<div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
				Cards for players
			</div>
		</main>
	);
}

export default Dashboard;
