// Imports
import { useState, useEffect, useRef } from "react";

// Imported Components
import { Button } from "../Button";
import { NavItem } from "./components/NavItem";
import { HamburgerBtn } from "./components/HamburgerBtn";

// Styled Components
import { HeaderS, Logo, Nav, HamburguerNav } from "./style";

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
				<NavItem link=" " text="About" />
				<NavItem link=" " text="Projects" />
				<NavItem link=" " text="Contact" />
				<Button text="Curriculum" />
				<HamburguerNav>
					<HamburgerBtn setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
				</HamburguerNav>
			</Nav>
			<HamburgerBtn setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
		</HeaderS>
	);
};
