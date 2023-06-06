"use client";
import styled from "styled-components";
import Image from "next/image";

export const Icon = styled(Image)`
  max-width: 100%;
  height: auto;
  background-size: cover;
`;

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
  justify-content: space-around;
  padding: 1rem;
  max-width: 100%;
  max-height: auto;
  h1 {
    flex-grow: 1;
    font-size: 1.5rem;
    font-weight: 400;
  }

  .total-numbers {
    flex-grow: 2;

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      list-style: none;
      //margin-top: -20vh;
      background-color: var(--gray-050);

      li {
        display: flex;
        flex-direction: row;
        padding: 0.5rem;
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
`;
