// Imports
import { useState, useEffect, useRef } from "react";

// Imported Components
import { Button } from "../Button";

// Styled Components
import {
	HamburgerBtnS,
	HamburguerNav,
	HeaderS,
	Logo,
	Nav,
	NavItemS,
	NavLink,
} from "./style";

// Types
type NavItemProps = {
	link: string;
	text: string;
};

type HamburgerBtnProps = {
	setMobileMenu: (value: boolean) => void;
	mobileMenu: boolean;
};

// Internal Component
export const NavItem = (props: NavItemProps) => {
	return (
		<NavItemS>
			<NavLink href={props.link}>{props.text}</NavLink>
		</NavItemS>
	);
};

export const HamburgerBtn = ({
	mobileMenu,
	setMobileMenu,
}: HamburgerBtnProps) => {
	return (
		<HamburgerBtnS
			onClick={() => setMobileMenu(!mobileMenu)}
			className="material-symbols-outlined"
		>
			menu
		</HamburgerBtnS>
	);
};

// Functional Component
export const Header = () => {
	// Variables
	const [mobileMenu, setMobileMenu] = useState<boolean>(false);
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef);

	// Functions
	function useOutsideAlerter(ref: any) {
		useEffect(() => {
			function handleClickOutside(event: any) {
				if (ref.current && !ref.current.contains(event.target))
					setMobileMenu(false);
			}
			// Bind the event listener
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				// Unbind the event listener on clean up
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, [ref]);
	}

	// Rendering
	return (
		<HeaderS>
			<Logo>CM</Logo>
			<Nav ref={wrapperRef} opened={mobileMenu}>
				<NavItem link=" " text="Sobre" />
				<NavItem link=" " text="Tecnologias" />
				<NavItem link=" " text="Projetos" />
				<NavItem link=" " text="Contato" />
				<Button text="Currículo" />
				<HamburguerNav>
					<HamburgerBtn setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
				</HamburguerNav>
			</Nav>
			<HamburgerBtn setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
		</HeaderS>
	);
};
