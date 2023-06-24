'use client';

import { NavBar } from '@/components/NavBar';
import { Table } from '@/components/Table';
import { Observations } from '@/components/Observations';
import { Footer } from '@/components/Footer';
import * as S from './styles';
import { useContext, useEffect, useMemo } from 'react';
import { useFetchStudents, useFetchUser } from '@/hooks/reactQuery/users/integrationApi';
import { useFetchGroups } from '@/hooks/reactQuery/groups/integrationApi';
import { AuthContext } from '@/contexts/AuthContext';
import { useMediaQuery } from '@/hooks/custom/useMediaQuery';
import { useStudentTableData } from '@/utils/builders/tables/student';
import { useGroupTableData } from '@/utils/builders/tables/group';


export default function Students() {
	const matchesMedia = useMediaQuery('(min-width: 740px)');
	const { data, isLoading } = useFetchUser();
	const { data: dataStudents, isLoading: isLoadingStudents } = useFetchStudents();
	const {  data: dataGroups, isLoading: isLoadingGroups} = useFetchGroups();
	const { verifyAuthenticated } = useContext(AuthContext);
	const {studentColumns,studentData} = useStudentTableData(isLoadingStudents,matchesMedia,dataStudents);
	const {groupColumns,groupData} = useGroupTableData(isLoadingStudents,matchesMedia,dataGroups);
	

	useEffect(() => {
		verifyAuthenticated();
	}, []);


	return (
		<>
		{isLoading && <p>Carregando</p>}
		{!isLoading && <>
				<NavBar txt={data?.firstName as string} />

				<S.Content className="grid-content-area">
					<h1>Students </h1>
					{isLoadingStudents && <p>Carregando estudantes</p>}
					{!isLoadingStudents && <>
						<Table key='students-table' type='student' data={studentData}  columns={studentColumns} matchesMedia={matchesMedia} />
					</>}
					

					<h1>Groups </h1>
					{isLoadingGroups && <p>Carregando grupos</p>}
					{!isLoadingGroups && <>
						<Table key='group-table'  type='group' data={groupData}  columns={groupColumns} matchesMedia={matchesMedia}/>
					</>}
					
					
				</S.Content>
				{matchesMedia ? <Observations {...data} /> : <span />}
				
				<Footer />
		</>	}
			
		</>
	);
}
