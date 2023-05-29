// Imports
import styled, { css } from "styled-components";

// Styled Components
export const ButtonS = styled.button`
	padding: 1em 2em;
	border: 1px solid var(--clrText);
	color: var(--clrText);
	font-weight: 700;
	position: relative;
	transition: all 0.2s ease-in-out;
	font-size: var(--fzSmaller);
	cursor: pointer;

	&:hover {
		color: var(--clrPrimary);
		z-index: 1;
	}

	&::after {
		content: "";
		position: absolute;
		display: block;
		background-color: var(--clrText);
		width: 0%;
		height: 100%;
		inset: 0;
		z-index: -1;
	}

	&:hover::after {
		width: 100%;
	}
`;
