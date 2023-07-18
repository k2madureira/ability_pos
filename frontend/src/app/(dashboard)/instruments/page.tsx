'use client';
import { useContext, useEffect, useState } from 'react';
import { FaRegPlusSquare } from 'react-icons/fa';

import { NavBar } from '@/components/NavBar';
import { FamiliesTable } from '@/components/Table/families';
import { InstrumentsTable } from '@/components/Table/instruments';
import { Observations } from '@/components/Observations';
import { Footer } from '@/components/Footer';

import { CreateInstrumentModal } from '@/components/Modals/CreateInstrument';
import { CreateFamilyModal } from '@/components/Modals/CreateFamily';

import { useFetchUser } from '@/hooks/reactQuery/users/integrationApi';
import { useFetchInstrument } from '@/hooks/reactQuery/instruments/integrationApi';
import { useFetchFamilies } from '@/hooks/reactQuery/families/integrationApi';
import { useMediaQuery } from '@/hooks/custom/useMediaQuery';

import { useInstrumentTableData } from '@/utils/builders/tables/instrument';
import { useFamilyTableData } from '@/utils/builders/tables/families';

import { AuthContext } from '@/contexts/AuthContext';
import * as S from './styles';
import { Skeleton } from 'antd';
import { Theory } from '@/components/Theory';

export default function Instrument() {
	const matchesMedia = useMediaQuery('(min-width: 740px)');
	const matchesSideMedia = useMediaQuery('(min-width: 1024px)');
	const [openInstrumentModal, setOpenInstrumentModal] = useState(false);
	const [openFamilyModal, setOpenFamilyModal] = useState(false);
	const { data: loggedUser, isLoading } = useFetchUser();
	const { data: dataInstrument, isLoading: isLoadingInstrument } = useFetchInstrument();
	const {  data: dataFamilies, isLoading: isLoadingFamilies} = useFetchFamilies();
	const { verifyAuthenticated } = useContext(AuthContext);
	const {instrumentData} = useInstrumentTableData(isLoadingInstrument,dataInstrument);
	const {familyData} = useFamilyTableData(isLoadingInstrument,dataFamilies);
	
	

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
						<h1>Instrumentos</h1>
						<FaRegPlusSquare className='icon-plus' onClick={()=> setOpenInstrumentModal(true)} />
					</div>
					
					{isLoadingInstrument && <>
						<Skeleton avatar paragraph={{ rows: 4 }} />
					</>}
					{!isLoadingInstrument && <>
						
						<InstrumentsTable key='instruments-table' data={instrumentData} matchesMedia={matchesMedia} />
					</>}
					

					<div className='table-group-header'>
						<h1>Naipes</h1>
						<FaRegPlusSquare className='icon-plus'onClick={()=> setOpenFamilyModal(true)}/>
					</div>
					{isLoadingFamilies && <>
						<Skeleton avatar paragraph={{ rows: 4 }} />
					</>}
					{!isLoadingFamilies && <>
						<FamiliesTable key='group-table' data={familyData} matchesMedia={matchesMedia}/>
					</>}

					<CreateInstrumentModal show={openInstrumentModal} close={() => setOpenInstrumentModal(false)} matchesMedia={matchesMedia}/>
					<CreateFamilyModal show={openFamilyModal} close={() => setOpenFamilyModal(false)} />

					
				</S.Content>
				{matchesSideMedia ? <Theory instrumentDash={true} user={loggedUser}/> : <span />}
				
				<Footer />
		</>	}
			
		</>
	);
}
