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
    "sidenav nav" var(--grd-dash-nav-height)
    "sidenav content" var(--grd-dash-content-height)
    "sidenav observations" var(--grd-dash-observations-height)
    "sidenav footer" var(--grd-dash-footer-height)
    / var(--grd-dash-sidebar-width) var(--grd-dash-content-width);
  column-gap: 2vw;
  row-gap: 1vh;

  .grid-nav-area {
    grid-area: nav;
  }

  .grid-content-area {
    grid-area: content;
  }

  .grid-observations-area {
    grid-area: observations;
  }

  .grid-footer-area {
    grid-area: footer;
  }

  @media (min-width: 740px) {
    grid-template:
      "sidenav nav nav" 10vh
      "sidenav content content" 37vh
      "sidenav observations theory" 45vh
      "sidenav footer footer" 4vh
      / 15vw 2fr 2fr;

    .grid-theory-area {
      grid-area: theory;
    }
  }

  @media (min-width: 1024px) {
    grid-template:
      "sidenav nav nav" 10vh
      "sidenav content observations" 84vh
      "sidenav footer footer" 4vh
      / 15vw 3fr 1fr;

    .grid-observations-area {
      grid-area: observations;
    }
  }
`;
