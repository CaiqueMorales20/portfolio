// Imported Components
import { Content, SectionTitle } from "../../../../GlobalStyle";

// Image
import Fireship from "../../../../assets/img/about/about.jpg";

// Styled Components
import { AboutS, TextContainer, Text, ImageContainer, Image } from "./style";

// Functional Component
export const About = () => {
	// Rendering
	return (
		<Content>
			<SectionTitle>About</SectionTitle>
			<AboutS>
				<TextContainer>
					<Text>
						My name is Caique Morales, and I have been a developer since 2019,
						specializing in HTML, CSS, JavaScript, React, and React Native. I
						have been honing my skills in React, which has become the primary
						technology for both my personal and professional projects.
					</Text>
					<Text>
						I also have a deep passion for CSS and its ability to offer
						responsiveness and captivating visual elements. I can confidently
						say that I am genuinely passionate about it.
					</Text>
				</TextContainer>
				<ImageContainer>
					<Image src={Fireship} alt="Fireship" />
				</ImageContainer>
			</AboutS>
		</Content>
	);
};
