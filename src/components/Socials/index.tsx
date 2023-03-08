import { LineContainer, LineS } from "./style";

// Types
type LineProps = {
	children: React.ReactNode;
};

// Internal Component
const Line = ({ children }: LineProps) => {
	// Rendering
	return <LineS>{children}</LineS>;
};

// Functional Component
export const Socials = () => {
	return (
		<LineContainer>
			<Line>Linha Esquerda</Line>
			<Line>Linha Direita</Line>
		</LineContainer>
	);
};
