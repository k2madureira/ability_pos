import { useMemo } from 'react'
import { FaEdit, FaList,FaTrash} from 'react-icons/fa';
import { type MRT_ColumnDef } from 'material-react-table';
import { Box } from '@mui/material';

import { User } from '@/hooks/dto/Iuser.dto';


interface IStudent {
	nome: string;
	grupo: string;
	instrumento: string;
	options: string;
}

export function useStudentTableData(isLoading: boolean, matchesMedia: boolean, data: User[]| undefined): { studentData:any; studentColumns:any} {
  
  let studentData: IStudent[] = [];
  if (!isLoading && data) {
		
		studentData = data.map(student => (
			{
				nome: student.firstName,
				grupo: student.userGroup[0].group.name,
				instrumento: student.instrument.name,
				options: student.id
			}
			));
	}

  const studentColumns = useMemo<MRT_ColumnDef<IStudent>[]>(() => [
		{
			accessorKey: 'nome',
			header: 'Nome',
			size: 20,
		},
		{
			accessorKey: 'grupo',
			header: 'Grupo',
			size: 20,
		},{
			accessorKey: 'instrumento',
			header: 'Instrumento',
			size: 20,		},
		{
			accessorKey: 'options',
			header: 'Opções',
			size: 20,
			Cell: ({ renderedCellValue, row }) => (
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '1rem',
					}}
				>
					
					<FaEdit className='icon icon-edit'/>
					<FaList className='icon icon-list'/>
          <FaTrash className='icon icon-trash'/>
					{/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
					{/* <span>{renderedCellValue}</span> */}
				</Box>
			),
		},
	],[]);


  return { studentData, studentColumns}
}