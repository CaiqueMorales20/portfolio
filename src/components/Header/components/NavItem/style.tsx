// Imports
import styled from "styled-components";
import { cssVariables } from "../../../../GlobalStyle";

// Styled Components
export const NavItemS = styled.li`
	position: relative;

	&::after {
		content: "";
		display: block;
		height: 1px;
		position: absolute;
		width: 0%;
		bottom: -0.5em;
		background-color: ${cssVariables.color.clrText};
	}
	&:hover::after {
		width: 100%;
	}
`;

export const NavLink = styled.a`
	color: ${cssVariables.color.clrText};
	font-size: ${cssVariables.typography.fzSmall};
`;
