'use client';
import Link from 'next/link';
import * as S from './styles';

export default function Students() {
	return (
	
			<main>
				<h1>Students</h1>
				<div>
					<Link href="/dashboard">Dashboard</Link>
				</div>
			</main>
			
	);
}
