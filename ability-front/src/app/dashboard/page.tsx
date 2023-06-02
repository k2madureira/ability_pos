'use client';
import Link from 'next/link';
import * as S from './styles';

export default function Dashboard() {
	return (
		<>
		<div className='grid-nav-area'>
			<S.Nav>
				<h1>Welcome, <span>User</span></h1>
				<div>Menu</div>
			</S.Nav>
		</div>
		<div className='grid-content-area'>
			
			<h1>Home</h1>
			<div>
				<Link href="/signin">signin</Link>
			</div>
		
		</div>
		
		</>
			
	);
}
