import Link from 'next/link';

export default function Home() {
	return (
		<>
			<h1>Home</h1>
			<div>
				<Link href="/dashboard">DASHBOARD</Link>
			</div>
		</>
	);
}
