// Imported Components
import { Content, SectionTitle } from "../../../../GlobalStyle";
import { Element } from "react-scroll";

// Styled Components
import { AboutS, TextContainer, Text, ImageContainer, Image } from "./style";

// Image
import CaiqueImg from "../../../../assets/img/about/about.jpg";

// Functional Component
export const About = () => {
	// Rendering
	return (
		<Element name="about">
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
						<Text>
							In addition, I take great pride in applying clean code principles
							to my development process, particularly in CSS. I believe that
							writing clean, organized, and maintainable code is crucial for
							building scalable and efficient applications. Furthermore, I
							follow a mobile-first approach when crafting my designs, ensuring
							that the user experience remains seamless across various devices
							and screen sizes.
						</Text>
					</TextContainer>
					<ImageContainer>
						<Image src={CaiqueImg} alt="Caique Morales" />
					</ImageContainer>
				</AboutS>
			</Content>
		</Element>
	);
};
