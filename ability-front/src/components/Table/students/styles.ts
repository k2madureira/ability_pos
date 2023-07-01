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

export const TABLE_MOBILE = "76vw";
export const TABLE_TABLET = "76vw";
export const TABLE_DESKTOP = "54vw";

export const Table = styled.div`
  width: ${TABLE_MOBILE};
  height: 34vh;
  overflow: auto;

  .ant-table-thead .ant-table-cell {
    background-color: var(--fchisia-800) !important;
    color: var(--white);
  }

  .icon {
    padding: 0.1rem;
    margin-left: 0.5rem;
  }

  .icon-edit {
    color: var(--green-200);
  }

  .icon-list {
    color: var(--fchisia-800);
  }

  .icon-trash {
    color: var(--red-400);
  }

  @media (min-width: 740px) {
    width: ${TABLE_TABLET};
  }

  @media (min-width: 1024px) {
    width: ${TABLE_DESKTOP};
  }
`;
