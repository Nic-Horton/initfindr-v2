import { Pickaxe } from 'lucide-react';

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

import NewCreature from './NewCreature';

const CreatureDrawer = () => {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<span>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button variant="ghost" size="icon">
								<Pickaxe className="size-5" />
								<span className="sr-only">Creature Entry</span>
							</Button>
						</TooltipTrigger>
						<TooltipContent side="right" sideOffset={5}>
							The Forge
						</TooltipContent>
					</Tooltip>
				</span>
			</DrawerTrigger>
			<DrawerContent className="max-h-[80vh]">
				<DrawerHeader>
					<DrawerTitle className="text-center">The Forge</DrawerTitle>
					<DrawerDescription className="text-center">
						Create your creatures here.
					</DrawerDescription>
				</DrawerHeader>

				<NewCreature />
			</DrawerContent>
		</Drawer>
	);
};

export default CreatureDrawer;
