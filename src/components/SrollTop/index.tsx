// Imports
import { useState } from "react";

// Styled Components
import { ScrollTopS } from "./style";

// Icons
import { FiArrowUp } from "react-icons/fi";

// Functional Component
export const ScrollTop = () => {
	// Go Up
	const [upBtn, setUpBtn] = useState<boolean>(false);
	window.addEventListener("scroll", () => {
		if (window.scrollY > 680) {
			setUpBtn(true);
		} else {
			setUpBtn(false);
		}
	});

	// Rendering
	return (
		<>
			{upBtn && (
				<ScrollTopS onClick={() => scrollTo(0, 0)}>
					<FiArrowUp />
				</ScrollTopS>
			)}
		</>
	);
};
