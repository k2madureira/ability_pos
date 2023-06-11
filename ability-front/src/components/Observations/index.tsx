'use client';
import {format} from 'date-fns';
import * as S from "./styles";
import { useEffect, useState } from 'react';

interface IProps {
  user: string;
  instrument?: string
}

export function Observations({ user, instrument='violin' }:IProps){
  const date = format(new Date(),'MM-dd-yyyy')

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 1024px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);
  
  return (
    <div className="grid-observations-area">
      <S.Observations tabIndex={0}>
        {matches? <span>{instrument}</span>: <p/>}
          
          <h3>Observations</h3>
            <ul className="observations">
              
              <li className="observation-items" key={'observation-items-1'}>
                <div className="observation-title">
                  <div className="observation-icon">
                  <S.Icon
                    key={'user-observation-icon-1'}
                    className="observation-user-icon"
                    src="/images/icons/general/user.svg"
                    width={99}
                    height={56}
                    alt="user icon"
                  />
                  </div>
                  <div className="observation-user">
                    <p>{user},</p>
                  </div>
                  <div className="observation-date">
                    <p>{date}</p>
                  </div>
                </div>
                <div className="observation-content">
                  <p>Será necessário revisar a lição 30</p>
                </div>
              </li>

              <li className="observation-items" key={'observation-items-2'}>
                <div className="observation-title">
                  <div className="observation-icon">
                  <S.Icon
                    key={'user-observation-icon-2'}
                    className="observation-user-icon"
                    src="/images/icons/general/user.svg"
                    width={99}
                    height={56}
                    alt="user icon"
                  />
                  </div>
                  <div className="observation-user">
                    <p>{user},</p>
                  </div>
                  <div className="observation-date">
                    <p>{date}</p>
                  </div>
                </div>
                <div className="observation-content">
                  <p>A execução da lição de método 58, não foi satisfatória</p>
                </div>
              
              </li>

              <li className="observation-items" key={'observation-items-3'}>
                <div className="observation-title">
                  <div className="observation-icon">
                  <S.Icon
                    key={'user-observation-icon-3'}
                    className="observation-user-icon"
                    src="/images/icons/general/user.svg"
                    width={99}
                    height={56}
                    alt="user icon"
                  />
                  </div>
                  <div className="observation-user">
                    <p>{user},</p>
                  </div>
                  <div className="observation-date">
                    <p>{date}</p>
                  </div>
                </div>
                <div className="observation-content">
                  Próxima semana, vamos tocar qual lição?
                </div>
              
              </li>

            </ul>
            
       
          
        </S.Observations>
    </div>
  );
}