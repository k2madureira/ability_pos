'use client';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import Image from 'next/image';

export const LogoImage = styled(Image)`
	max-width: 100%;
	height: auto;
	background-size: cover;
`;

export const WomanImage = styled(Image)`
	max-width: 100%;
	height: auto;
	background-size: cover;
`;

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	width: 100vw;
	height: 100vh;

	${breakpoint('desktop')`
    grid-template-columns: 1fr 2fr;
  `}
`;

export const SideBar = styled.div`
	grid-template-rows: 20vh;
	grid-template-areas: 'h';
	background: var(--fchisia-800);
	background-size: cover;
	width: 100%;
	height: 20vh;
	max-width: 100vw;
	position: fixed;

	header {
		padding-top: 5%;
		grid-area: h;

		.Logo {
			max-width: 100vw;
			width: 100%;
			height: 100%;
			display: flex;
			display: -webkit-flex;
			justify-content: center;
			align-items: center;
		}
		.ImgLogo {
			position: relative !important;
			max-width: 25%;
			max-height: 100%;
			height: auto;
		}
	}

	main {
		visibility: hidden;
	}

	footer {
		width: 100%;
		visibility: hidden;
		grid-area: f;
	}

	${breakpoint('desktop')`
	    display: grid;
      max-width: 34vw;
      grid-template-columns: 1fr;
      grid-template-areas:
      'h'
      'm'
      'f';
      grid-template-rows: 20vh 30vh 50vh;
      height: 100vh;
			position: relative;

      header  {
				padding-top: 10%;
				.Logo {
					width: 100%;
					height: 100%;
					display:flex;
					display: -webkit-flex; 
					justify-content: center;
					align-items: center;
				}

				.ImgLogo {
					position: relative !important;
					width: 80%;
					max-height: 100%;
					height: auto;
				}

      }
      main {
        visibility: visible;
        grid-area: m;
        align-self: center;
        padding: 1rem;

        h3 {
          color: var(--white);
          font-family: 'Raleway', sans-serif;
          font-weight: 400;
          font-size: 1.4rem;
        }

        p {
          color: var(--white);
          font-family: 'Raleway', sans-serif;
          font-weight: 400;
          font-size: 0.8rem;
          margin-top: 1rem;
        }
      }

      footer {
        .ImgWoman {
          visibility: visible;
					position: relative !important;
          grid-area: f;
					display:flex;
					display: -webkit-flex; 
					justify-content: center;
					align-items: center;
        }
        
      }
  `}
`;

export const Content = styled.div`
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 100vw;
	overflow-y: auto;
	height: 100vh;
	margin-top: 20vh;

	.ContentTitle {
		h1 {
			font-size: 1.8rem;
			font-weight: bold;
			text-align: center;
			padding: 1rem;
		}
	}

	main {
		align-items: center;
		padding: 2rem;

		p {
			text-align: left;
			padding-bottom: 1.3rem;

			a {
				font-weight: bold;
				color: var(--purple-900);
			}
		}

		form {
			display: flex;
			flex-direction: column;

			button {
				background: var(--pink-800);
				color: var(--white);
				padding: 0.5rem;
				margin-top: 1rem;
			}
		}

		.MainFooter {
			text-align: right;
			padding: 0.5rem;
			color: var(--purple-900);

			.Line {
				border: 0rem;
				background: var(--black);
				height: 1px;
				margin-top: 2rem;
			}

			.GoogleImg {
				background-size: contain;
				width: 100%;
				max-width: 100vw;
				height: 8vh;
			}
		}
	}

	footer {
		font-size: 0.7rem;
		text-align: center;
		margin-bottom: 1%;
	}

	${breakpoint('desktop')`

		margin-top: 0;

    .ContentContainer {
      margin-top: 13%;
      margin-left: 15rem;
      width: 40%;
    }

    main {
      padding: 1rem;

      .MainFooter {
        .GoogleImg {
          margin-top: 1rem;
          width: 100%;
          height: auto;
        }
      }
    }



  `}
`;

export const Input = styled.div`
	width: 100%;
	position: relative;
	margin: 1rem 0rem 2rem;
	margin-top: 1rem;

	label {
		color: var(--gray-300);
		margin-left: 1rem;
	}

	input,
	select {
		width: 100%;
		height: 2rem;
		border: solid var(--gray-300) 0.1rem;
		padding: 0.3rem;
		position: absolute;
		&:valid {
			border-color: var(--fchisia-800);
			padding-top: 1rem;
			padding-left: 2rem;
			+ label {
				background-color: var(--white);
				height: 0.7rem;
				position: absolute;
				top: -0.5rem;
				color: var(--fchisia-800);
				padding: 0.1rem;
				font-size: 0.6rem;
			}
		}
	}
	label {
		position: absolute;
		left: 0px;
		top: 0px;
		z-index: 1;
		padding: 5px;
	}
`;
