// Imported Components
import { Content, SectionTitle } from "../../../../GlobalStyle";
import { Project } from "./components/Project";

// Styled Components
import { ProjectsS } from "./style";

// Images
import PortfolioImg from "../../../../../src/assets/img/projects/portfolio.png";
import TodoImg from "../../../../../src/assets/img/projects/todo.png";
import CalculatorImg from "../../../../../src/assets/img/projects/calculator.png";

// Functional Component
export const Projects = () => {
	// Rendering
	return (
		<Content>
			<ProjectsS>
				<SectionTitle>Projects</SectionTitle>
				<Project
					description="Portfolio to show my knowledge, skills and tell a little about myself."
					img={PortfolioImg}
					link="https://caiquemorales.com/"
				/>
				<Project
					img={TodoImg}
					link="https://ts-todo-caique.netlify.app/"
					description="TODO application to write down tasks. Possessing the options, list, delete, update, fix and complete task."
					reversed
				/>
				<Project
					img={CalculatorImg}
					description="
          Calculator with basic operations, having addition, subtraction, multiplication and division. It has a system to overwrite the last operation if it is not the desired one."
					link="https://calculator-devcaique.netlify.app/"
				/>
			</ProjectsS>
		</Content>
	);
};
