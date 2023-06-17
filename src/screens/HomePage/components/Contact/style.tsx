// Imports
import styled from "styled-components";
import { Button } from "../../../../components/Button";

// Styled Components
export const ContactS = styled.section`
	display: flex;
	flex-direction: column;
	gap: 2em;
`;

export const FormS = styled.form`
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
	background-color: var(--clrPrimary700);

	&::placeholder {
		color: var(--clrPlaceholder);
	}
`;

export const TextAreaS = styled.textarea`
	background-color: var(--clrPrimary700);
	height: 10rem;
	padding: 1em;
	resize: none;
	grid-column: span 2;

	&::placeholder {
		color: var(--clrPlaceholder);
	}
`;

export const SubmitButton = styled.input`
	--clr-normal: #231d3a;

	padding: 1.25em 3em;
	border: 1px solid var(--clrPrimary400);
	color: var(--clrPrimary400);
	font-weight: 700;
	position: relative;
	transition: all 0.2s ease-in-out;
	font-size: var(--fzSmaller);
	cursor: pointer;

	&:hover {
		color: var(--clrPrimary900);
		background-color: var(--clrPrimary400);
		z-index: 1;
	}
`;
