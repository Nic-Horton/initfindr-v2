import { Button } from '@/components/ui/button';
import { Shield, Heart, Ham, Brain, Zap } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const NewCreature = () => {
	return (
		<div className="grid w-full items-start gap-6 overflow-auto p-4 pt-0 max-w-screen-xl mx-auto">
			<fieldset className="grid lg:grid-cols-2 gap-6 rounded-lg border p-4">
				<legend className="-ml-1 px-1 text-sm font-medium">
					Creature Information
				</legend>

				<div className="grid gap-3">
					<div className="grid col-span-full gap-2">
						<Label htmlFor="name">Name</Label>
						<Input id="name" placeholder="John Doe" required />
					</div>
					<div className="grid col-span-full gap-2">
						<Label htmlFor="portrait">Portrait</Label>
						<Input id="portrait" type="file" className="hover:cursor-pointer" />
					</div>
					<div className="grid col-span-full gap-2">
						<Label htmlFor="description">Description</Label>
						<Textarea
							placeholder="Enter creature description"
							id="description"
						/>
					</div>
				</div>
				<div className="hidden lg:flex relative w-full bg-red-400">
					<img src={'/oopsWarrior.jpg'} alt="Selected image" />
				</div>
			</fieldset>

			<fieldset className="grid grid-cols-2 grid-rows-2 sm:grid-cols-5 gap-6 rounded-lg border p-4">
				<legend className="-ml-1 px-1 text-sm font-medium">
					Creature Stats
				</legend>

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

				<Button type="submit" className="w-full col-span-full">
					Create Creature
				</Button>
			</fieldset>
		</div>
	);
};

export default NewCreature;
