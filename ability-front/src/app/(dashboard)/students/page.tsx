'use client';

import { NavBar } from '@/components/NavBar';
import { Table } from '@/components/Table';
import { Observations } from '@/components/Observations';
import { Footer } from '@/components/Footer';
import * as S from './styles';
import { useContext, useEffect, useState } from 'react';
import { useFetchUser } from '@/hooks/reactQuery/users/integrationApi';
import { useFetchStatus } from '@/hooks/reactQuery/home/integrationApi';
import { AuthContext } from '@/contexts/AuthContext';


export default function Students() {
	const { data, isLoading } = useFetchUser();
	const { data: dataStatus, isLoading: isLoadingStatus } = useFetchStatus();
	const { signOut,verifyAuthenticated } = useContext(AuthContext);


	const [matches, setMatches] = useState(
		window.matchMedia('(min-width: 1024px)').matches
	);


	useEffect(() => {
		verifyAuthenticated();
		window
			.matchMedia('(min-width: 1024px)')
			.addEventListener('change', (e) => setMatches(e.matches));
	}, []);



	return (
		<>
		{isLoading && <p>Carregando</p>}
		{!isLoading && <>
				<NavBar txt={data?.firstName as string} />

				<S.Content className="grid-content-area">
					<h1>Students </h1>
					<Table key='students-table' type='students'/>

					<h1>Groups </h1>
					<Table key='group-table' type='groups'/>
					
				</S.Content>
				{matches ? <Observations {...data} /> : <span />}


				
				

				<Footer />
		</>	}
			
		</>
	);
}
