"use client";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const Content = styled.div`
  display: grid;
  grid-template:
    "sidenav nav" 10vh
    "sidenav content" 80vh
    "sidenav footer" 5vh
    / 15vw 2fr;
  gap: 1rem;

  .grid-nav-area {
    grid-area: nav;
  }

  .grid-content-area {
    grid-area: content;
  }

  .grid-footer-area {
    grid-area: footer;
  }

  @media (min-width: 1024px) {
    grid-template:
      "sidenav nav nav" 10vh
      "sidenav content notification" 76vh
      "sidenav footer footer" 10vh
      / 15vw 3fr 1fr;

    .grid-notification-area {
      grid-area: notification;
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
