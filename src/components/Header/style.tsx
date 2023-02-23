// Imports
import styled from "styled-components";
import { cssVariables } from "../../GlobalStyle";

// Styled Components
export const HeaderS = styled.div`
	height: 6rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Logo = styled.h1`
	font-size: ${cssVariables.typography.fzLarger};
	font-weight: 400;
`;

export const Nav = styled.ul`
	display: flex;
	align-items: center;
	gap: 2em;
`;

export const NavItemS = styled.li`
	&::after {
		content: "";
		display: block;
		height: 1px;
		width: 0%;
		transition: all 0.4s;
		margin-top: 0.25em;
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
