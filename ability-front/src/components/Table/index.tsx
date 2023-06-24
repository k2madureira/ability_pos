'use client';
import { MaterialReactTable } from 'material-react-table';
import * as S from "./styles";

interface IProps {
  data: any;
  columns: any;
  matchesMedia: boolean;
  type: 'student' | 'group';
}

export function Table({ data,columns,matchesMedia,type }:IProps){
  const columnVisibility = {};
  if (!matchesMedia) {
    switch (type) {
      case 'student':
        Object.assign(columnVisibility, {
          grupo: false,
          instrumento: false
        })
        break;

      case 'group':
        Object.assign(columnVisibility, {
          estudantes: false,
          iniciado: false
        })
        break;
    }
  }

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