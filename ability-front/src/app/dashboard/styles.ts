'use client';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import Image from 'next/image';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	width: 100vw;
	height: 100vh;

	${breakpoint('desktop')`
    grid-template-columns: 1fr 2fr;
  `}
`;
