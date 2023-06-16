'use client';
import { useFetchTheory } from "@/hooks/reactQuery/home/integrationApi";
import * as S from "./styles";

export function Theory(){
  const { data, isLoading } = useFetchTheory();

  console.log({ data: data,isLoading })
  return (
    <div className="grid-theory-area">
      <S.Theory tabIndex={0}>
         
          {isLoading && <>
            <h3 ></h3>
            <p className="is-loading"></p>
            <div className="instrument-image-container is-loading">
              <div className="instrument-image"></div>
            </div>
          
          </>}
          {!isLoading && <>
            <h3>Theory</h3>
            <p >{data?.description || ''}</p>
            <div className="instrument-image-container">
              <S.Icon
                  key={'instrument-image'}
                  className="instrument-image" 
                  src="/images/violin.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="down icon"
                />
            </div>
          </>}
    
         
          
        </S.Theory>
    </div>
  );
}