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

interface IStudent {
	nome: string;
	grupo: string;
	instrumento: string;
	options: string;
}

export function StudentsTable({ data,matchesMedia }:IProps){

  const columnVisibility = {};
  if (!matchesMedia) {
    Object.assign(columnVisibility, {
      grupo: false,
      instrumento: false
    })
  }
console.log({ matchesMedia })
  const columns = useMemo<MRT_ColumnDef<IStudent>[]>(() => [
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