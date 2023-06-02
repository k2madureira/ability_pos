"use client";
import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 2fr;
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
`;
