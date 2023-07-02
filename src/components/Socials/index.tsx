// Styled Components
import { useCopy } from "../../utils/useCopy";
import { Icon, LineContainer, LineS, Email } from "./style";

// Icons
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

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
	// Functions
	const [value, copy] = useCopy();

	// Rendering
	return (
		<LineContainer>
			<Line>
				<Icon href="https://github.com/CaiqueMorales20" target="_blank">
					<FiGithub />
				</Icon>
				<Icon
					href="https://www.linkedin.com/in/caique-morales/"
					target="_blank"
				>
					<FiLinkedin />
				</Icon>
				<Icon href="https://www.instagram.com/caique_brad/" target="_blank">
					<FiInstagram />
				</Icon>
			</Line>
			<Line>
				<Email
					onClick={() => copy("caiquemorales20@gmail.com")}
					title={value ? "Email copied" : "Copy email"}
				>
					caiquemorales20@gmail.com
				</Email>
			</Line>
		</LineContainer>
	);
};
