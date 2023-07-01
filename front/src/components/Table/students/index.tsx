'use client';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { FaEdit, FaList, FaTrash } from 'react-icons/fa';

import * as S from "./styles";


interface IProps {
  data: any;
  matchesMedia: boolean;
}


interface IStudent {
  key: React.Key;
  nome: string;
	grupo: string;
	instrumento: string;
  options: string;
}


export function StudentsTable({ data,matchesMedia }:IProps){

  let columns: ColumnsType<IStudent> = [
    {
      title: 'Nome',
      dataIndex: 'nome',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.nome.length - b.nome.length,
    },
    {
      title: 'Grupo',
      dataIndex: 'grupo',
    },
    {
      title: 'Instrumento',
      dataIndex: 'instrumento',
    },
    {
      title: 'Opções',
      dataIndex: 'options',
      render: (id: string) => (
        <span>
          <FaEdit className='icon icon-edit'/>
					<FaList className='icon icon-list'/>
          <FaTrash className='icon icon-trash'/>
        </span>
      ),
    },
  ];

  if (!matchesMedia) {
    columns = columns.filter(columns => !['Grupo','Instrumento'].includes(`${columns.title}`));
  }
  
  return (
      <S.Table tabIndex={0}>
        <Table 
          columns={columns} 
          dataSource={data} 
          pagination={{ pageSize: matchesMedia? 10:3 }} 
          scroll={{ y: matchesMedia? 150: 180 }} 
          rowKey="uid"
        />
      </S.Table>
    
  );
}