// Imported Components
import { Content, SectionTitle } from "../../../../GlobalStyle";

// Image
import Fireship from "../../../../assets/img/fireship.png";
import { AboutS, AboutText, Image, ImageContainer } from "./style";

// Functional Component
export const About = () => {
	// Rendering
	return (
		<Content>
			<SectionTitle>About</SectionTitle>
			<AboutS>
				<AboutText>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero ratione
					delectus animi et nobis eum praesentium assumenda libero esse saepe
					sit omnis aliquid, optio laboriosam autem, consequatur repudiandae
					voluptate nisi?
					<br />
					<br />
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero ratione
					delectus animi et nobis eum praesentium assumenda libero esse saepe
					sit omnis aliquid, optio laboriosam autem, consequatur repudiandae
					voluptate nisi?
				</AboutText>
				<ImageContainer>
					<Image src={Fireship} alt="Fireship" />
				</ImageContainer>
			</AboutS>
		</Content>
	);
};
