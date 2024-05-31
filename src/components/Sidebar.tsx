import Image from 'next/image';
import Link from 'next/link';
import { Swords, Castle, FlameKindling } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	TooltipProvider,
} from '@/components/ui/tooltip';
import TrackerDrawer from './TrackerDrawer';
import CreatureDrawer from './CreatureDrawer';
import BarracksDrawer from './BarracksDrawer';

const Sidebar = () => {
	return (
		<aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
			<TooltipProvider>
				<div className="border-b p-2">
					<Button asChild variant="ghost" size="icon" aria-label="Home">
						<Link href="/battlefield">
							<Image src={'/goldLogo.png'} alt="Logo" width={24} height={24} />
						</Link>
					</Button>
				</div>
				<nav className="grid gap-1 p-2">
					<CreatureDrawer />

					<BarracksDrawer />

					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								asChild
								variant="ghost"
								size="icon"
								className="rounded-lg"
								aria-label="camp"
							>
								<Link href="/battlefield/camp">
									<FlameKindling className="size-5" />
								</Link>
							</Button>
						</TooltipTrigger>
						<TooltipContent side="right" sideOffset={5}>
							Camp
						</TooltipContent>
					</Tooltip>

					<TrackerDrawer />
				</nav>
			</TooltipProvider>
		</aside>
	);
};

export default Sidebar;
