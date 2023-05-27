// Imports
import styled, { css } from "styled-components";
import { cssVariables } from "../../GlobalStyle";

// Styled Components
export const ButtonS = styled.button`
	padding: 1em 2em;
	border: 1px solid ${cssVariables.color.clrText};
	color: ${cssVariables.color.clrText};
	font-weight: 700;
	position: relative;
	transition: all 0.2s ease-in-out;
	font-size: ${cssVariables.typography.fzSmaller};
	cursor: pointer;

	&:hover {
		color: ${cssVariables.color.clrPrimary};
		z-index: 1;
	}

	&::after {
		content: "";
		position: absolute;
		display: block;
		background-color: ${cssVariables.color.clrText};
		width: 0%;
		height: 100%;
		inset: 0;
		z-index: -1;
	}

	&:hover::after {
		width: 100%;
	}
`;
