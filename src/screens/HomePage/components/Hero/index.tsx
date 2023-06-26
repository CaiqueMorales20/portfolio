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

// Functional Component
export const Hero = () => {
	// Text
	const profession = "Developer";
	const filtredProfession = profession.split("");
	const description =
		"Currently I develop both websites and applications, my main technologys in which I develop are React and React native.";
	const filtredDescription = description.split("");

	// Animations
	const profession_animation = {
		visible: (index: any) => ({
			opacity: 1,
			transition: {
				delay: index * 0.04,
			},
		}),
		hidden: { opacity: 0 },
	};

	const description_animation = {
		visible: (index: any) => ({
			opacity: 1,
			transition: {
				delay: index * 0.01 + profession.length * 0.04,
			},
		}),
		hidden: { opacity: 0 },
	};

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
								variants={profession_animation}
								key={index}
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
									variants={description_animation}
									key={index}
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
