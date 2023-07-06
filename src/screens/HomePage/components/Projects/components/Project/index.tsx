// Styled Components
import {
	ProjectS,
	Link,
	Image,
	TextContainer,
	Text,
	Icon,
	IconContainer,
	Techs,
} from "./style";

// Types
import { ProjectProps } from "./types";

// Image
import { FiGithub, FiSearch } from "react-icons/fi";

// Functional Component
export const Project = (props: ProjectProps) => {
	// Rendering
	return (
		<ProjectS reversed={props.reversed}>
			<Link href={props.link} target="_blank">
				<Image src={props.img} alt={props.title} />
			</Link>
			<TextContainer reversed={props.reversed}>
				<Text>{props.description}</Text>
				<Techs>{props.techs}</Techs>
				<IconContainer>
					<Icon href={props.github} target="_blank" title="See on Github">
						<FiGithub />
					</Icon>
					<Icon href={props.link} target="_blank" title="See live">
						<FiSearch />
					</Icon>
				</IconContainer>
			</TextContainer>
		</ProjectS>
	);
};
