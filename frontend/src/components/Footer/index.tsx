'use client';
import {format} from 'date-fns';
import { FaRegCopyright } from 'react-icons/fa';
import * as S from "./styles";


export function Footer(){
  const dateYear = format(new Date(),'yyyy')
  return (
    <div className="grid-footer-area">
      <S.Footer>
        <FaRegCopyright />
        <p>{`${dateYear} Ability, All Right Reserved`}</p>       
      </S.Footer>
    </div>
  );
}