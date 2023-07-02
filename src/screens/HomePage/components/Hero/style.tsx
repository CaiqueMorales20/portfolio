// Imports
import styled from "styled-components";

// Imported Components
import { Content } from "../../../../GlobalStyle";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

// Styled Components
export const HeroS = styled(motion.div)`
	height: calc(100vh - 6rem);
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TextContainer = styled(Content)`
	margin-top: -6rem;
	padding-bottom: 0;
	display: flex;
	flex-direction: column;
	gap: 2em;
`;

export const Profession = styled(motion.h1)`
	letter-spacing: 2px;
	font-size: var(--fzLargest);
	font-weight: 900;
	color: var(--clrPrimary);
	line-height: 1;
	margin-bottom: -0.5em;
`;

export const DescriptionContainer = styled.div`
	width: min(35rem, 90%);
`;

export const Description = styled.p`
	font-size: var(--fzNormal);
	color: var(--clrPrimary400);
`;

export const LinkButton = styled(Link)`
	width: max-content;
	padding: 1em 2em;
	border: 1px solid var(--clrPrimary400);
	color: var(--clrPrimary400);
	font-weight: 700;
	position: relative;
	transition: all 0.2s ease-in-out;
	font-size: var(--fzSmaller);
	cursor: pointer;

	&:hover {
		color: var(--clrPrimary900);
		z-index: 1;
	}

	&::after {
		content: "";
		position: absolute;
		display: block;
		background-color: var(--clrPrimary400);
		width: 0%;
		height: 100%;
		inset: 0;
		z-index: -1;
	}

	&:hover::after {
		width: 100%;
	}
`;
