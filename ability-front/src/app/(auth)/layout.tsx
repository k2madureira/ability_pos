import { ReactNode } from 'react';
import '../../styles/global.css';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
	title: 'Ability Auth',
	description: 'Music studies',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={raleway.className}>{children}</body>
		</html>
	);
}
