// Imports
import styled from "styled-components";
import { Content, cssVariables } from "../../../../GlobalStyle";

// Styled Components
export const HeroS = styled.div`
	height: calc(100vh - 6rem);
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TextContainer = styled(Content)`
	margin-top: -6rem;
`;

export const Profession = styled.h1`
	letter-spacing: 2px;
	font-size: ${cssVariables.typography.fzLargest};
	font-weight: 900;
	color: ${cssVariables.color.clrText};
`;

export const DescriptionContainer = styled.div`
	width: min(30rem, 90%);
`;

export const Description = styled.p`
	font-size: ${cssVariables.typography.fzNormal};
	color: ${cssVariables.color.clrText};
`;
