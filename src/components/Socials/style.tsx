// Imports
import styled from "styled-components";
import { cssVariables } from "../../GlobalStyle";

// Styled Components
export const LineContainer = styled.div`
	position: fixed;
	bottom: 0;
	width: min(1440px, 90vw);
	display: flex;
	margin-inline: auto;
	justify-content: space-between;
`;

export const LineS = styled.div`
	writing-mode: vertical-lr;
`;

export const Text = styled.p`
	font-size: ${cssVariables.typography.fzNormal};
`;
