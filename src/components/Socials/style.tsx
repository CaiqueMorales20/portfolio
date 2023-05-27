// Imports
import styled from "styled-components";
import { cssVariables } from "../../GlobalStyle";

// Styled Components
export const LineContainer = styled.div`
	position: fixed;
	bottom: 0;
	width: min(1800px, 90vw);
	display: flex;
	margin-inline: auto;
	justify-content: space-between;
	align-items: flex-end;
`;

export const LineS = styled.div`
	writing-mode: vertical-lr;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1em;

	&::after {
		content: "";
		display: block;
		height: 6rem;
		width: 1px;
		background-color: ${cssVariables.color.clrText};
	}
`;

export const Icon = styled.a`
	color: ${cssVariables.color.clrText};

	& > * {
		font-size: ${cssVariables.typography.fzNormal};
	}

	& > *:hover {
		transform: translateY(-0.5rem);
	}
`;

export const Email = styled.a`
	font-size: ${cssVariables.typography.fzSmall};
	color: ${cssVariables.color.clrText};
	cursor: pointer;

	&:hover {
		text-decoration: underline;
		transform: translateY(-0.5rem);
	}
`;
