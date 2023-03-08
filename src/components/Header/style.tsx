// Imports
import styled from "styled-components";
import { cssVariables } from "../../GlobalStyle";

// Types
type NavProps = {
	opened: boolean;
};

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

export const Nav = styled.ul<NavProps>`
	display: flex;
	align-items: center;
	gap: 2em;

	@media screen and (max-width: 768px) {
		position: absolute;
		flex-direction: column;
		right: 0;
		bottom: 0;
		top: 0;
		width: 70vw;
		justify-content: center;
		background-color: #0f4657;
		transition: all 0.4s ease-in-out;
		transform: ${(props) =>
			props.opened ? "translateX(0%)" : "translateX(100%)"};
	}
`;

export const NavItemS = styled.li`
	position: relative;

	&::after {
		content: "";
		display: block;
		height: 1px;
		position: absolute;
		width: 0%;
		bottom: -0.5em;
		transition: all 0.4s;
		background-color: ${cssVariables.color.clrText};
	}
	&:hover::after {
		width: 100%;
	}
`;

export const NavLink = styled.a`
	color: ${cssVariables.color.clrText};
	font-size: ${cssVariables.typography.fzSmall};
	font-weight: 700;
`;

export const HamburgerBtnS = styled.span`
	cursor: pointer;
	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export const HamburguerNav = styled.div`
	position: absolute;
	height: 6rem;
	top: 0;
	right: 5vw;
	display: grid;
	align-items: center;
	@media screen and (min-width: 768px) {
		display: none;
	}
`;
