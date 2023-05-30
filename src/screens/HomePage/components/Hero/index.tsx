// Imported Components
import {
	HeroS,
	TextContainer,
	Profession,
	DescriptionContainer,
	Description,
} from "./style";

// Functional Component
export const Hero = () => {
	// Rendering
	return (
		<HeroS>
			<TextContainer>
				<Profession>Developer</Profession>
				<DescriptionContainer>
					<Description>
						Currently I continue to develop both websites and applications, my
						main technology in which I develop is React.
					</Description>
				</DescriptionContainer>
			</TextContainer>
		</HeroS>
	);
};
