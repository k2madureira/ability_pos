'use client';

import * as S from "./styles";
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { FaEdit, FaList, FaTrash } from 'react-icons/fa';

interface IProps {
  data: any;
  matchesMedia: boolean;
}

interface IGroup {
  key: React.Key;
	nome: string;
	estudantes: number;
	iniciado: string;
	options: string;
}

export function GroupsTable({ data,matchesMedia }:IProps){

  let columns: ColumnsType<IGroup> = [
    {
      title: 'Nome',
      dataIndex: 'nome',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.nome.length - b.nome.length,
    },
    {
      title: 'Estudantes',
      dataIndex: 'estudantes',
    },
    {
      title: 'Data início',
      dataIndex: 'iniciado',
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
    columns = columns.filter(columns => !['Estudantes','Data início'].includes(`${columns.title}`));
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