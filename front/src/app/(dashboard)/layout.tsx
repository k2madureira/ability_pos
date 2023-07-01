import '../../styles/global.css';
import * as DS from './dashboardStyle';
import { SideBar } from '@/components/SideBar';

export const metadata = {
	title: 'Ability',
	description: 'Music studies',
};

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	
	return (
		<DS.Container>
			<SideBar />
			<DS.Content>
				{children}	
			</DS.Content>
		</DS.Container>
	);
}
