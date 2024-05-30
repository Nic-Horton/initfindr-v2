import Image from 'next/image';

import { Swords, Castle, FlameKindling, Pickaxe } from 'lucide-react';

import { Button } from '@/components/ui/button';

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	TooltipProvider,
} from '@/components/ui/tooltip';

const Sidebar = () => {
	return (
		<aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
			<div className="border-b p-2">
				<Button variant="ghost" size="icon" aria-label="Home">
					<Image src={'/goldLogo.png'} alt="Logo" width={25} height={25} />
				</Button>
			</div>
			<nav className="grid gap-1 p-2">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="rounded-lg bg-muted"
								aria-label="The Citadel"
							>
								<Castle className="size-5" />
							</Button>
						</TooltipTrigger>
						<TooltipContent side="right" sideOffset={5}>
							The Citadel
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="rounded-lg"
								aria-label="The Forge"
							>
								<Pickaxe className="size-5" />
							</Button>
						</TooltipTrigger>
						<TooltipContent side="right" sideOffset={5}>
							The Forge
						</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="rounded-lg"
								aria-label="The War Room"
							>
								<Swords className="size-5" />
							</Button>
						</TooltipTrigger>
						<TooltipContent side="right" sideOffset={5}>
							The War Room
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</nav>
			<nav className="mt-auto grid gap-1 p-2">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="mt-auto rounded-lg"
								aria-label="Account"
							>
								<FlameKindling className="size-5" />
							</Button>
						</TooltipTrigger>
						<TooltipContent side="right" sideOffset={5}>
							Account
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</nav>
		</aside>
	);
};

export default Sidebar;
