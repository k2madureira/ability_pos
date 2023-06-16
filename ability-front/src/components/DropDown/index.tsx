'use client';
import { FaRegCopyright } from 'react-icons/fa';
import * as S from "./styles";

interface IProps {
  name: string;
  open: boolean;
}

export function DropDown({ name }:IProps){

  return (
      <S.Drop tabIndex={0}>
        <ul className='drop-ul'>
          <li className='drop-li' key='drop-li-user'>{name}</li>
          <li className='drop-li' key='drop-li-edit'>Editar</li>
          <li className='drop-li' key='drop-li-logout'>Logout</li>
        </ul>
      {/* <FaRegCopyright/> */}
      </S.Drop>
  );
}