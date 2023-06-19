'use client';
import {useReactTable, createColumnHelper, flexRender, getCoreRowModel} from '@tanstack/react-table';
import { FaUserEdit, FaPowerOff, FaRegStar } from 'react-icons/fa';
import * as S from "./styles";
import { useReducer, useState } from 'react';

interface IProps {
  name: string;
}


type Student = {
  name: string;
  group: string;
  instrument: string;
};

const studentData: Student[] = [
  {
    name: 'Lenilson 1111111111111111111',
    group: 'Adulto',
    instrument: 'Violino'
  },
  {
    name: 'Samuel',
    group: 'Infantil',
    instrument: 'Violino'
  },
  {
    name: 'Lenilson 1111111111111111111',
    group: 'Adulto',
    instrument: 'Violino'
  },
  {
    name: 'Samuel',
    group: 'Infantil',
    instrument: 'Violino'
  },
  {
    name: 'Lenilson 1111111111111111111',
    group: 'Adulto',
    instrument: 'Violino'
  },
  {
    name: 'Samuel',
    group: 'Infantil',
    instrument: 'Violino'
  },
  {
    name: 'Lenilson 1111111111111111111',
    group: 'Adulto',
    instrument: 'Violino'
  },
  {
    name: 'Samuel',
    group: 'Infantil',
    instrument: 'Violino'
  },
  {
    name: 'Lenilson 1111111111111111111',
    group: 'Adulto',
    instrument: 'Violino'
  },
  {
    name: 'Samuel',
    group: 'Infantil',
    instrument: 'Violino'
  },
  {
    name: 'Lenilson 1111111111111111111',
    group: 'Adulto',
    instrument: 'Violino'
  },
  {
    name: 'Samuel',
    group: 'Infantil',
    instrument: 'Violino'
  }
];

const headers = ['Name','Group','Instrument'];
const columnStudentHelper = createColumnHelper<Student>();

const columnsStudent = [
  columnStudentHelper.accessor(row => row.name, {
    id: 'Name',
    cell: info => <i>{info.getValue()}</i>,
    header: () => 'Name',
    footer: info => info.column.id,
  }),
  columnStudentHelper.accessor(row => row.group, {
    id: 'Group',
    cell: info => <i>{info.getValue()}</i>,
    header: () => 'Group',
    footer: info => info.column.id,
  }),
  columnStudentHelper.accessor(row => row.instrument, {
    id: 'Instrument',
    cell: info => <i>{info.getValue()}</i>,
    header: () => 'Instrument',
    footer: info => info.column.id,
  }),
];



export function Table({ name }:IProps){
  const [data, setData] = useState(() => [...studentData])
  const rerender = useReducer(() => ({}), {})[1]

  const table = useReactTable({
    data: studentData,
    columns: columnsStudent,
    getCoreRowModel: getCoreRowModel(),
  })
console.log({ ...table.getRowModel() })
  return (
    <div className='grid-content-area'>
      <S.Table tabIndex={0}>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup, index) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className={header.id !== 'Name'? 'hidden-info':''}>
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
                <td key={cell.id} data-th={headers[index]} className={index !== 0? 'hidden-info':''}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              <td data-th="Options">OPTIONS</td>
            </tr>
          ))}
        </tbody>
  
      </table>
      </S.Table>
    </div>
  );
}