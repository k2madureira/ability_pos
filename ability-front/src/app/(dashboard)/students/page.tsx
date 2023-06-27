'use client';
import { useContext, useEffect, useState } from 'react';
import { FaRegPlusSquare } from 'react-icons/fa';

import { NavBar } from '@/components/NavBar';
import { GroupsTable } from '@/components/Table/groups';
import { StudentsTable } from '@/components/Table/students';
import { Observations } from '@/components/Observations';
import { Footer } from '@/components/Footer';
// import { CreateStudentModal } from '@/components/Modals/CreateStudent';


import { useFetchStudents, useFetchUser } from '@/hooks/reactQuery/users/integrationApi';
import { useFetchGroups } from '@/hooks/reactQuery/groups/integrationApi';
import { useMediaQuery } from '@/hooks/custom/useMediaQuery';

import { useStudentTableData } from '@/utils/builders/tables/student';
import { useGroupTableData } from '@/utils/builders/tables/group';

import { AuthContext } from '@/contexts/AuthContext';
import * as S from './styles';
import { Skeleton } from '@mui/material';

export default function Students() {
	const matchesMedia = useMediaQuery('(min-width: 740px)');
	const [openStudentModal, setOpenStudentModal] = useState(false)
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
			<Skeleton variant="rectangular" width={40} height={70} />
			<S.Content className="grid-content-area">
				<div className='table-student-header'>
					<Skeleton variant="text" width={40} height={20} />
					<Skeleton variant="circular" width={20} height={10} />
				</div>
				<Skeleton variant="rectangular" height={100} />

				<div className='table-student-header'>
					<Skeleton variant="text" width={40} height={20} />
					<Skeleton variant="circular" width={20} height={10} />
				</div>
				<Skeleton variant="rectangular" height={100} />
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
						<Skeleton variant="rectangular" height={100} />
					</>}
					{!isLoadingStudents && <>
						<StudentsTable key='students-table' data={studentData}   matchesMedia={matchesMedia} />
					</>}
					

					<div className='table-group-header'>
						<h1>Grupos</h1>
						<FaRegPlusSquare className='icon-plus'/>
					</div>
					{isLoadingGroups && <>
						<Skeleton variant="rectangular" height={100} />
					</>}
					{!isLoadingGroups && <>
						<GroupsTable key='group-table' data={groupData} matchesMedia={matchesMedia}/>
					</>}

					{/* <CreateStudentModal show={openStudentModal} close={() => setOpenStudentModal(false)} user={loggedUser}/> */}

					
				</S.Content>
				{matchesMedia ? <Observations {...loggedUser} /> : <span />}
				
				<Footer />
		</>	}
			
		</>
	);
}
