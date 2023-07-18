import styled from "styled-components";

import Image from "next/image";

export const Icon = styled(Image)`
  max-width: 100%;
  height: auto;
  background-size: cover;
`;

export const FOOTER_DESKTOP = "15vw";
export const FOOTER_MOBILE = "75vw";

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  column-gap: 0.5rem;
  width: var(--grd-dash-content-width);
  height: var(--grd-dash-footer-height);
  background-color: var(--white);

  p {
    font-size: small;
    font-weight: 300;
  }

  @media (min-width: 740px) {
  }
`;
