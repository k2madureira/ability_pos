"use client";
import styled from "styled-components";
import Image from "next/image";

export const Icon = styled(Image)`
  max-width: 100%;
  height: auto;
  background-size: cover;
`;

export const CONTENT_DESKTOP = "54vw";
export const CONTENT_TABLET = "78vw";
export const CONTENT_MOBILE = "80vw";

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
  padding-left: 0.5rem;
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

  .is-loading {
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 2px;
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;

    li {
      display: flex;
      flex-direction: row;
      width: ${CONTENT_MOBILE};
      height: 3vh;
      width: 50%;
      span {
        color: var(--white);
      }
    }

    .chart-loading {
      width: 70vw;
      height: 20vh;
    }
  }

  @media (min-width: 740px) {
    width: ${CONTENT_TABLET};
    max-width: ${CONTENT_TABLET};

    h1 {
      margin-top: 1vh;
      height: 4vh;
    }

    .is-loading {
      width: ${CONTENT_TABLET};
      li {
        width: ${CONTENT_TABLET};
      }
    }
  }

  @media (min-width: 1024px) {
    width: ${CONTENT_DESKTOP};
    max-width: ${CONTENT_DESKTOP};

    h1 {
      margin-top: 1vh;
      height: 4vh;
    }

    .is-loading {
      width: ${CONTENT_DESKTOP};
      li {
        width: ${CONTENT_DESKTOP};
      }
    }
  }
`;
