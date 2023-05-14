import { ReactNode } from 'react';
import '../styles/global.css';
import { Raleway } from 'next/font/google';
import StyledComponentsRegistry from '../lib/registry';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
	title: 'Ability',
	description: 'Music studies',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={raleway.className}>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
