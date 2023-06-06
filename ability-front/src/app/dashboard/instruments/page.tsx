'use client';
import Link from 'next/link';
import * as S from './styles';
import { NavBar } from '@/components/NavBar';

export default function Instruments() {
	return (
		<>
			<NavBar txt={'User'}/>
			<div className='grid-content-area'>
				<h1>Instruments</h1>
			</div>
		</>		
	);
}
