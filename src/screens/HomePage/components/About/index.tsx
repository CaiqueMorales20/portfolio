// Imported Components
import { Content, SectionTitle } from "../../../../GlobalStyle";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

// Styled Components
import { AboutS, TextContainer, Text, ImageContainer, Image } from "./style";

// Image
import CaiqueImg from "../../../../assets/img/about/about.jpg";

// Functional Component
export const About = () => {
	// Variables
	const { ref, inView, entry } = useInView({
		threshold: 0.25,
	});

	// Rendering
	return (
		<Element name="about" ref={ref}>
			<Content as={motion.div} animate={inView ? { x: "0vw" } : { x: "150vw" }}>
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
						<Image src={CaiqueImg} alt="Caique Morales" />
					</ImageContainer>
				</AboutS>
			</Content>
		</Element>
	);
};
