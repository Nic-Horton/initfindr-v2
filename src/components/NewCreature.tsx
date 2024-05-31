import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';

const NewCreature = () => {
	return (
		<Card className="mx-auto max-w-sm">
			<CardHeader>
				<CardTitle className="text-2xl text-center pb-2">
					New Creature Entry
				</CardTitle>
				<CardDescription>
					<Tabs defaultValue="account" className="w-full">
						<TabsList className="w-full">
							<TabsTrigger className="w-1/2" value="creatures">
								Creatures
							</TabsTrigger>
							<TabsTrigger className="w-1/2" value="monsters">
								Monsters
							</TabsTrigger>
						</TabsList>
						<TabsContent value="creatures">Friendly units.</TabsContent>
						<TabsContent value="monsters">Hostile units.</TabsContent>
					</Tabs>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-3 gap-4">
					<div className="grid col-span-full gap-2">
						<Label htmlFor="name">Name</Label>
						<Input id="name" placeholder="John Doe" required />
					</div>
					<div className="grid col-span-full gap-2">
						<Label htmlFor="portrait">Portrait</Label>
						<Input id="portrait" type="file" className="hover:cursor-pointer" />
					</div>
					<div className="grid grid-cols-2 gap-4 col-span-full">
						<div className="grid gap-2">
							<Label htmlFor="ac">Armor Class</Label>
							<Input id="ac" type="number" />
						</div>
						<div className="grid gap-2">
							<Label htmlFor="hp">Health Points</Label>
							<Input id="ac" type="number" />
						</div>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="fs" className="text-center">
							Fortitude
						</Label>
						<Input id="fs" type="number" />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="ws" className="text-center">
							Will
						</Label>
						<Input id="ws" type="number" />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="rs" className="text-center">
							Reflex
						</Label>
						<Input id="rs" type="number" />
					</div>
					<div className="grid gap-2 col-span-full">
						<Label htmlFor="description">Description</Label>
						<Textarea
							placeholder="Enter creature description"
							id="description"
						/>
					</div>
					<Button type="submit" className="w-full col-span-full">
						Create Creature
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};

export default NewCreature;
