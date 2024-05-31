import { Castle, Search } from 'lucide-react';

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
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import BarracksCreatures from './BarracksCreatures';
import BarracksDisplay from './BarracksDisplay';

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
			<DrawerContent className="max-h-[80vh] min-h-[60vh]">
				<DrawerHeader>
					<DrawerTitle className="text-center">The Barracks</DrawerTitle>
					<DrawerDescription className="text-center">
						Update your creatures here.
					</DrawerDescription>
				</DrawerHeader>

				<ResizablePanelGroup
					direction="horizontal"
					className="h-full max-h-[80vh] min-h-[60vh] items-stretch"
				>
					<ResizablePanel defaultSize={40}>
						<div className="flex items-center px-4 py-2">
							<h1 className="text-xl font-bold">Creatures</h1>
						</div>
						<Separator />
						<div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
							<form>
								<div className="relative">
									<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
									<Input placeholder="Search" className="pl-8" />
								</div>
							</form>
						</div>

						<BarracksCreatures />
					</ResizablePanel>
					<ResizableHandle withHandle />
					<ResizablePanel defaultSize={60}>
						{/* Need to make this dynamic later */}
						<BarracksDisplay />
					</ResizablePanel>
				</ResizablePanelGroup>
			</DrawerContent>
		</Drawer>
	);
};

export default BarracksDrawer;
