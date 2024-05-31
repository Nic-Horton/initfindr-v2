import { ScanEye, ScanSearch } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
const tags = Array.from({ length: 50 }).map(
	(_, i, a) => `Unit ${a.length - i}`
);

const BarracksCreatures = () => {
	return (
		<ScrollArea className="h-3/4">
			<div className="flex flex-col gap-2 p-4 pt-0">
				{tags.map((item, index) => (
					<button
						key={index}
						className={cn(
							'flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent'
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
				))}
			</div>
		</ScrollArea>
	);
};

export default BarracksCreatures;
