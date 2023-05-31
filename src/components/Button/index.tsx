import { ButtonS } from "./style";

// Types
type ButtonProps = {
	text: string;
	onClick?: () => void;
};

// Functional Component
export const Button = (props: ButtonProps) => {
	return <ButtonS onClick={props.onClick}>{props.text}</ButtonS>;
};
