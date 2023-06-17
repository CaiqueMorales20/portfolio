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
						Currently I develop both websites and applications, my main
						technologys in which I develop are React and React native.
					</Description>
				</DescriptionContainer>
			</TextContainer>
		</HeroS>
	);
};
