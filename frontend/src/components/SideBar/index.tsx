'use client';
import Link from "next/link";
import * as S from "./styles";


export function SideBar(){
  const pt = ['Início','Estudantes','Métodos','Instrumentos'];
  return (
    <>
      <S.Side tabIndex={0}>
        <header>
          <S.Icon
            key={'ability-sidebar-logo'}
            className="ImgLogo"
            src="/images/sign-logo.png"
            width={99}
            height={56}
            alt="ability logo"
          />
        </header>
        <aside>
          <ul>
            {
              ['Home','Students','Methods','Instruments']
              .map((item,index) => {
                const page =item.toLowerCase(); 
                return (
                  <li key={`li-${index}`}>
                    
                    <Link className='li-link' href={`/${page}`}>
                    <div className="li-icon">
                        <S.Icon 
                        key={`icon-${index}`}
                        className="Icon"
                        src={`/images/icons/${page}/${page}.svg`}
                        width={19}
                        height={15}
                        alt={`${item} icon`}
                        />
                      </div>
                      <div className="li-span">
                        <span>{pt[index]}</span>
                      </div>
                    </Link>
                    
                  </li>
                );
              })
            }
          </ul>
        </aside>
       <footer>
        <S.Icon
            key={'ability-sidebar-colcheia'}
            className="colcheia-icon"
            src="/images/icons/music/colcheia.svg"
            width={99}
            height={56}
            alt="colcheia icon"
          />
       </footer>
        
      </S.Side>
    </>
  );
}