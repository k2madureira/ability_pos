import styled from "styled-components";

import Image from "next/image";

export const Icon = styled(Image)`
  max-width: 100%;
  height: auto;
  background-size: cover;
`;

export const THEORY_DESKTOP = "52vw";
export const THEORY_TABLET = "38vw";

export const AsideTheory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 23vw;
  height: 58vh;
  margin-left: 2vw;
  margin-top: 2vh;
  background-color: var(--fuchsia-950);
  color: var(--white);

  border-radius: 1rem 1rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 3vh;
    margin-bottom: 1vh;
  }

  p {
    width: 23vw;
    height: 50vh;
    margin-top: 2vh;
    padding-left: 2vw;
    margin-bottom: 1.5vh;
    margin-top: 2vh;
    padding-left: 2vw;
    padding-right: 2vw;
    text-align: justify;
    overflow-y: auto;
  }

  .instrument-image-container {
    width: 23vw;
    height: 20vh;
    .instrument-image {
      position: relative !important;
    }
  }
`;

export const Theory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: ${THEORY_TABLET};
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
    width: ${THEORY_TABLET};
    height: 2vh;
  }
  p {
    width: ${THEORY_TABLET};
    height: 26vh;
    margin-top: 2vh;
    padding-left: 2vw;
    margin-bottom: 1.5vh;
    margin-top: 2vh;
    padding-left: 2vw;
    padding-right: 2vw;
    text-align: justify;
    overflow-y: auto;
  }

  .instrument-image-container {
    width: ${THEORY_TABLET};
    height: 15vh;

    .instrument-image {
      position: relative !important;
      max-width: 100%;
      border-radius: 0rem 0rem 1rem 1rem;
    }
  }

  .is-loading {
    background: var(--fuchsia-950);
    background: linear-gradient(
      110deg,
      var(--fuchsia-900) 8%,
      var(--fuchsia-600) 18%,
      var(--fuchsia-900) 33%
    );
    border-radius: 2px;
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
    p {
      width: ${THEORY_TABLET};
      height: 26vh;
      margin-top: 2vh;
      padding-left: 2vw;
      margin-bottom: 1.5vh;
      margin-top: 2vh;
      padding-left: 2vw;
      padding-right: 2vw;
    }
    h3 {
      align-self: flex-start;
      font-size: 1.5rem;
      font-weight: 400;
      margin-top: 1vh;
      margin-bottom: 1vh;
      margin-left: 2vw;
      width: ${THEORY_TABLET};
      height: 3vh;
    }
  }

  @media (min-width: 1024px) {
    grid-area: theory;
    height: 35vh;
    width: ${THEORY_DESKTOP};
    max-width: 100%;
    background-color: var(--gray-100);
    color: var(--gray-600);

    h3 {
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--black);
      margin-top: 1vh;
    }

    p {
      width: ${THEORY_DESKTOP};
      height: 25vh;
      margin-bottom: 1.5vh;
      margin-top: 2vh;
      padding-left: 2vw;
      padding-right: 2vw;
      overflow-y: auto;
      font-size: 1rem;
      font-weight: 400;
      text-align: justify;
    }

    p::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px var(--gray-400);
      background-color: var(--gray-200);
    }

    p::-webkit-scrollbar {
      width: 0.5rem;
      background-color: var(--gray-200);
    }

    p::-webkit-scrollbar-thumb {
      background-color: var(--gray-600);
      border: 1px solid var(--gray-600);
    }

    .instrument-image-container {
      width: ${THEORY_DESKTOP};
      height: 15vh;

      .instrument-image {
        opacity: 90%;
        position: relative !important;
        max-width: 100%;
        border-radius: 0rem 0rem 1rem 1rem;
      }
    }

    .is-loading {
      background: #eee;
      background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
      p {
        width: ${THEORY_DESKTOP};
        height: 25vh;
        margin-bottom: 1.5vh;
        margin-top: 2vh;
        padding-left: 2vw;
        padding-right: 2vw;
      }
      h3 {
        margin-top: 1vh;
      }
    }
  }

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;
