// Styled Components
import { Image, Link, ProjectS, Text, TextContainer } from "./style";

// Types
import { ProjectProps } from "./types";

// Functional Component
export const Project = (props: ProjectProps) => {
	// Rendering
	return (
		<ProjectS reversed={props.reversed}>
			<Link href={props.link} target="_blank">
				<Image src={props.img} />
			</Link>
			<TextContainer reversed={props.reversed}>
				<Text>{props.description}</Text>
			</TextContainer>
		</ProjectS>
	);
};
