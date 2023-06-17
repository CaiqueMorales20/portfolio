// Imports
import styled from "styled-components";

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

export const Teste = styled.div`
	margin-top: 40em;
	background-color: red;
	height: 10rem;
`;
