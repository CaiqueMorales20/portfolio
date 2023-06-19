// Imported Components
import { Content, SectionTitle } from "../../../../GlobalStyle";
import { Project } from "./components/Project";
import { Element } from "react-scroll";

// Styled Components
import { ProjectsS } from "./style";

// Data
import { ProjectsData } from "./data";

// Functional Component
export const Projects = () => {
	// Rendering
	return (
		<Element name="projects">
			<Content>
				<SectionTitle>Projects</SectionTitle>
				<ProjectsS>
					{ProjectsData.map((item, index) => {
						// Rendering
						return <Project {...item} key={index} />;
					})}
				</ProjectsS>
			</Content>
		</Element>
	);
};
