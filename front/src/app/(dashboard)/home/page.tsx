'use client';
import { NavBar } from '@/components/NavBar';
import { ChartBar } from '@/components/ChartBar';
import { Theory } from '@/components/Theory';
import { Observations } from '@/components/Observations';
import { Footer } from '@/components/Footer';
import * as S from './styles';
import {  useContext, useEffect } from 'react';

import { useFetchUser } from '@/hooks/reactQuery/users/integrationApi';
import { AuthContext } from '@/contexts/AuthContext';
import { useFetchStatus } from '@/hooks/reactQuery/home/integrationApi';
import { useMediaQuery } from '@/hooks/custom/useMediaQuery';


export default function Dashboard() {
	const matchesMedia = useMediaQuery('(min-width: 1024px)');
	const { data, isLoading } = useFetchUser();
	const { data: dataStatus, isLoading: isLoadingStatus } = useFetchStatus();
	const { verifyAuthenticated } = useContext(AuthContext);

	useEffect(() => {
		verifyAuthenticated();
	}, []);


	return (
		<>
		{isLoading && <p>Carregando</p>}
		{!isLoading && <>
				<NavBar isHome txt={data?.firstName as string} />

				<S.Content className="grid-content-area">
					<h1>General Information</h1>
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

						<div className='is-loading'>
							<div className='chart-loading'></div>
						</div>
					
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
						<ChartBar data={dataStatus?.set as number[]} />
					</>}
					
					</div>
					
				</S.Content>
				{matchesMedia ? <Theory instrumentDash={false}/> : <span />}


				
				<Observations {...data} />

				<Footer />
		</>	}
			
		</>
	);
}
