'use client';
import * as S from "./styles";


export function NavBar(){
  return (
    <>
      <S.Nav tabIndex={0}>
        <header>
          <S.Icon
            key={'ability-nav-logo'}
            className="ImgLogo"
            src="/images/sign-logo.png"
            width={99}
            height={56}
            alt="Logo"
          />
        </header>
        <aside>
          <ul>
            {
              ['Home','Students','Methods','Instruments']
              .map((item,index) => {
                return (
                  <li key={`li-${index}`}>
                    
                    <div>
                      <div className="li-icon">
                        <S.Icon 
                        key={`icon-${index}`}
                        className="Icon"
                        src={`/images/icons/${item.toLowerCase()}/${item.toLowerCase()}.svg`}
                        width={19}
                        height={15}
                        alt={`icon-${item}`}
                        />
                      </div>
                      <div className="li-span">
                        <span>{item}</span>
                      </div>
                    
                    </div>
                  </li>
                );
              })
            }
          </ul>
        </aside>
       <footer>
        <S.Icon
            key={'ability-nav-colcheia'}
            className="colcheia-icon"
            src="/images/icons/music/colcheia.svg"
            width={99}
            height={56}
            alt="Logo"
          />
       </footer>
        
      </S.Nav>
    </>
  );
}