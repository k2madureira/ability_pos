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


export default function Students() {
	const matchesMedia = useMediaQuery('(min-width: 1024px)');
	const { data, isLoading } = useFetchUser();
	const { data: dataStudents, isLoading: isLoadingStudents } = useFetchStudents();
	const {  data: dataGroups, isLoading: isLoadingGroups} = useFetchGroups();
	const { verifyAuthenticated } = useContext(AuthContext);

	useEffect(() => {
		verifyAuthenticated();
	}, []);

	const studentColumns = useMemo(() => [
		{
			accessorKey: 'nome',
			header: 'Nome',
			size: 150,
		},
		{
			accessorKey: 'grupo',
			header: 'Grupo',
			size: 150,
		},
		{
			accessorKey: 'instrumento',
			header: 'Instrumento',
			size: 150,
		},
	],[]);
	let studentData = [
		{
			nome: '',
			grupo: '',
			instrumento: ''
		}
	];
	if (!isLoadingStudents && dataStudents) {
		studentData = dataStudents.map(student => (
			{
				nome: student.firstName,
				grupo: student.userGroup[0].group.name,
				instrumento: student.instrument.name
			}
			));
	}


	const groupColumns = useMemo(() => [
		{
			accessorKey: 'nome',
			header: 'Nome',
			size: 150,
		},
		{
			accessorKey: 'estudantes',
			header: 'Estudantes',
			size: 150,
		},
		{
			accessorKey: 'iniciado',
			header: 'Iniciado',
			size: 150,
		},
	],[]);
	
	let groupData = [
		{
			nome: '',
			estudantes: 0,
			iniciado: ''
		}
	];
	if (!isLoadingGroups && dataGroups) {
		groupData = dataGroups.map(student => (
			{
				nome: student.name,
				estudantes: student.totalStudents,
				iniciado: student.createdAt
			}
			));
	}

	return (
		<>
		{isLoading && <p>Carregando</p>}
		{!isLoading && <>
				<NavBar txt={data?.firstName as string} />

				<S.Content className="grid-content-area">
					<h1>Students </h1>
					{isLoadingStudents && <p>Carregando estudantes</p>}
					{!isLoadingStudents && <>
						<Table key='students-table' data={studentData} theadTh={['Nome','Grupo','Instrumento']} columns={studentColumns}/>
					</>}
					

					<h1>Groups </h1>
					{isLoadingGroups && <p>Carregando grupos</p>}
					{!isLoadingGroups && <>
						<Table key='group-table' data={groupData} theadTh={['Nome','Estudantes','Instrumento']} columns={groupColumns}/>
					</>}
					
					
				</S.Content>
				{matchesMedia ? <Observations {...data} /> : <span />}


				
				

				<Footer />
		</>	}
			
		</>
	);
}
