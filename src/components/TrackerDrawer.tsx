import { Settings } from 'lucide-react';

import { Button } from '@/components/ui/button';

import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import BattleController from './BattleController';

const tags = Array.from({ length: 10 }).map(
	(_, i, a) => `Unit ${a.length - i}`
);

const TrackerDrawer = () => {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<span>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="md:hidden rounded-lg"
								aria-label="Battle Configurations"
							>
								<Settings className="size-5" />
								<span className="sr-only">Battle Configurations</span>
							</Button>
						</TooltipTrigger>
						<TooltipContent side="right" sideOffset={5}>
							Battle Config
						</TooltipContent>
					</Tooltip>
				</span>
			</DrawerTrigger>
			<DrawerContent className="max-h-[80vh]">
				<div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
				<DrawerHeader>
					<DrawerTitle className="text-center">Configurations</DrawerTitle>
					<DrawerDescription className="text-center">
						Configure the battlefield.
					</DrawerDescription>
				</DrawerHeader>
				<div className="overflow-auto p-4 pt-0">
					<BattleController />
				</div>
			</DrawerContent>
		</Drawer>
	);
};

export default TrackerDrawer;
