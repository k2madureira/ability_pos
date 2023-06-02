'use client';
import * as S from "./styles";

interface IProps {
  isHome?: boolean;
  txt: string;
}

export function NavBar({ isHome =false, txt }:IProps){
  return (
    <div className="grid-nav-area">
      <S.Nav tabIndex={0}>
          {
            isHome ? 
            <h2>Welcome, <span>{txt}</span></h2> : 
            <h2>{txt}</h2>
          }
          
          <div className="select-nav">
            <div className="select-nav-icons">
            <S.Icon
              key={'down-nav-icon'}
              className="nav-icon chevron-down" 
              src="/images/icons/general/chevron-down.svg"
              width={99}
              height={56}
              alt="down icon"
            />
            
            <S.Icon
              key={'user-nav-icon'}
              className="nav-icon"
              src="/images/icons/general/user.svg"
              width={99}
              height={56}
              alt="user icon"
            />
            </div>
            <div className="select-nav-user">
              <p>{!isHome ? txt: ''}</p>
            </div>
            
          </div>
        </S.Nav>
    </div>
  );
}