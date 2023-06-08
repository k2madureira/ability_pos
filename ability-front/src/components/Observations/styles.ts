import styled from "styled-components";

import Image from "next/image";

export const Icon = styled(Image)`
  max-width: 100%;
  height: auto;
  background-size: cover;
`;
export const OBSERVATIONS_DESKTOP = "25vw";
export const OBSERVATIONS_TABLET = "35vw";
export const OBSERVATIONS_MOBILE = "73vw";

export const Observations = styled.div`
  height: 42vh;
  margin-left: 4vw;
  background-color: var(--gray-050);

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 1vh;
    margin-bottom: 1vh;
    padding-left: 2vw;
  }

  .observations {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: ${OBSERVATIONS_MOBILE};

    .observation-items {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: ${OBSERVATIONS_MOBILE};
      max-width: 100%;
      height: auto;
      background-color: var(--gray-100);
      border: 1px solid var(--gray-300);
      border-radius: 1rem;
      padding: 0.5rem;
      padding-left: 10%;
      margin-top: 0.5rem;

      .observation-title {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 0.3rem;

        .observation-user {
          color: var(--fchisia-800);
          font-weight: 600;
          margin-right: 3%;
        }

        .observation-user-icon {
          width: 80%;
          padding: 0.2rem;
        }
      }

      .observation-content {
        max-width: 100%;
        height: 5vh;
        align-self: center;
        word-wrap: break-word;
        white-space: pre-wrap;
        overflow: auto;
      }
    }
  }
  @media (min-width: 740px) {
    grid-area: observations;
    height: 45vh;
    width: 38vw;
    max-width: 100%;
    margin-left: 1vw;
    margin-top: 2vh;

    h3 {
      font-size: 1.2rem;
      font-weight: 400;
      margin-top: 1vh;
    }

    .observations {
      max-width: 100%;
      overflow-y: auto;

      .observation-items {
        width: ${OBSERVATIONS_TABLET};
        height: auto;
        padding: 0.3rem;
        padding-left: 5%;
        margin-left: 1rem;
        margin-top: 0.4rem;

        .observation-title {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          gap: 0.3rem;

          .observation-user {
            color: var(--fchisia-800);
            font-weight: 600;
            margin-right: 3%;
          }

          .observation-user-icon {
            width: 80%;
            padding: 0.2rem;
          }
        }

        .observation-content {
          max-width: 100%;
          height: 5vh;
          align-self: center;
          word-wrap: break-word;
          white-space: pre-wrap;
          overflow: auto;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    grid-area: observations;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 80vh;
    width: 27vw;
    max-width: 100%;
    margin-left: 0vw;
    margin-top: 2vh;
    background-color: var(--white);

    span {
      font-size: 2rem;
      color: var(--pink-900);
      font-weight: 600;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 400;
      margin-top: 50%;
    }

    .observations {
      max-width: 100%;
      overflow-y: auto;

      .observation-items {
        width: ${OBSERVATIONS_DESKTOP};
        height: auto;
        padding: 0.5rem;
        padding-left: 5%;
        margin-left: 1rem;
        margin-top: 1rem;

        .observation-title {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          gap: 0.3rem;

          .observation-user {
            color: var(--fchisia-800);
            font-weight: 600;
            margin-right: 3%;
          }

          .observation-user-icon {
            width: 80%;
            padding: 0.2rem;
          }
        }

        .observation-content {
          max-width: 100%;
          height: 5vh;
          align-self: center;
          word-wrap: break-word;
          white-space: pre-wrap;
          overflow: auto;
          padding-left: 1rem;
        }
      }
    }
  }
`;
