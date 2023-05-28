import styled, { css } from "styled-components";
import { cssVariables } from "../../../../../../GlobalStyle";

// Types
type ProjectProps = {
	reversed?: boolean;
};

// Styled Components
export const ProjectS = styled.div<ProjectProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: ${(props) => props.reversed && "row-reverse"};

	@media screen and (max-width: 1080px) {
		flex-direction: column;
	}
`;

export const TextContainer = styled.div<ProjectProps>`
	background-color: #292638;
	flex-basis: 60%;
	padding: 2em;
	z-index: 4;
	@media screen and (max-width: 1080px) {
		margin-inline: 0;
		flex-basis: 100%;
	}

	${(props) =>
		props.reversed
			? css`
					margin-right: -5%;
			  `
			: css`
					margin-left: -5%;/ 
			  `}
`;

export const Text = styled.p`
	font-size: ${cssVariables.typography.fzSmall};
`;

export const Link = styled.a`
	width: 100%;
	height: 100%;
	margin-bottom: -0.5rem;
`;

export const Image = styled.img`
	opacity: 0.5;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		opacity: 1;
	}
`;
