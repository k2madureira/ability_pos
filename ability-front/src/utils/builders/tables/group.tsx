import { useMemo } from 'react'
import { FaEdit, FaList,FaTrash} from 'react-icons/fa';
import { type MRT_ColumnDef } from 'material-react-table';
import { Box } from '@mui/material';

import { Group } from '@/hooks/dto/Igroup.dto';


interface IGroup {
	nome: string;
	estudantes: number;
	iniciado: string;
	options: string;
}

export function useGroupTableData(isLoading: boolean, matchesMedia: boolean, data: Group[]| undefined): { groupData:any; groupColumns:any} {
  
  let groupData: IGroup[] = [];
  if (!isLoading && data) {
		
		groupData = data.map(group => (
			{
				nome: group.name,
				estudantes: group.totalStudents,
				iniciado: group.createdAt,
				options: group.id
			}
			));
	}

  const groupColumns = useMemo<MRT_ColumnDef<IGroup>[]>(() => [
		{
			accessorKey: 'nome',
			header: 'Nome',
			size: 50,
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
		{
			accessorKey: 'options',
			header: 'Opções',
			size: 50,
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

 

  return { groupData, groupColumns}
}