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
	gap: 1em;

	&::after {
		content: "";
		display: block;
		height: 10rem;
		width: 2px;
		background-color: #ffffff;
	}
`;

export const Text = styled.p`
	font-size: ${cssVariables.typography.fzNormal};
`;
