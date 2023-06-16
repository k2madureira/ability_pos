import styled from "styled-components";

import Image from "next/image";
import Link from "next/link";

export const Icon = styled(Image)`
  max-width: 100%;
  height: auto;
  background-size: cover;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--black);

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:focus {
    font-weight: 800;
    color: var(--fuchsia-900);
  }
`;

export const DROP_DESKTOP = "14vw";
export const DROP_TABLET = "20vw";
export const DROP_MOBILE = "28vw";

export const Drop = styled.div`
  position: fixed;
  width: ${DROP_MOBILE};
  height: 10vh;
  background-color: var(--gray-100);
  z-index: 1;
  margin-left: -10vw;
  margin-top: 12vh;
  border: 0.1rem solid var(--gray-200);
  border-radius: 15px 10px;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: ${DROP_MOBILE};
    height: 10vh;
    list-style: none;
    padding: 0.2rem;

    li {
      font-size: 0.8rem;
      font-weight: 600;
      padding-left: 0.5rem;

      .icon {
        width: 9%;
        justify-self: center;
        margin-right: 0.4rem;
      }
    }

    .drop-li-user {
      color: var(--fuchsia-900);
      font-weight: 700;
      font-size: 1rem;
    }
    .drop-li-line {
      width: 95%;
      height: 0.1vh;
      border-top: 1px solid var(--fuchsia-950);
      opacity: 30%;
    }

    .drop-li {
      &:hover {
        font-weight: 800;
        color: var(--fuchsia-900);
      }
    }
  }

  @media (min-width: 740px) {
    width: ${DROP_TABLET};
    height: 10vh;
    margin-left: -2vw;
    ul {
      .drop-li-line {
        width: 70%;
        height: 0.1vh;
        border-top: 1px solid var(--fuchsia-950);
        opacity: 30%;
      }
    }
  }

  @media (min-width: 1024px) {
    width: ${DROP_DESKTOP};
    height: 10vh;
    margin-left: 5vw;
    ul {
      .drop-li-line {
        width: 50%;
        height: 0.1vh;
        border-top: 1px solid var(--fuchsia-950);
        opacity: 30%;
      }
    }
  }
`;
