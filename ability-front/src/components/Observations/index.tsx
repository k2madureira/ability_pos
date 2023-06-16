'use client';
import * as S from "./styles";
import { useEffect, useState } from 'react';
import { useFetchObservation } from "@/hooks/reactQuery/observations/integrationApi";


export function Observations(user: any){
  const { data, isLoading } = useFetchObservation(user);

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
        {isLoading && <>
        
          {matches? <span></span>: <p/>}
          
          <h3></h3>
            <ul className="observations">
              { 
              [1,2,3,4].map((i:number)=> 
                <li className="observation-items is-loading" key={`item-${i}`}>
                  <div className="observation-title" key={`title-${i}`}>
                    <div className="observation-icon" key={`icon-${i}`}>
                   <div className="observation-user-icon"></div>
                    </div>
                    <div className="observation-user" key={`user-${i}`}>
                      <p></p>
                    </div>
                    <div className="observation-date" key={`date-${i}`}>
                      <p></p>
                    </div>
                  </div>
                  <div className="observation-content">
                    <p></p>
                  </div>
                </li>
                 )
              }

            </ul>
        
        </>}
        {!isLoading && <>

          {matches? <span>{user?.instrument.name}</span>: <p/>}
          
          <h3>Observations</h3>
            <ul className="observations">
              { 
              data?.map((ob:any)=> 
                <li className="observation-items" key={`item-${ob.id}`}>
                  <div className="observation-title" key={`title-${ob.id}`}>
                    <div className="observation-icon" key={`icon-${ob.id}`}>
                    <S.Icon
                      key={`user-observation-icon-${ob.id}`}
                      className="observation-user-icon"
                      src="/images/icons/general/user.svg"
                      width={99}
                      height={56}
                      alt="user icon"
                    />
                    </div>
                    <div className="observation-user" key={`user-${ob.id}`}>
                      <p>{`${ob.student.firstName}`.toLowerCase()},</p>
                    </div>
                    <div className="observation-date" key={`date-${ob.id}`}>
                      <p>{ob.createdAt}</p>
                    </div>
                  </div>
                  <div className="observation-content">
                    <p>{ob.description}</p>
                  </div>
                </li>
                 )
              }

            </ul>
        
        </>}
        
            
       
          
        </S.Observations>
    </div>
  );
}