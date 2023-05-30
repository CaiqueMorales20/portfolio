// Imported Components
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

// Functional Component
export const HomePage = () => {
	// Rendering
	return (
		<>
			<Hero />
			<About />
			<Projects />
			<Contact />
		</>
	);
};
