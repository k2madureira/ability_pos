'use client';
import * as S from "./styles";

interface IProps {
  instrument: string;
}

export function Theory({ instrument }:IProps){

  return (
    <div className="grid-theory-area">
      <S.Theory tabIndex={0}>
          <h3>Theory</h3>
          <p> A teoria musical é: Lorenipsu noaisdqiwnm poajsdqw</p>
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
          
        </S.Theory>
    </div>
  );
}