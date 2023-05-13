// Imports
import styled from "styled-components";
import { cssVariables } from "../../../../GlobalStyle";

// Styled Components
export const AboutS = styled.div`
	margin-top: 4rem;
	display: flex;
	gap: 3rem;

	& > * {
		flex-basis: 100%;
	}
`;

export const AboutText = styled.p`
	font-size: ${cssVariables.typography.fzNormal};
	color: ${cssVariables.color.clrText600};
	text-align: justify;
`;

export const ImageContainer = styled.div``;

export const Image = styled.img``;
