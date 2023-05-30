import '../../styles/global.css';

export const metadata = {
	title: 'Ability Auth',
	description: 'Music studies',
};

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
