// Styled Components
import { HamburgerBtnS } from "./style";

// Types
type HamburgerBtnProps = {
	setMobileMenu: (value: boolean) => void;
	mobileMenu: boolean;
};

// Functional Component
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
