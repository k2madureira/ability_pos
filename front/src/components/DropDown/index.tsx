'use client';
import { FaUserEdit, FaPowerOff, FaRegStar } from 'react-icons/fa';
import * as S from "./styles";
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';

interface IProps {
  name: string;
  open: boolean;
}

export function DropDown({ name }:IProps){
  const { signOut } = useContext(AuthContext);
  async function handleSignOut() {
		await signOut();
	}

  return (
      <S.Drop tabIndex={0}>
        <ul className='drop-ul'>
          <li className='drop-li-user' key='drop-li-user'><FaRegStar className='icon'/> {name.toLowerCase().slice(0,10)}</li>
          <li className='drop-li-line'/>
          <li className='drop-li' key='drop-li-edit'><FaUserEdit className='icon'/> Editar</li>
          <li className='drop-li' key='drop-li-logout'><FaPowerOff className='icon'/>
            <S.StyledLink href="/signin"  onClick={() => handleSignOut()}>Logout</S.StyledLink>
          </li>
        </ul>
     
      </S.Drop>
  );
}