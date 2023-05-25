import styled from "styled-components";
import { cssVariables } from "../../../../../../GlobalStyle";

// Styled Components
export const ProjectS = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TextContainer = styled.div`
	background-color: #303030;
	padding: 2em;
	margin-left: -5%;
	z-index: 4;
`;

export const Text = styled.p`
	font-size: ${cssVariables.typography.fzSmall};
`;

export const Image = styled.img``;
