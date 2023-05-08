// Styled Components
import { NavItemS, NavLink } from "../../style";

// Types
type NavItemProps = {
	link: string;
	text: string;
};

// Functional Component
export const NavItem = (props: NavItemProps) => {
	return (
		<NavItemS>
			<NavLink href={props.link}>{props.text}</NavLink>
		</NavItemS>
	);
};
