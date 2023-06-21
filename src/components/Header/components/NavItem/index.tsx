// Imports
import { useContext } from "react";

// Styled Components
import { NavItemS, NavLink } from "./style";

// Types
type NavItemProps = {
	link: string;
	text: string;
};

// Context
import { HeaderContext } from "../..";
import { HeaderContextProps } from "../../types";

// Functional Component
export const NavItem = (props: NavItemProps) => {
	// Variables
	const { setMobileMenu } = useContext(HeaderContext) as HeaderContextProps;

	// Rendering
	return (
		<NavItemS
			onClick={() => setMobileMenu(false)}
			to={props.link}
			offset={-100}
			duration={500}
		>
			<NavLink>{props.text}</NavLink>
		</NavItemS>
	);
};
