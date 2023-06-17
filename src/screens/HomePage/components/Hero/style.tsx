// Imports
import styled from "styled-components";
import { Content } from "../../../../GlobalStyle";

// Styled Components
export const HeroS = styled.div`
	height: calc(100vh - 6rem);
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TextContainer = styled(Content)`
	margin-top: -6rem;
	padding-bottom: 0;
`;

export const Profession = styled.h1`
	letter-spacing: 2px;
	font-size: var(--fzLargest);
	font-weight: 900;
	color: var(--clrPrimary);
`;

export const DescriptionContainer = styled.div`
	width: min(35rem, 90%);
`;

export const Description = styled.p`
	font-size: var(--fzNormal);
	color: var(--clrPrimary400);
`;
