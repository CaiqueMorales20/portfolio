import styled from "styled-components";
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
