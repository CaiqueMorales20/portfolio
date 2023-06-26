// Imports
import styled from "styled-components";
import { motion } from "framer-motion";

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

export const Logo = styled(motion.h1)`
	font-size: var(--fzLarger);
	color: var(--clrPrimary400);
	font-weight: 400;
	cursor: pointer;
`;

export const Nav = styled.ul<NavProps>`
	display: flex;
	align-items: center;
	gap: 2em;
	z-index: 2;

	@media screen and (max-width: 768px) {
		position: fixed;
		flex-direction: column;
		right: 0;
		bottom: 0;
		top: 0;
		width: 70vw;
		justify-content: center;
		background-color: var(--clrPrimary950);
		z-index: 999;
		transform: ${(props) =>
			props.opened ? "translateX(0%)" : "translateX(100%)"};
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
