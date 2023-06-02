import styled from "styled-components";

import Image from "next/image";

export const Icon = styled(Image)`
  max-width: 100%;
  height: auto;
  background-size: cover;
`;

export const NAV_DESKTOP = "15vw";
export const NAV_MOBILE = "2fr";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${NAV_MOBILE};
  height: 10vh;

  h2 {
    padding: 1rem;
    font-weight: 600;
    font-size: large;
  }
  span {
    color: var(--fuchsia-950);
    font-weight: 700;
  }

  .select-nav {
    display: grid;
    grid-template:
      "icons" 3vh
      "user" 1vh
      / 20vw;
    align-items: center;
    row-gap: 0.3rem;

    .select-nav-icons {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: baseline;
      grid-area: icons;
      justify-self: end;
      padding: 1rem;

      .nav-icon {
        width: 60%;
        padding: 0.2rem;
      }

      .chevron-down {
        transform: rotate(0);
      }

      &:hover {
        font-weight: 700;

        .chevron-down {
          filter: invert(9%) sepia(78%) saturate(3034%) hue-rotate(285deg)
            brightness(93%) contrast(108%);
          transform: rotate(45deg);
        }
      }
      &:focus {
        outline: none;
      }
    }
    .select-nav-user {
      color: var(--fuchsia-950);
      font-size: x-small;
      grid-area: user;
      justify-content: flex-end;

      p {
        max-width: 100vw;
        width: 10vw;
        padding-left: 40%;
      }
    }
  }

  @media (min-width: 740px) {
    padding-top: 5rem;
    h2 {
      font-size: x-large;
    }
    .select-nav {
      margin-right: 3rem;
    }
  }
`;
