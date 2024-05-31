import { Castle } from 'lucide-react';

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

const BarracksDrawer = () => {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<span>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="rounded-lg"
								aria-label="The Barracks"
							>
								<Castle className="size-5" />
								<span className="sr-only">The Barracks</span>
							</Button>
						</TooltipTrigger>
						<TooltipContent side="right" sideOffset={5}>
							The Barracks
						</TooltipContent>
					</Tooltip>
				</span>
			</DrawerTrigger>
			<DrawerContent className="max-h-[80vh]">
				<DrawerHeader>
					<DrawerTitle className="text-center">The Barracks</DrawerTitle>
					<DrawerDescription className="text-center">
						Update your creatures here.
					</DrawerDescription>
				</DrawerHeader>
			</DrawerContent>
		</Drawer>
	);
};

export default BarracksDrawer;
