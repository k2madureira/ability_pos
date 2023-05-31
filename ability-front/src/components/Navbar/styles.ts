import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

import Image from "next/image";

export const LogoImage = styled(Image)`
  max-width: 100%;
  height: auto;
  background-size: cover;
`;

export const IconImage = styled(Image)`
  max-width: 100%;
  height: auto;
  background-size: cover;
`;

export const MENU_DESKTOP = "15vw";

export const Nav = styled.div`
  grid-template-rows: ${MENU_DESKTOP};
  grid-template-areas: "h";
  background: var(--purple-950);
  height: 100vh;
  width: ${MENU_DESKTOP};
  top: 0;
  left: 0;
  z-index: 5;
  outline: none;

  header {
    padding-top: 5%;
    grid-area: h;

    .ImgLogo {
      position: relative !important;
      max-width: 25%;
      max-height: 100%;
      height: auto;
    }
  }

  aside {
    ul {
      list-style: none;
      padding: 0.5rem 0;
      margin: 0;

      li {
        width: 100%;
        height: 10%;
        padding: 0.5rem 1rem 0.5rem 2rem;
        margin: 1rem;
        font-size: 1rem;
        color: var(--purple-090);
        background-repeat: no-repeat;
        background-position: left 1rem center;
        transition: all 0.15s linear;
        cursor: pointer;

        .Icon {
          height: auto;
          margin-right: 1rem;
          filter: invert(99%) sepia(2%) saturate(3640%) hue-rotate(114deg)
            brightness(80%) contrast(97%);
        }
        &:hover {
          font-weight: 700;

          .Icon {
            width: 11%;
            filter: invert(99%) sepia(2%) saturate(5000%) hue-rotate(114deg)
              brightness(90%) contrast(87%);
          }
        }
        &:focus {
          outline: none;
        }
      }
    }
  }

  ${breakpoint("desktop")`
	    display: grid;
      max-width: 34vw;
      grid-template-columns: 1fr;
      grid-template-areas:
      'h'
      'm'
      'f';
      grid-template-rows: 10vh 40vh 50vh;
      height: 100vh;

      header  {
				padding-top: 20%;
        width: 100%;
        height: 100%;
        display:flex;
        display: -webkit-flex; 
        justify-content: center;
        align-items: center;
				
				.ImgLogo {
					position: relative !important;
					width: 80%;
					max-height: 100%;
					height: auto;
				}

      }

      aside {
        grid-area: m;
        align-self: center;
        margin-top: 20%;
        padding: 1rem;
      }
  
  `}
`;
