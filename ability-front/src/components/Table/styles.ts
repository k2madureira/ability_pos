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
export const TABLE_TABLET = "75vw";
export const TABLE_DESKTOP = "75vw";

export const Table = styled.div`
  width: ${TABLE_MOBILE};
  height: 34vh;
  overflow: auto;

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

  table {
    width: 100%;
  }

  table,
  td {
    border-collapse: collapse;
    border: 1px solid var(--fchisia-800);
  }

  thead {
    display: table;
    width: 100%;
    background-color: var(--fchisia-800);
    color: var(--white);
  }

  tbody {
    display: block;
    max-height: 26vh;
    overflow-y: scroll;
  }

  th,
  td {
    width: 20%;
    padding: 0.5rem;
    word-break: break-all;
  }

  tr {
    display: table;
    width: 100%;
    box-sizing: border-box;
  }

  td {
    text-align: center;
    border-bottom: none;
    border-left: none;
  }

  @media (min-width: 740px) {
  }

  @media (min-width: 1024px) {
  }
`;
