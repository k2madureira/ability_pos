'use client';
import Link from 'next/link';
import { NavBar } from '@/components/NavBar';
import * as S from './styles';

export default function Dashboard() {
	return (
		<>
		<NavBar isHome txt={'User L'}/>
		<div className='grid-content-area'>
			
			<h1>General Information</h1>
			<div>
				<Link href="/signin">signin</Link>
			</div>
		
		</div>
		
		</>
			
	);
}
