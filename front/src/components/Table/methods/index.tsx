'use client';

import * as S from "./styles";
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { FaEdit, FaList, FaTrash } from 'react-icons/fa';

interface IProps {
  data: any;
  matchesMedia: boolean;
}

interface IMethod {
  key: React.Key;
	title: string;
	instrument: string;
	options: string;
}

export function MethodsTable({ data,matchesMedia }:IProps){

  let columns: ColumnsType<IMethod> = [
    {
      title: 'Título',
      dataIndex: 'title',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.title.length - b.title.length,
    },
    {
      title: 'Instrumento',
      dataIndex: 'instrument',
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
    columns = columns.filter(columns => !['Instrumento'].includes(`${columns.title}`));
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