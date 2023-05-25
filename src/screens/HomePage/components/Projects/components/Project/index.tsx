// Styled Components
import { Image, ProjectS, TextContainer } from "./style";

// Images
import PortfolioImg from "../../../../../../assets/img/projects/portfolio.png";

// Functional Component
export const Project = () => {
	// Rendering
	return (
		<ProjectS>
			<Image src={PortfolioImg} />
			<TextContainer>
				<p>
					Portfolio para mostrar meus conhecimentos, habilidades e falar um
					pouco sobre mim mesmo. Portfolio para mostrar meus conhecimentos,
					habilidades e falar um pouco sobre mim mesmo.
				</p>
			</TextContainer>
		</ProjectS>
	);
};
