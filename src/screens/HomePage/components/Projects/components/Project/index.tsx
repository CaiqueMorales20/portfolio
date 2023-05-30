// Styled Components
import { ProjectS, Link, Image, TextContainer, Text } from "./style";

// Types
import { ProjectProps } from "./types";

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
			</TextContainer>
		</ProjectS>
	);
};
