import styled from 'styled-components';

import Image from 'next/image';

export const Icon = styled(Image)`
	max-width: 100%;
	height: auto;
	background-size: cover;
`;

export const CHART_DESKTOP = '52vw';
export const CHART_TABLET = '80vw';
export const CHART_MOBILE = '70vw';

export const Chart = styled.div`
	width: ${CHART_MOBILE};
	height: 20vh;
	background-color: var(--gray-050);
	border: 1px solid var(--gray-300);

	@media (min-width: 740px) {
		width: ${CHART_TABLET};
		height: 27vh;
		margin-top: 1vh;

		.chart-content {
			width: 80%;
			margin-left: 10%;
		}
	}

	@media (min-width: 1024px) {
		width: ${CHART_DESKTOP};
		height: 20vh;
		margin-top: 1vh;

		.chart-content {
			width: 25vw;
			height: 20vh;
			margin-left: 20%;
			object-fit: contain;
		}
	}
`;
