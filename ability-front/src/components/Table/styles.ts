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
  height: 36vh;
  overflow-y: auto;

  table {
    margin: auto;
    min-width: ${TABLE_MOBILE};
    max-width: 90%;
    border-collapse: collapse;
    color: var(--black);
    border-radius: 0.4em;
    overflow: hidden;
    border-spacing: 0.5rem;
    border-collapse: separate;

    thead {
      background-color: var(--fchisia-800);
      color: var(--white);

      tr {
        th {
          padding: 0.5rem;
        }
      }
    }

    tbody {
      tr {
        td {
          border: 1px solid var(--fchisia-800);
          padding: 0.5rem;
          font-size: 0.8rem;
        }
      }
    }
  }

  .hidden-info {
    display: none;
  }

  @media (min-width: 740px) {
    .hidden-info {
      display: inline;
    }

    table tr:nth-child(2) {
      border-top: none;
    }

    table tr:hover:not(:first-child) {
      background-color: #d8e7f3;
    }
    table td:before {
      display: none;
    }
    table th,
    table td {
      display: table-cell;
      padding: 0.25em 0.5em;
    }
    table th:first-child,
    table td:first-child {
      padding-left: 0;
    }
    table th:last-child,
    table td:last-child {
      padding-right: 0;
    }
    table th,
    table td {
      padding: 1em !important;
    }
  }

  @media (min-width: 1024px) {
  }
`;
