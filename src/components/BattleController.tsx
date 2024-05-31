import Image from 'next/image';
import { Sword, Swords, Trash, ScanEye } from 'lucide-react';

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

const tags = Array.from({ length: 10 }).map(
	(_, i, a) => `Unit ${a.length - i}`
);

const BattleController = () => {
	return (
		<div className="grid w-full items-start gap-6">
			<fieldset className="grid gap-6 rounded-lg border p-4">
				<legend className="-ml-1 px-1 text-sm font-medium">
					Battle Manager
				</legend>
				<div className="grid gap-3">
					<Label htmlFor="battles" className="flex items-center gap-1">
						Created Battles
						<Button variant={'ghost'} size={'icon'} type="button" className="">
							<Trash className="size-5 stroke-primary" />
						</Button>
					</Label>
					<Select>
						<SelectTrigger
							id="battles"
							className="items-start [&_[data-description]]:hidden"
						>
							<SelectValue placeholder="Select a battle" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="battleid1">
								<div className="flex items-start gap-3 text-muted-foreground">
									<Sword className="size-5" />
									<div className="grid gap-0.5">
										<p>Battle One</p>
									</div>
								</div>
							</SelectItem>
							<SelectItem value="battleid2">
								<div className="flex items-start gap-3 text-muted-foreground">
									<Sword className="size-5" />
									<div className="grid gap-0.5">
										<p>Battle Two</p>
									</div>
								</div>
							</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<form className="grid gap-3">
					<Label htmlFor="add-battle-name">New Battle Name</Label>
					<Input
						id="add-battle-name"
						type="text"
						placeholder="Battle of Helm's Deep"
						required
					/>
					<Button type="submit">
						Create Battle <Swords />
					</Button>
				</form>

				<div className="grid gap-3 w-fit">
					<Label htmlFor="role">Role Initiative</Label>
					<Button type={'button'} variant={'ghost'} size="icon">
						<Image
							src={'/goldLogo.png'}
							alt="Role Icon"
							height={35}
							width={35}
						/>
					</Button>
				</div>
			</fieldset>

			<fieldset className="grid gap-6 rounded-lg border p-4">
				<legend className="-ml-1 px-1 text-sm font-medium">
					Creature Selection
				</legend>

				<div className="grid gap-3">
					<div className="grid gap-2">
						<Input
							id="search"
							type="text"
							placeholder={'Search for creatures...'}
						/>

						<ScrollArea className="h-52 w-full rounded-md border">
							<div className="p-4">
								<h4 className="mb-4 text-sm font-medium leading-none">
									Creatures
								</h4>
								{tags.map((tag) => (
									<>
										<div
											key={tag}
											className="text-sm flex justify-between items-center"
										>
											<Button
												variant={'ghost'}
												type="button"
												className="w-full justify-start"
											>
												{tag}
											</Button>
											<Button
												variant={'ghost'}
												size={'icon'}
												type="button"
												className=""
											>
												<ScanEye className="size-5" />
											</Button>
										</div>
										<Separator className="my-2" />
									</>
								))}
							</div>
						</ScrollArea>
					</div>
				</div>
			</fieldset>
		</div>
	);
};

export default BattleController;
