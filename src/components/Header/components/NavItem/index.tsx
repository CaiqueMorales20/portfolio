// Styled Components
import { NavItemS, NavLink } from "./style";

// Types
type NavItemProps = {
	link: string;
	text: string;
};

// Functional Component
export const NavItem = (props: NavItemProps) => {
	// Rendering
	return (
		<NavItemS>
			<NavLink to={props.link} offset={-100} duration={500}>
				{props.text}
			</NavLink>
		</NavItemS>
	);
};
