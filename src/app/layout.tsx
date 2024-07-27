import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../lib/queryClient';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		template: 'InitFindr | %s',
		default: 'InitFindr',
	},
	description: 'Making initiative tracking easy',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/favicon/safari-pinned-tab.svg"
					color="#b91d47"
				/>
				<meta name="theme-color" content="#b91d47" />
			</head>
			<QueryClientProvider client={queryClient}>
				<body className={inter.className}>
					{children}
					<Toaster />
				</body>
			</QueryClientProvider>
		</html>
	);
}
