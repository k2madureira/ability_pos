"use client";
import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  main {
    position: absolute;
    top: 10%;
    left: 50%;
    text-align: center;
  }
  ${breakpoint("desktop")`
    
  `}
`;
