'use client';
import { MRT_ColumnDef, MaterialReactTable } from 'material-react-table';
import * as S from "./styles";
import { useMemo } from 'react';
import { Box } from '@mui/material';
import { FaEdit, FaList, FaTrash } from 'react-icons/fa';

interface IProps {
  data: any;
  matchesMedia: boolean;
}

interface IGroup {
	nome: string;
	estudantes: number;
	iniciado: string;
	options: string;
}

export function GroupsTable({ data,matchesMedia }:IProps){

  const columnVisibility = {};
  if (!matchesMedia) {
    Object.assign(columnVisibility, {
      estudantes: false,
      iniciado: false
    })
  }

  const columns = useMemo<MRT_ColumnDef<IGroup>[]>(() => [
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

  return (
      <S.Table tabIndex={0}>
         <MaterialReactTable columns={columns} data={data}
          initialState={{ columnVisibility }}
          muiTableHeadCellProps={{
            align: 'center',
            sx: _ => ({
              background: 'var(--fuchsia-930)',
              color: 'var(--white)',
              fontSize: '0.7rem',
              fontWeight: '600'
            })
          }} 
          muiTableBodyCellProps={{
            align: 'center'
          }}
          muiTableContainerProps={({
            table
          }) => ({
            sx: {
              height: `calc(100% - ${table.refs.topToolbarRef.current?.offsetHeight}px - ${table.refs.bottomToolbarRef.current?.offsetHeight}px)`
            }
          })}
          muiTablePaperProps={{
            sx: {
              height: '90%',
              maxWidth: matchesMedia ? '100%': '75vw',
               m: 'auto'
            }
          }}
          
          enableStickyHeader
          // enableColumnResizing
        />  
      </S.Table>
    
  );
}