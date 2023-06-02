'use client';
import Link from "next/link";
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
                const page =item.toLowerCase(); 
                return (
                  <li key={`li-${index}`}>
                    
                    <Link className='li-link' href={`/dashboard/${item === "Home" ? "" : page}`}>
                    <div className="li-icon">
                        <S.Icon 
                        key={`icon-${index}`}
                        className="Icon"
                        src={`/images/icons/${page}/${page}.svg`}
                        width={19}
                        height={15}
                        alt={`icon-${item}`}
                        />
                      </div>
                      <div className="li-span">
                        <span>{item}</span>
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