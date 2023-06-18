// Imports
import styled from "styled-components";

// Styled Components
export const ModalS = styled.div`
	position: fixed;
	inset: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.514);
	z-index: 99999999;
	display: grid;
	place-items: center;
`;

export const ModalContent = styled.div`
	width: min(40rem, 90%);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5em;
	padding: 2em;
	background-color: var(--clrPrimary700);
`;

export const Text = styled.h2`
	text-align: center;
	color: var(--clrPrimary400);
	font-size: var(--fzNormal);
	font-weight: 400;
`;
