import styled from "styled-components";

import Image from "next/image";

export const Icon = styled(Image)`
  max-width: 100%;
  height: auto;
  background-size: cover;
`;

export const THEORY_DESKTOP = "38vw";
export const THEORY_MOBILE = "73vw";

export const Theory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: ${THEORY_DESKTOP};
  height: 42vh;
  margin-top: 2vh;
  background-color: var(--fuchsia-950);
  color: var(--white);
  border-radius: 1rem;

  h3 {
    align-self: flex-start;
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 1vh;
    margin-bottom: 1vh;
    margin-left: 2vw;
    width: ${THEORY_DESKTOP};
    height: 2vh;
  }
  p {
    width: ${THEORY_DESKTOP};
    height: 26vh;
    margin-top: 2vh;
    padding-left: 2vw;
    overflow-y: auto;
  }

  .instrument-image-container {
    width: ${THEORY_DESKTOP};
    height: 15vh;

    .instrument-image {
      position: relative !important;
      max-width: 100%;
      border-radius: 0rem 0rem 1rem 1rem;
    }
  }

  @media (min-width: 1024px) {
    grid-area: theory;
    height: 45vh;
    width: 38vw;
    max-width: 100%;

    h3 {
      font-size: 1.2rem;
      font-weight: 400;
      margin-top: 1vh;
    }
  }
`;
