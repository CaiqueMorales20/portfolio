// Imports
import { useState, useEffect, useRef, createContext } from "react";

// Imported Components
import { Button } from "../Button";
import { NavItem } from "./components/NavItem";
import { HamburgerBtn } from "./components/HamburgerBtn";

// Styled Components
import { HeaderS, Logo, Nav, HamburguerNav } from "./style";

// Types
import { HeaderContextProps } from "./types";

// Context
export const HeaderContext = createContext<HeaderContextProps | null>(null);

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
		<HeaderContext.Provider value={{ mobileMenu, setMobileMenu }}>
			<HeaderS>
				<Logo>CM</Logo>
				<Nav ref={wrapperRef} opened={mobileMenu}>
					<NavItem link="about" text="About" />
					<NavItem link="projects" text="Projects" />
					<NavItem link="contact" text="Contact" />
					<Button text="Curriculum" />
					<HamburguerNav>
						<HamburgerBtn
							setMobileMenu={setMobileMenu}
							mobileMenu={mobileMenu}
						/>
					</HamburguerNav>
				</Nav>
				<HamburgerBtn setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
			</HeaderS>
		</HeaderContext.Provider>
	);
};
