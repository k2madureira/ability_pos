'use client';
import { useContext, useEffect, useState } from 'react';
import { FaRegPlusSquare } from 'react-icons/fa';

import { NavBar } from '@/components/NavBar';
import { MethodsTable } from '@/components/Table/methods';
import { Observations } from '@/components/Observations';
import { Footer } from '@/components/Footer';

import { CreateMethodModal } from '@/components/Modals/CreateMethod';

import {  useFetchUser } from '@/hooks/reactQuery/users/integrationApi';
import { useFetchMethod } from '@/hooks/reactQuery/methods/integrationApi';
import { useMediaQuery } from '@/hooks/custom/useMediaQuery';

import { useMethodTableData } from '@/utils/builders/tables/methods';

import { AuthContext } from '@/contexts/AuthContext';
import * as S from './styles';
import { Skeleton } from 'antd';


export default function Students() {
	const matchesMedia = useMediaQuery('(min-width: 740px)');
	const [openStudentModal, setOpenStudentModal] = useState(false);
	const { data: loggedUser, isLoading } = useFetchUser();
	const { data: dataMethods, isLoading: isLoadingMethods } = useFetchMethod();
	const { verifyAuthenticated } = useContext(AuthContext);
	const {methodData} = useMethodTableData(isLoadingMethods,dataMethods);
	
	
	

	useEffect(() => {
		verifyAuthenticated();
	}, [verifyAuthenticated]);


	return (
		<>
		{isLoading && <>
			<S.Content className="grid-content-area">
				<div className='table-student-header'>
				<Skeleton avatar paragraph={{ rows: 4 }} />
				</div>
				<Skeleton />

				<div className='table-student-header'>
				<Skeleton avatar paragraph={{ rows: 4 }} />
				</div>
			
			</S.Content>
		</>}
		{!isLoading && <>
				<NavBar txt={loggedUser?.firstName as string} />

				<S.Content className="grid-content-area">
					<div className='table-student-header'>
						<h1>Métodos</h1>
						<FaRegPlusSquare className='icon-plus' onClick={()=> setOpenStudentModal(true)} />
					</div>
					
					{isLoadingMethods && <>
						<Skeleton avatar paragraph={{ rows: 4 }} />
					</>}
					{!isLoadingMethods && <>
						
						<MethodsTable key='students-table' data={methodData} matchesMedia={matchesMedia} />
					</>}
					

					<CreateMethodModal show={openStudentModal} close={() => setOpenStudentModal(false)} matchesMedia={matchesMedia}/>
				

					
				</S.Content>
				{matchesMedia ? <Observations {...loggedUser} /> : <span />}
				
				<Footer />
		</>	}
			
		</>
	);
}
