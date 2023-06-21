// Imported Components
import { motion } from "framer-motion";

// Styled Components
import {
	HeroS,
	TextContainer,
	Profession,
	DescriptionContainer,
	Description,
} from "./style";

// Animations
const variants = {
	visible: (index: any) => ({
		opacity: 1,
		transition: {
			delay: index * 0.02,
		},
	}),
	hidden: { opacity: 0 },
};
const variants2 = {
	visible: (index: any) => ({
		opacity: 1,
		transition: {
			delay: index * 0.03,
		},
	}),
	hidden: { opacity: 0 },
};

// Functional Component
export const Hero = () => {
	// Text
	const profession = "Developer";
	const filtredProfession = profession.split("");
	const description =
		"Currently I develop both websites and applications, my main technologys in which I develop are React and React native.";
	const filtredDescription = description.split("");

	// Rendering
	return (
		<HeroS>
			<TextContainer>
				<Profession>
					{filtredProfession.map((item, index: any) => {
						return (
							<motion.span
								custom={index}
								initial="hidden"
								animate="visible"
								variants={variants}
							>
								{item}
							</motion.span>
						);
					})}
				</Profession>
				<DescriptionContainer>
					<Description>
						{filtredDescription.map((item, index: any) => {
							return (
								<motion.span
									custom={index}
									initial="hidden"
									animate="visible"
									variants={variants}
								>
									{item}
								</motion.span>
							);
						})}
					</Description>
				</DescriptionContainer>
			</TextContainer>
		</HeroS>
	);
};
