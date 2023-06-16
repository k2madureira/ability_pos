'use client';
import Link from 'next/link';
import { NavBar } from '@/components/NavBar';
import { ChartBar } from '@/components/ChartBar';
import { Theory } from '@/components/Theory';
import { Observations } from '@/components/Observations';
import { Footer } from '@/components/Footer';
import * as S from './styles';
import { useContext, useEffect, useState } from 'react';

import { useFetchUser } from '@/hooks/reactQuery/users/integrationApi';
import { parseCookies } from 'nookies';
import { redirect } from 'next/navigation';
import { AuthContext } from '@/contexts/AuthContext';
import { useFetchStatus } from '@/hooks/reactQuery/home/integrationApi';



export default function Students() {
	const { data, isLoading } = useFetchUser();
	const { data: dataStatus, isLoading: isLoadingStatus } = useFetchStatus();
	const { signOut } = useContext(AuthContext);


	const [matches, setMatches] = useState(
		window.matchMedia('(min-width: 740px)').matches
	);


	useEffect(() => {
		const { 'ability-token': token } = parseCookies();

		
		if (!token) {
			redirect('/signin')
		}
		window
			.matchMedia('(min-width: 740px)')
			.addEventListener('change', (e) => setMatches(e.matches));
	}, []);


	async function handleSignOut() {
		await signOut();
	}

	return (
		<>
		{isLoading && <p>Carregando</p>}
		{!isLoading && <>
				<NavBar txt={data?.firstName as string} />

				<S.Content className="grid-content-area">
					<h1>Students <Link href="/signin" onClick={() => handleSignOut()}>Logout</Link></h1>
					<div className="total-numbers">
					{isLoadingStatus && <>
						<ul className='is-loading'>
							{
							['groups','students','instruments','naipes'].map((value) => 
							
								<li key={`li-${value}`} >
									<div className="Icon"></div>
									<p key={`p-${value}`}></p>
									<span key={`span-${value}`}>.</span>
								</li>
							)
							}
						</ul>
					
					</>}
					{!isLoadingStatus && <>
						<ul>
							{
							Object.entries(dataStatus as any).filter(([key,]) => key !== 'set').map(([key,value]) => 
							
								<li key={`li-${key}${value}`}>
									<S.Icon
										key={`icon-${key}`}
										className="Icon"
										src={`/images/icons/general/green-ellipse.svg`}
										width={9}
										height={9}
										alt={`green cicle`}
									/>
									<p key={`p-${key}${value}`}>{key}:</p>
									<span key={`span-${key}${value}`}>{value as number}</span>
								</li>
							)
							}
						</ul>
					</>}
					
					</div>

					{isLoadingStatus && <>
					<div className='is-loading'>
						<div className='chart-loading'></div>
					</div>
						
					</>}
					{!isLoadingStatus && <>
						<ChartBar data={dataStatus?.set as number[]} />
					</>}
					
				</S.Content>
				{matches ? <Theory/> : <span />}


				
				<Observations {...data} />

				<Footer />
		</>	}
			
		</>
	);
}
