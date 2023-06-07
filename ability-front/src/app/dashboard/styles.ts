"use client";
import styled from "styled-components";
import Image from "next/image";

export const Icon = styled(Image)`
  max-width: 100%;
  height: auto;
  background-size: cover;
`;

export const CONTENT_DESKTOP = "2fr";
export const CONTENT_MOBILE = "82vw";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 2fr;
  height: 10vh;

  h2 {
    padding: 1rem;
    font-weight: 500;
    font-size: large;
  }
  span {
    color: var(--fuchsia-950);
    font-weight: 700;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 1rem;
  max-width: ${CONTENT_MOBILE};
  max-height: auto;

  h1 {
    height: 5vh;
    font-size: 1.5rem;
    font-weight: 400;
  }

  .total-numbers {
    height: 10vh;
    margin-top: 1vh;
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      list-style: none;
      background-color: var(--gray-050);

      li {
        display: flex;
        flex-direction: row;

        width: 50%;
        p {
          padding: 0rem 0.5rem 0rem 0.3rem;
        }
        span {
          font-weight: 700;
        }
      }
    }
  }

  @media (min-width: 740px) {
    width: ${CONTENT_DESKTOP};
    max-width: ${CONTENT_DESKTOP};

    h1 {
      margin-top: 1vh;
      height: 4vh;
    }

    .total-numbers {
      margin-top: 1vh;
      width: ${CONTENT_DESKTOP};
      height: 15vh;
      font-size: 0.9rem;
    }
  }
`;
