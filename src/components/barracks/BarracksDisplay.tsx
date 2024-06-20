import { Button } from '@/components/ui/button';
import { Shield, Heart, Ham, Brain, Zap, Trash2 } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import Image from 'next/image';

const BarracksDisplay = () => {
	return (
		<div className="flex h-full flex-col">
			<div className="flex items-center p-1">
				<div className="flex items-center gap-2">
					<Tooltip>
						<TooltipTrigger asChild>
							<Button variant="ghost" size="icon">
								<Trash2 className="size-5 stroke-primary" />
								<span className="sr-only">Delete Creature</span>
							</Button>
						</TooltipTrigger>
						<TooltipContent>Delete Creature</TooltipContent>
					</Tooltip>
				</div>
			</div>
			<Separator />
			<div className="grid w-full items-start gap-2 overflow-auto p-2 max-w-screen-xl mx-auto">
				<fieldset className="grid md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 rounded-lg border p-4">
					<legend className="-ml-1 px-1 text-sm font-medium">
						Creature Information
					</legend>

					<div className="grid gap-3 h-fit">
						<div className="grid col-span-full gap-2 ">
							<Label htmlFor="name">Name</Label>
							<Input id="name" placeholder="John Doe" required />
						</div>
						<div className="grid col-span-full gap-2">
							<Label htmlFor="portrait">Portrait</Label>
							<Input
								id="portrait"
								type="file"
								className="hover:cursor-pointer"
							/>
						</div>
						<div className="grid col-span-full gap-2">
							<Label htmlFor="description">Description</Label>
							<Textarea
								placeholder="Enter creature description"
								id="description"
								className="max-h-[180px]"
							/>
						</div>
					</div>
					<div className="hidden md:flex relative w-full justify-center">
						<Image
							src={'/placeholder.svg'}
							height="200"
							width="200"
							alt="Selected image"
							className="aspect-square w-full max-w-[350px] rounded-md object-cover"
						/>
					</div>
				</fieldset>

				<fieldset className="grid gap-6 rounded-lg border p-4">
					<legend className="-ml-1 px-1 text-sm font-medium">
						Creature Stats
					</legend>

					<div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(106px,1fr))]">
						<div className="grid gap-2">
							<Label htmlFor="ac">
								<div className="flex items-center justify-center gap-1">
									<Shield className="size-5" />
									Armor Class
								</div>
							</Label>
							<Input id="ac" type="number" />
						</div>
						<div className="grid gap-2">
							<Label htmlFor="hp">
								<div className="flex items-center justify-center gap-1">
									<Heart className="size-5" />
									Health
								</div>
							</Label>
							<Input id="ac" type="number" />
						</div>

						<div className="grid gap-2">
							<Label htmlFor="fs">
								<div className="flex items-center justify-center gap-1">
									<Ham className="size-5" />
									Fortitude
								</div>
							</Label>
							<Input id="fs" type="number" />
						</div>
						<div className="grid gap-2">
							<Label htmlFor="ws">
								<div className="flex items-center justify-center  gap-1">
									<Brain className="size-5" />
									Will
								</div>
							</Label>
							<Input id="ws" type="number" />
						</div>
						<div className="grid gap-2">
							<Label htmlFor="rs">
								<div className="flex items-center justify-center  gap-1">
									<Zap className="size-5" />
									Reflex
								</div>
							</Label>
							<Input id="rs" type="number" />
						</div>
					</div>

					<Button type="submit" className="w-full col-span-full">
						Update Creature
					</Button>
				</fieldset>
			</div>
		</div>
	);
};

export default BarracksDisplay;
