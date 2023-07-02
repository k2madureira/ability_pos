import styled from "styled-components";

import Image from "next/image";

export const Icon = styled(Image)`
  max-width: 100%;
  height: auto;
  background-size: cover;
`;

export const MENU_DESKTOP = "15vw";
export const MENU_MOBILE = "15vw";

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  background: var(--purple-950);
  width: ${MENU_MOBILE};
  height: 100vh;
  outline: none;
  position: fixed;
  z-index: 5;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50%;

    .ImgLogo {
      position: relative !important;
      max-width: 70%;
      max-height: 100%;
      height: auto;
    }
  }

  aside {
    flex-grow: 2;
    align-self: center;
    padding: 1rem;
    height: 20vh;

    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 20vh;
      list-style: none;
      margin-top: 5vh;

      .li-link {
        text-decoration: none;
        color: var(--purple-090);
      }
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 4rem;
        width: 100%;
        font-size: 1rem;

        span {
          display: none;
        }

        .Icon {
          filter: invert(99%) sepia(2%) saturate(3640%) hue-rotate(114deg)
            brightness(80%) contrast(97%);
        }
        &:hover {
          font-weight: 700;

          .Icon {
            width: 5vw;
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

  footer {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;

    .colcheia-icon {
      position: relative !important;
      max-width: 4vw;
      max-height: 100%;
      height: auto;
    }
  }

  @media (min-width: 740px) {
    header {
      padding-top: 40%;
      .ImgLogo {
        max-width: 50%;
      }
    }
    aside {
      ul {
        li {
          .li-link {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            span {
              display: initial;
              padding-top: 0.5rem;
            }

            &:hover {
              .Icon {
                width: 3vw;
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: 1024px) {
    align-items: center;
    padding-top: 0%;

    header {
      flex-grow: 1;
      padding-top: 0%;

      .ImgLogo {
        max-width: 60%;
      }
    }
    aside {
      width: ${MENU_DESKTOP};
      max-width: 100vw;
      margin-top: 1vh;
      padding: 0.2rem;

      ul {
        margin-top: 0vh;
        height: 25vh;
        li {
          margin-top: 1rem;
          max-width: 100vw;
          .li-link {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            width: 80%;

            .li-icon {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: center;
              width: 20%;
              margin-left: 5%;
            }

            .li-span {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: center;
              padding-top: 0.5rem;
              padding-left: 5%;
              width: 60%;
            }

            &:hover {
              .Icon {
                width: 50%;
              }
            }
          }
        }
      }
    }

    footer {
      .colcheia-icon {
        max-width: 30%;
      }
    }
  }
`;
