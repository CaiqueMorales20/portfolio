// Imports
import styled from "styled-components";

// Styled Components
export const AboutS = styled.div`
	display: flex;
	gap: 3rem;

	& > * {
		flex-basis: 100%;
	}

	@media screen and (max-width: 1080px) {
		flex-direction: column;
	}
`;

export const AboutText = styled.p`
	font-size: var(--fzNormal);
	color: var(--clrPrimary500600);
	text-align: justify;
`;

export const ImageContainer = styled.div``;

export const Image = styled.img``;
