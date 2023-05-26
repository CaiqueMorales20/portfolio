// Styled Components
import { Image, ProjectS, TextContainer } from "./style";

// Images
import PortfolioImg from "../../../../../../assets/img/projects/portfolio.png";
import { ProjectProps } from "./types";

// Functional Component
export const Project = (props: ProjectProps) => {
	// Rendering
	return (
		<ProjectS reversed={props.reversed}>
			<Image src={PortfolioImg} />
			<TextContainer reversed={props.reversed}>
				<p>
					Portfolio para mostrar meus conhecimentos, habilidades e falar um
					pouco sobre mim mesmo. Portfolio para mostrar meus conhecimentos,
					habilidades e falar um pouco sobre mim mesmo.
				</p>
			</TextContainer>
		</ProjectS>
	);
};
