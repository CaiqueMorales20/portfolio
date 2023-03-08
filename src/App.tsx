// Imports
import React from "react";
import { GlobalStyle } from "./GlobalStyle";

// Imported Components
import { Header } from "./components/Header";
import { PageContainer } from "./GlobalStyle";

// Screens
import { HomePage } from "./screens/HomePage";
import { Socials } from "./components/Socials";

// Functional Component
export const App = () => {
	// Rendering
	return (
		<React.Fragment>
			<PageContainer>
				<GlobalStyle />
				<Header />
				<HomePage />
				<Socials />
			</PageContainer>
		</React.Fragment>
	);
};
