// Imported Components
import {
	Description,
	DescriptionContainer,
	HomePageS,
	Profession,
	TextContainer,
} from "./style";

// Functional Component
export const HomePage = () => {
	// Rendering
	return (
		<HomePageS>
			<TextContainer>
				<Profession>Desenvolvedor Full-Stack</Profession>
				<DescriptionContainer>
					<Description>
						Atualmente sigo desenvolvendo tanto sites como aplicativos, minha
						tecnologia principal na qual desenvolvo é o React.
					</Description>
				</DescriptionContainer>
			</TextContainer>
		</HomePageS>
	);
};
