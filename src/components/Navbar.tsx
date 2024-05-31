import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';
import { buttonVariants } from './ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Navbar = async () => {
	return (
		<nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-stone-700 bg-stone-600/75 backdrop-blur-lg transition-all">
			<MaxWidthWrapper>
				<div className="flex h-14 items-center justify-between border-b border-stone-700">
					<Link href="/" className="flex z-40 font-semibold text-[#c8b874]">
						<Image
							src={'/goldLogo.png'}
							width={25}
							height={25}
							alt="logo"
							className="mr-1"
						/>
						Init<span className="text-primary">Findr</span>
					</Link>

					<div className="h-full flex items-center space-x-4">
						<Link
							href="/signup"
							className={buttonVariants({
								size: 'sm',
								variant: 'ghost',
								className: 'text-[#c8b874]',
							})}
						>
							Sign up
						</Link>

						<div className="h-8 w-px bg-stone-800 hidden sm:block" />

						<Link
							href="/signin"
							className={buttonVariants({
								size: 'sm',
								className: 'flex items-center gap-1',
							})}
						>
							Sign in
							<ArrowRight className="ml-1.5 h-5 w-5" />
						</Link>
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	);
};

export default Navbar;
