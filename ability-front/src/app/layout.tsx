'use client';
import { ReactNode } from 'react';
import '../styles/global.css';
import { Raleway } from 'next/font/google';
import StyledComponentsRegistry from '../lib/registry';
import { AuthProvider } from '../contexts/AuthContext';
import { QueryClientProvider, QueryClient } from "react-query";

const raleway = Raleway({ subsets: ['latin'] });
const queryClient = new QueryClient({
	defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={raleway.className}>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
				</AuthProvider>
			</QueryClientProvider>
				
			</body>
		</html>
	);
}
