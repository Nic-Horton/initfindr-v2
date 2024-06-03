import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { ScanEye } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card';
const tags = Array.from({ length: 50 }).map(
	(_, i, a) => `Unit ${a.length - i}`
);

const BarracksCreatures = () => {
	return (
		<ScrollArea className="h-3/4">
			<div className="flex flex-col gap-2 p-4 pt-0">
				{tags.map((item, index) => (
					<div
						key={index}
						className="flex rounded-lg border items-center justify-between"
					>
						<button
							className={cn(
								'flex flex-col items-start gap-2 w-full rounded-lg p-3 text-left text-sm transition-all hover:bg-accent'
							)}
						>
							<div className="flex w-full flex-col gap-1">
								<div className="flex items-center">
									<div className="flex items-center gap-2">
										<div className="font-semibold">{item}</div>
									</div>
								</div>
							</div>
							<div className="line-clamp-2 text-xs text-muted-foreground">
								{item} description blah blah
							</div>
						</button>
						<HoverCard>
							<HoverCardTrigger>
								<Button variant={'ghost'} size={'icon'} type="button">
									<ScanEye className="size-5" />
								</Button>
							</HoverCardTrigger>
							<HoverCardContent>stats for creature</HoverCardContent>
						</HoverCard>
					</div>
				))}
			</div>
		</ScrollArea>
	);
};

export default BarracksCreatures;
