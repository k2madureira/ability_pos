import * as S from "./styles";

export function NavBar(){
  return (
    <>
      <S.Nav>
        <header>
        <div className="smartphone-menu"></div>
          <S.LogoImage
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
                    
                    <span>
                      <S.IconImage 
                      key={`icon-${index}`}
                      className="Icon"
                      src={`/images/icons/${item.toLowerCase()}/${item.toLowerCase()}.svg`}
                      width={19}
                      height={15}
                      alt={`icon-${item}`}
                      />
                      <i className={`${item}Icon`}/>
                      {item}
                      </span>
                  </li>
                );
              })
            }
          </ul>
        </aside>
       <footer></footer>
        
      </S.Nav>
    </>
  );
}