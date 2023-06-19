// Imports
import styled from "styled-components";

// Imported Components
import { Link } from "react-scroll";

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
		background-color: var(--clrPrimary400);
	}
	&:hover::after {
		width: 100%;
	}
`;

export const NavLink = styled.a`
	color: var(--clrPrimary400);
	font-size: var(--fzSmall);
`;
