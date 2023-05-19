import { ReactNode } from 'react';
import '../styles/global.css';
import { Raleway } from 'next/font/google';
import StyledComponentsRegistry from '../lib/registry';
import { AuthProvider } from '../contexts/AuthContext';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
	title: 'Ability',
	description: 'Music studies',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={raleway.className}>
				<AuthProvider>
					<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
				</AuthProvider>
			</body>
		</html>
	);
}
