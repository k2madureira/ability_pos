'use client';
import { useFetchTheory } from "@/hooks/reactQuery/home/integrationApi";
import * as S from "./styles";
import { User } from "@/hooks/dto/Iuser.dto";
import { useMediaQuery } from "@/hooks/custom/useMediaQuery";

export function Theory({ instrumentDash =false, user }: {instrumentDash?: boolean; user?: User | undefined }){
  const matchesMedia = useMediaQuery('(min-width: 1024px)');
  const { data, isLoading } = useFetchTheory();
  const imageStyle = {
    border: '1px solid #fff',
    marginTop: '4vh'
  }
  return (
    <div className={instrumentDash? "grid-observations-area": "grid-theory-area"}>

    {instrumentDash && <>
      <S.AsideTheory tabIndex={0}>
        {isLoading && <>
           <h3 ></h3>
           <p className="is-loading"></p>
           <div className="instrument-image-container is-loading">
             <div className="instrument-image"></div>
           </div>
         
         </>}
         {!isLoading && <>
           <h3>{user?.instrument.name}</h3>
           <p >{data?.description || ''}</p>
           <div className="instrument-image-container">
             <S.Icon
                 key={'instrument-image'}
                 className="instrument-image" 
                 src="/images/violin.png"
                 width={440}
                 height={500}
                 style={imageStyle}
                 alt="instrument image"
               />
           </div>
         </>}
      </S.AsideTheory>
    </>}
    {!instrumentDash && <>
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
    
    </>}




      
    </div>
  );
}