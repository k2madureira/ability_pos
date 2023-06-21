'use client';
import {useReactTable, flexRender, getCoreRowModel} from '@tanstack/react-table';
import { FaEdit, FaList,FaTrash} from 'react-icons/fa';
import * as S from "./styles";
import {  useEffect, useState } from 'react';
import { columnsStudent, buildStudentsData } from '@/hooks/tableData/students';
import { columnsGroups, buildGroupsData } from '@/hooks/tableData/groups';
import { useFetchStudents } from '@/hooks/reactQuery/users/integrationApi';
import { useFetchGroup } from '@/hooks/reactQuery/groups/integrationApi';

interface IProps {
  type: string;
}

export function Table({ type }:IProps){
  const { data: dataStudents, isLoading: isLoadingStudents } = useFetchStudents();
  const { data: dataGroups, isLoading: isLoadingGroups} = useFetchGroup();

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 740px)").matches
  );


  let dataStudent = [
    {
      name: "-",
      group: "-",
      instrument: "-",
    },
  ]
  if (type === 'students' && !isLoadingStudents) {
    const { data } = buildStudentsData(dataStudents);
    dataStudent = data;
  }

  let dataGroup = [
    {
      name: "-",
      students: 0,
      started: "-",
    },
  ]
  if (type === 'groups' && !isLoadingGroups) {
    const { data } = buildGroupsData(dataGroups);
    dataGroup = data;
  }



  const data: any = type === 'students' ? dataStudent: dataGroup;
  const columns: any = type === 'students' ? columnsStudent: columnsGroups;

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
        Students: false,
        Started: false
      })
    }

  }, [matches, table]);
  
 

  return (
   
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
    
  );
}