import '../../../styles/global.css';
import * as LS from './layoutStyle';
import { SideBar } from '@/components/SideBar';

export const metadata = {
	title: 'Ability',
	description: 'Music studies',
};

export default function StudentsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	
	return (
		<LS.Container>
			<SideBar />
			<LS.Content>
				{children}	
			</LS.Content>
		</LS.Container>
	);
}
