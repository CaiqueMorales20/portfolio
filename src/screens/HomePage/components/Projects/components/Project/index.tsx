// Styled Components
import { Image, Link, ProjectS, Text, TextContainer } from "./style";

// Images
import PortfolioImg from "../../../../../../assets/img/projects/portfolio.png";
import { ProjectProps } from "./types";

// Functional Component
export const Project = (props: ProjectProps) => {
	// Rendering
	return (
		<ProjectS reversed={props.reversed}>
			<Link href={props.link} target="_blank">
				<Image src={PortfolioImg} />
			</Link>
			<TextContainer reversed={props.reversed}>
				<Text>
					Portfolio para mostrar meus conhecimentos, habilidades e falar um
					pouco sobre mim mesmo. Portfolio para mostrar meus conhecimentos,
					habilidades e falar um pouco sobre mim mesmo.
				</Text>
			</TextContainer>
		</ProjectS>
	);
};
