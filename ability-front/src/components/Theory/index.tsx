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
          <p > Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</p>
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