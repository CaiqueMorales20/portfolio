// Imported Components
import { Button } from "../Button";

// Styled Components
import { HamburgerBtn, HeaderS, Logo, Nav, NavItemS, NavLink } from "./style";

// Types
type NavItemProps = {
	link: string;
	text: string;
};

// Internal Component
export const NavItem = (props: NavItemProps) => {
	return (
		<NavItemS>
			<NavLink href={props.link}>{props.text}</NavLink>
		</NavItemS>
	);
};

// Functional Component
export const Header = () => {
	return (
		<HeaderS>
			<Logo>CM</Logo>
			<Nav>
				<NavItem link=" " text="Sobre" />
				<NavItem link=" " text="Tecnologias" />
				<NavItem link=" " text="Projetos" />
				<NavItem link=" " text="Contato" />
				<Button text="Currículo" />
			</Nav>
			<HamburgerBtn className="material-symbols-outlined">menu</HamburgerBtn>
		</HeaderS>
	);
};
