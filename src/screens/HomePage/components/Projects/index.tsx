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
				<Project link="https://caiquemorales.com/" />
				<Project link="https://caiquemorales.com/" reversed />
				<Project link="https://caiquemorales.com/" />
			</ProjectsS>
		</Content>
	);
};
