// Imported Components
import { Content, SectionTitle } from "../../../../GlobalStyle";
import { Project } from "./components/Project";
import { ProjectsS } from "./style";

// Functional Component
export const Projects = () => {
	// Rendering
	return (
		<Content>
			<ProjectsS>
				<SectionTitle>Projects</SectionTitle>
				<Project />
				<Project reversed />
				<Project />
			</ProjectsS>
		</Content>
	);
};
