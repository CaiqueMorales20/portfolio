// Imports
import styled from "styled-components";
import { Button } from "../../../../components/Button";

// Styled Components
export const ContactS = styled.section`
	display: flex;
	flex-direction: column;
	gap: 2em;
`;

export const FormS = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1.5em;
	width: 100%;

	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`;

export const InputS = styled.input`
	height: 4rem;
	display: flex;
	align-items: center;
	padding: 1em;
	color: #ffffff;
	background-color: #231d3a;
`;

export const TextAreaS = styled.textarea`
	background-color: #231d3a;
	height: 10rem;
	padding: 1em;
	resize: none;
	grid-column: span 2;
`;

export const SubmitButton = styled.button`
	--clr-normal: #231d3a;

	padding: 1.25em 3em;
	border: 1px solid var(--clrText);
	color: var(--clrText);
	font-weight: 700;
	position: relative;
	transition: all 0.2s ease-in-out;
	font-size: var(--fzSmaller);
	cursor: pointer;

	&:hover {
		color: var(--clrPrimary);
		z-index: 1;
	}

	&::after {
		content: "";
		position: absolute;
		display: block;
		background-color: var(--clrText);
		width: 0%;
		height: 100%;
		inset: 0;
		z-index: -1;
	}

	&:hover::after {
		width: 100%;
	}
`;
