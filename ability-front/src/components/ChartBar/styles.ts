import styled from "styled-components";

import Image from "next/image";

export const Icon = styled(Image)`
  max-width: 100%;
  height: auto;
  background-size: cover;
`;

export const CHART_DESKTOP = "75vw";
export const CHART_MOBILE = "73VW";

export const Chart = styled.div`
  flex-grow: 2;
  width: ${CHART_MOBILE};
  height: auto;
  //margin-top: -58vh;
  background-color: var(--gray-050);
  border: 1px solid var(--gray-300);
`;
