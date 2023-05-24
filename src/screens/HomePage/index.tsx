// Imported Components
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects/Projects";

// Functional Component
export const HomePage = () => {
	// Rendering
	return (
		<>
			<Hero />
			<About />
			<Projects />
		</>
	);
};
