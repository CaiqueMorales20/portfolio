// Imports
import styled from "styled-components";

// Styled Components
export const LineContainer = styled.div`
	position: fixed;
	bottom: 0;
	width: min(1800px, 90vw);
	display: flex;
	margin-inline: auto;
	justify-content: space-between;
	align-items: flex-end;
	z-index: 0;
`;

export const LineS = styled.div`
	writing-mode: vertical-lr;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1em;
	z-index: 2;

	&::after {
		content: "";
		display: block;
		height: 6rem;
		width: 1px;
		background-color: var(--clrText);
	}
`;

export const Icon = styled.a`
	color: var(--clrText);

	& > * {
		font-size: var(--fzNormal);
	}

	& > *:hover {
		transform: translateY(-0.5rem);
	}
`;

export const Email = styled.a`
	font-size: var(--fzSmall);
	color: var(--clrText);
	cursor: pointer;

	&:hover {
		text-decoration: underline;
		transform: translateY(-0.5rem);
	}
`;
