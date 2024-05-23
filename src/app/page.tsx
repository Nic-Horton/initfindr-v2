/* eslint-disable @next/next/no-img-element */
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { buttonVariants } from '@/components/ui/button';
import { ArrowDown, Check } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="h-full antialiased">
			<div className="absolute inset-0 bg-[url('/wallhaven.jpg')] bg-cover bg-center filter blur-[2px] h-[97vh]" />
			<section className="relative z-10 h-[97vh]">
				<MaxWidthWrapper className="flex flex-col justify-center">
					<div className="px-6 lg:px-0 ">
						<div className="mx-auto text-center flex flex-col items-center">
							<div>
								<img src="/goldLogo.png" className="w-20 lg:w-24" alt="Logo" />
							</div>

							<h1 className="w-fit tracking-tight text-balance mt-8 font-bold !leading-tight text-white text-6xl lg:text-7xl">
								<span className="bg-[#c8b874] px-2 text-gray-900">Init</span>
								iative{' '}
								<span className="bg-primary px-2 text-gray-900">Finder</span>
							</h1>
						</div>
					</div>
					<div className=" absolute text-stone-100 bottom-12 left-1/2 ">
						<ArrowDown className="w-8 h-8" />
					</div>
				</MaxWidthWrapper>
			</section>

			<section className="bg-gradient-to-br from-red-800 via-red-700 to-[#c8b874] text-stone-300">
				<MaxWidthWrapper className="pt-10 sm:pt-24 pb-10 sm:pb-24">
					<div className="mx-auto text-center flex flex-col items-center">
						<p className=" mx-auto px-6 text-lg max-w-prose text-left text-wrap">
							Dive into the immersive world of Golarion with confidence and
							precision using{' '}
							<span className="font-semibold text-[#c8b874]">InitFindr</span>.
							Whether you&apos;re navigating a treacherous dungeon, facing off
							against fearsome foes, or weaving intricate tales of heroism with
							your friends, InitFindr is your key to{' '}
							<span className="font-semibold text-[#c8b874]">
								mastering the art of monster and character management
							</span>{' '}
							in the thrilling and ever changing realm of Pathfinder 2nd
							Edition.
						</p>

						<ul className="mt-8 px-6 text-left font-medium flex flex-col items-center sm:items-start">
							<div className="space-y-2">
								<li className="flex gap-1.5 items-center text-left">
									<Check className="h-5 w-5 shrink-0 text-[#c8b874]" />
									Easy Creature Creation
								</li>
								<li className="flex gap-1.5 items-center text-left">
									<Check className="h-5 w-5 shrink-0 text-[#c8b874]" />
									Ability to make and adjust battles beforehand or on the spot
								</li>
								<li className="flex gap-1.5 items-center text-left">
									<Check className="h-5 w-5 shrink-0 text-[#c8b874]" />
									Rolls for initiative to determine the order of turns during
									combat
								</li>
								<li className="flex gap-1.5 items-center text-left">
									<Check className="h-5 w-5 shrink-0 text-[#c8b874]" />
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
				</MaxWidthWrapper>
			</section>
		</main>
	);
}
