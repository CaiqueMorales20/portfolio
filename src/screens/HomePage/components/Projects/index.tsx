// Imported Components
import { Content, SectionTitle } from "../../../../GlobalStyle";
import { Project } from "./components/Project";

// Styled Components
import { ProjectsS } from "./style";

// Data
import { ProjectsData } from "./data";

// Functional Component
export const Projects = () => {
	// Rendering
	return (
		<Content>
			<ProjectsS>
				<SectionTitle>Projects</SectionTitle>
				{ProjectsData.map((item, index) => {
					// Rendering
					return <Project {...item} key={index} />;
				})}
			</ProjectsS>
		</Content>
	);
};
