import Image from 'next/image';
import Link from 'next/link';
import { Swords, Castle, FlameKindling, Pickaxe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	TooltipProvider,
} from '@/components/ui/tooltip';
import TrackerDrawer from './TrackerDrawer';
import CreatureDrawer from './CreatureDrawer';

const Sidebar = () => {
	return (
		<aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
			<TooltipProvider>
				<div className="border-b p-2">
					<Button asChild variant="ghost" size="icon" aria-label="Home">
						<Link href="/citadel">
							<Image src={'/goldLogo.png'} alt="Logo" width={25} height={25} />
						</Link>
					</Button>
				</div>
				<nav className="grid gap-1 p-2">
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								asChild
								variant="ghost"
								size="icon"
								className="rounded-lg bg-muted"
								aria-label="The Citadel"
							>
								<Link href="/citadel">
									<Castle className="size-5" />
								</Link>
							</Button>
						</TooltipTrigger>
						<TooltipContent side="right" sideOffset={5}>
							The Citadel
						</TooltipContent>
					</Tooltip>

					<CreatureDrawer />

					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								asChild
								variant="ghost"
								size="icon"
								className="rounded-lg"
								aria-label="The War Room"
							>
								<Link href="/citadel/warroom">
									<Swords className="size-5" />
								</Link>
							</Button>
						</TooltipTrigger>
						<TooltipContent side="right" sideOffset={5}>
							The War Room
						</TooltipContent>
					</Tooltip>

					<TrackerDrawer />
				</nav>
				<nav className="mt-auto grid gap-1 p-2">
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								asChild
								variant="ghost"
								size="icon"
								className="mt-auto rounded-lg"
								aria-label="Account"
							>
								<Link href="/citadel/account">
									<FlameKindling className="size-5" />
								</Link>
							</Button>
						</TooltipTrigger>
						<TooltipContent side="right" sideOffset={5}>
							Account
						</TooltipContent>
					</Tooltip>
				</nav>
			</TooltipProvider>
		</aside>
	);
};

export default Sidebar;
