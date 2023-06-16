'use client';
import { useState } from "react";
import { FaRegSun } from 'react-icons/fa';
import * as S from "./styles";
import { DropDown } from '@/components/DropDown';
interface IProps {
  isHome?: boolean;
  txt: string;
}

export function NavBar({ isHome =false, txt }:IProps){
  const [isOpen, setOpen] = useState(false);

  function handleOpen (){ 
    setOpen(current => !current) 
  };
 
  return (
    <div className="grid-nav-area">
      <S.Nav tabIndex={0}>
          {
            isHome ? 
            <h2>Welcome, <span>{txt}</span></h2> : 
            <h2/>
          }
          
          <div className="select-nav">
            <div className="select-nav-icons">
            <button onClick={handleOpen}>
            
              <S.Icon
                key={'down-nav-icon'}
                className={`nav-icon chevron-down ${(isOpen ?'is-open': '')}`} 
                src="/images/icons/general/chevron-down.svg"
                width={99}
                height={56}
                alt="down icon"
           
              />
            </button>
            
            <FaRegSun key={'user-nav-icon'}
              className="engine-icon"/>
            
            
            </div>
            
            {!isOpen && <></>}
            {isOpen && <DropDown open name={txt}/>}
            
            
          </div>
        </S.Nav>
    </div>
  );
}