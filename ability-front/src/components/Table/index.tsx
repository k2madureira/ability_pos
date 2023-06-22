'use client';
import { MaterialReactTable } from 'material-react-table';
import { FaEdit, FaList,FaTrash} from 'react-icons/fa';
import * as S from "./styles";

interface IProps {
  data: any;
  columns: any;
  theadTh: string[];
}

export function Table({ data,columns,  theadTh }:IProps){

  console.log({ data, columns })
  return (
      <S.Table tabIndex={0}>
         <MaterialReactTable columns={columns} data={data} />
          {/* <table>
            <thead>
                <tr key={'id'}>
                {theadTh.map(str => 
                  <th key={str}>{str}</th>  
                )}
                  <th>Opções</th>
                </tr>
              
            </thead>
            <tbody>
            
                <tr key={'id'}>
                
                  <td key='options' className='icon-options'>
                    <FaEdit className='icon icon-edit'/>
                    <FaList className='icon icon-list'/>
                    <FaTrash className='icon icon-trash'/>
                  </td>
                </tr>
              
            </tbody>
      
          </table> */}
        
      </S.Table>
    
  );
}