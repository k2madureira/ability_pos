'use client';
import {useReactTable, flexRender, getCoreRowModel} from '@tanstack/react-table';
import { FaEdit, FaList,FaTrash} from 'react-icons/fa';
import * as S from "./styles";
import { useEffect, useState } from 'react';
import { studentData, columnsStudent } from '@/hooks/tableData/students';
import { groupData, columnsGroup } from '@/hooks/tableData/groups';

interface IProps {
  type: string;
}

export function Table({ type }:IProps){
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 740px)").matches
  );

  const data: any = type === 'students' ? studentData: groupData;
  const columns: any = type === 'students' ? columnsStudent: columnsGroup;

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    window
    .matchMedia("(min-width: 740px)")
    .addEventListener('change', e => setMatches( e.matches ));

    if (!matches) {

      table.setColumnVisibility({
        Group: false,
        Instrument: false,
        Students: false
      })
    }

  }, [matches, table]);
  
 

  return (
    <div className='grid-content-area'>

      <S.Table tabIndex={0}>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
              <th>Options</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell, index) => (
                <td key={cell.id} className={index !== 0? 'hidden-info':''}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              <td key='options' className='icon-options'>
                <FaEdit className='icon icon-edit'/>
                <FaList className='icon icon-list'/>
                <FaTrash className='icon icon-trash'/>
              </td>
            </tr>
          ))}
        </tbody>
  
      </table>
      </S.Table>
    </div>
  );
}