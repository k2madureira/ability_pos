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

export const TABLE_DESKTOP = "14vw";
export const TABLE_TABLET = "20vw";
export const TABLE_MOBILE = "28vw";

export const Table = styled.div`
  @media (min-width: 740px) {
  }

  @media (min-width: 1024px) {
  }
`;
