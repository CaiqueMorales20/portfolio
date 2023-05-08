// Imported Components
import {
	Description,
	DescriptionContainer,
	HeroS,
	Profession,
	TextContainer,
} from "./style";

// Functional Component
export const Hero = () => {
	// Rendering
	return (
		<HeroS>
			<TextContainer>
				<Profession>Desenvolvedor</Profession>
				<DescriptionContainer>
					<Description>
						Atualmente sigo desenvolvendo tanto sites como aplicativos, minha
						tecnologia principal na qual desenvolvo é o React.
					</Description>
				</DescriptionContainer>
			</TextContainer>
		</HeroS>
	);
};
