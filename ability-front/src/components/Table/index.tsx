'use client';
import { FaUserEdit, FaPowerOff, FaRegStar } from 'react-icons/fa';
import * as S from "./styles";
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';

interface IProps {
  name: string;
}

export function Table({ name }:IProps){
  const { signOut } = useContext(AuthContext);
  async function handleSignOut() {
		await signOut();
	}

  return (
    <div className='grid-content-area'>
      <S.Table tabIndex={0}>
          TABELA
      </S.Table>
    </div>
  );
}