// Imports
import styled from "styled-components";
import { cssVariables } from "../../GlobalStyle";

// Styled Components
export const HomePageS = styled.div`
	height: calc(100vh - 6rem);
	margin-top: -6rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TextContainer = styled.div`
	width: 80%;
`;

export const Profession = styled.h1`
	letter-spacing: 2px;
	font-size: ${cssVariables.typography.fzLargest};
	font-weight: 700;
	color: #96d9ed;
`;

export const DescriptionContainer = styled.div`
	width: min(30rem, 90%);
`;

export const Description = styled.p`
	font-size: ${cssVariables.typography.fzNormal};
`;
