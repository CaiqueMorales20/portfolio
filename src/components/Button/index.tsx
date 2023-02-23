import { ButtonS } from "./style";

// Types
type ButtonProps = {
	text: string;
};

// Functional Component
export const Button = (props: ButtonProps) => {
	return <ButtonS>{props.text}</ButtonS>;
};
