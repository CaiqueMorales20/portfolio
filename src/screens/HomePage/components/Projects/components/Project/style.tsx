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
`;

export const TextContainer = styled.div<ProjectProps>`
	background-color: #303030;
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
`;

export const Text = styled.p`
	font-size: ${cssVariables.typography.fzSmall};
`;

export const Image = styled.img``;
