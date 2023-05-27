import styled, { css } from "styled-components";
import { cssVariables } from "../../../../../../GlobalStyle";

// Types
import { ProjectProps } from "./types";

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
	padding: 2em;
	z-index: 4;
	${(props) =>
		props.reversed
			? css`
					margin-right: -5%;
			  `
			: css`
					margin-left: -5%;
			  `}

	@media screen and (max-width: 1080px) {
		margin-inline: 0;
	}
`;

export const Text = styled.p`
	font-size: ${cssVariables.typography.fzSmall};
`;

export const Image = styled.img`
	opacity: 0.5;
	cursor: pointer;

	&:hover {
		opacity: 1;
	}
`;
