import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { buttonVariants } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="bg-slate-50 grainy-light h-[100vh]">
			<section>
				<MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:pt-24 xl:pt-32 lg:pb-52">
					<div className="px-6 lg:px-0 lg:pt-4">
						<div className="relative mx-auto text-center flex flex-col items-center">
							<div className="hidden sm:block">
								<img
									src="/goldLogo.png"
									className=" sm:w-20 lg:w-24"
									alt="Logo"
								/>
							</div>

							<h1 className="relative w-fit tracking-tight text-balance mt-8 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
								<span className="bg-[#c8b874] px-2 text-white">Init</span>iative{' '}
								<span className="bg-primary px-2 text-white">Finder</span>
							</h1>

							<p className="mt-8 mx-auto md:px-6 text-lg max-w-prose text-center sm:text-left text-balance sm:text-wrap">
								Dive into the immersive world of Golarion with confidence and
								precision using <span className="font-semibold">InitFindr</span>
								. Whether you&apos;re navigating a treacherous dungeon, facing
								off against fearsome foes, or weaving intricate tales of heroism
								with your friends, InitFindr is your key to{' '}
								<span className="font-semibold">
									mastering the art of monster and character management
								</span>{' '}
								in the thrilling and ever changing realm of Pathfinder 2nd
								Edition.
							</p>

							<ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
								<div className="space-y-2">
									<li className="flex gap-1.5 items-center text-left">
										<Check className="h-5 w-5 shrink-0 text-primary" />
										Easy Creature Creation
									</li>
									<li className="flex gap-1.5 items-center text-left">
										<Check className="h-5 w-5 shrink-0 text-primary" />
										Ability to make and adjust battles beforehand or on the spot
									</li>
									<li className="flex gap-1.5 items-center text-left">
										<Check className="h-5 w-5 shrink-0 text-primary" />
										Rolls for initiative to determine the order of turns during
										combat
									</li>
									<li className="flex gap-1.5 items-center text-left">
										<Check className="h-5 w-5 shrink-0 text-primary" />
										Automatic adjustment of stat based Status and Buffs
									</li>
								</div>
							</ul>

							<Link
								href="/api/signin"
								className={buttonVariants({
									size: 'lg',
									className: 'mt-8 ',
								})}
							>
								Get Started
							</Link>
						</div>
					</div>
				</MaxWidthWrapper>
			</section>
		</main>
	);
}
