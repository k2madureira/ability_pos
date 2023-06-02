import '../../styles/global.css';
import * as DS from './dashboardStyle';
import { NavBar } from '@/components/Navbar';

export const metadata = {
	title: 'Ability Dashboard',
	description: 'Music studies',
};

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<DS.Container>
			<NavBar />
			<DS.Content>
				{children}	
			</DS.Content>
		</DS.Container>
	);
}
