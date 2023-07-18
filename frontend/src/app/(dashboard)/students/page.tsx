'use client';
import { useContext, useEffect, useState } from 'react';
import { FaRegPlusSquare } from 'react-icons/fa';

import { NavBar } from '@/components/NavBar';
import { GroupsTable } from '@/components/Table/groups';
import { StudentsTable } from '@/components/Table/students';
import { Observations } from '@/components/Observations';
import { Footer } from '@/components/Footer';

import { CreateStudentModal } from '@/components/Modals/CreateStudent';
import { CreateGroupModal } from '@/components/Modals/CreateGroup';


import { useFetchStudents, useFetchUser } from '@/hooks/reactQuery/users/integrationApi';
import { useFetchGroups } from '@/hooks/reactQuery/groups/integrationApi';
import { useMediaQuery } from '@/hooks/custom/useMediaQuery';

import { useStudentTableData } from '@/utils/builders/tables/student';
import { useGroupTableData } from '@/utils/builders/tables/group';

import { AuthContext } from '@/contexts/AuthContext';
import * as S from './styles';
import { Skeleton } from 'antd';

export default function Students() {
	const matchesMedia = useMediaQuery('(min-width: 740px)');
	const matchesSideMedia = useMediaQuery('(min-width: 1024px)');

	const [openStudentModal, setOpenStudentModal] = useState(false);
	const [openGroupModal, setOpenGroupModal] = useState(false);
	const { data: loggedUser, isLoading } = useFetchUser();
	const { data: dataStudents, isLoading: isLoadingStudents } = useFetchStudents();
	const {  data: dataGroups, isLoading: isLoadingGroups} = useFetchGroups(loggedUser);
	const { verifyAuthenticated } = useContext(AuthContext);
	const {studentData} = useStudentTableData(isLoadingStudents,dataStudents);
	const {groupData} = useGroupTableData(isLoadingStudents,dataGroups);
	
	

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
						<h1>Estudantes</h1>
						<FaRegPlusSquare className='icon-plus' onClick={()=> setOpenStudentModal(true)} />
					</div>
					
					{isLoadingStudents && <>
						<Skeleton avatar paragraph={{ rows: 4 }} />
					</>}
					{!isLoadingStudents && <>
						
						<StudentsTable key='students-table' data={studentData} matchesMedia={matchesMedia} />
					</>}
					

					<div className='table-group-header'>
						<h1>Grupos</h1>
						<FaRegPlusSquare className='icon-plus'onClick={()=> setOpenGroupModal(true)}/>
					</div>
					{isLoadingGroups && <>
						<Skeleton avatar paragraph={{ rows: 4 }} />
					</>}
					{!isLoadingGroups && <>
						<GroupsTable key='group-table' data={groupData} matchesMedia={matchesMedia}/>
					</>}

					<CreateStudentModal show={openStudentModal} close={() => setOpenStudentModal(false)} user={loggedUser} matchesMedia={matchesMedia}/>
					<CreateGroupModal show={openGroupModal} close={() => setOpenGroupModal(false)} user={loggedUser}/>

					
				</S.Content>
				{matchesSideMedia ? <Observations {...loggedUser} /> : <span />}
				
				<Footer />
		</>	}
			
		</>
	);
}
