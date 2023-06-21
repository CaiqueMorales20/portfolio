// Imports
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

// Imported Components
import { Content, SectionTitle } from "../../../../GlobalStyle";
import { Element } from "react-scroll";

// Styled Components
import { AboutS, TextContainer, Text, ImageContainer, Image } from "./style";

// Image
import CaiqueImg from "../../../../assets/img/about/about.jpg";

// Animations
const AboutAnimation = {
	visible: {
		opacity: 1,
		x: 0,
	},
	hidden: { opacity: 0, x: "50vw" },
};

// Functional Component
export const About = () => {
	// Variables
	const { ref, inView } = useInView({
		threshold: 0.05,
		triggerOnce: true,
	});

	// Rendering
	return (
		<Element name="about">
			<div ref={ref}>
				<Content
					as={motion.div}
					animate={
						inView ? { x: "0vw", opacity: 1 } : { x: "50vw", opacity: 0 }
					}
				>
					<SectionTitle>About</SectionTitle>
					<AboutS>
						<TextContainer>
							<Text>
								My name is Caique Morales, and I have been a developer since
								2019, specializing in HTML, CSS, JavaScript, React, and React
								Native. I have been honing my skills in React, which has become
								the primary technology for both my personal and professional
								projects.
							</Text>
							<Text>
								I also have a deep passion for CSS and its ability to offer
								responsiveness and captivating visual elements. I can
								confidently say that I am genuinely passionate about it.
							</Text>
						</TextContainer>
						<ImageContainer>
							<Image src={CaiqueImg} alt="Caique Morales" />
						</ImageContainer>
					</AboutS>
				</Content>
			</div>
		</Element>
	);
};
