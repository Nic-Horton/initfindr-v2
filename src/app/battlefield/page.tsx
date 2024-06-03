import type { Metadata } from 'next';
import BattleController from '@/components/BattleController';

export const metadata: Metadata = {
	title: 'Battlefield',
};

function Dashboard() {
	return (
		<main className="grid flex-1 gap-4 p-4 lg:grid-cols-3">
			<div className=" hidden flex-col items-start gap-8 lg:flex">
				<BattleController />
			</div>
			<div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
				<div>Cards for players</div>
			</div>
		</main>
	);
}

export default Dashboard;
