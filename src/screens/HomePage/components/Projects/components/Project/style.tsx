// Imports
import styled from "styled-components";

// Types
type ProjectProps = {
	reversed?: boolean;
};

// Styled Components
export const ProjectS = styled.div<ProjectProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 1080px) {
		flex-direction: column;
	}

	@media screen and (min-width: 1080px) {
		&:nth-child(2n + 2) {
			flex-direction: row-reverse;
		}

		& > *:nth-child(2n + 2) {
			margin-right: -5%;
		}
	}
`;

export const TextContainer = styled.div<ProjectProps>`
	background-color: var(--clrPrimary900);
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	flex-basis: 60%;
	padding: 2em;
	z-index: 4;
	margin-left: -5%;
	@media screen and (max-width: 1080px) {
		margin-inline: 0;
		flex-basis: 100%;
	}
`;

export const Text = styled.p`
	font-size: var(--fzNormal);
	color: var(--clrPrimary400);
`;

export const Link = styled.a`
	width: 100%;
	height: 100%;
	margin-bottom: -0.5rem;
`;

export const Image = styled.img`
	cursor: pointer;
	opacity: 0.7;

	&:hover {
		opacity: 1;
	}
`;
