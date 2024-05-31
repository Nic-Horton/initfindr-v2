import Image from 'next/image';
import { Settings, Sword, Swords, Trash, ScanEye } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
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
							<Button variant="ghost" size="icon" className="md:hidden">
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
