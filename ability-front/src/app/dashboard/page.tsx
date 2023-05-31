'use client';
import Link from 'next/link';
import * as S from './styles';
import { NavBar } from '@/components/Navbar';

export default function Dashboard() {
	return (
	
		<S.Container>
			<NavBar />
			<main>
				<h1>Dashboard alterado</h1>
				<div>
					<Link href="/">home</Link>
				</div>
			</main>
			
		</S.Container>

		
	);
}
