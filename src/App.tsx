// Imports
import React from "react";
import { GlobalStyle, PageContainer } from "./GlobalStyle";
import { HomePage } from "./screens/HomePage";

// Functional Component
export const App = () => {
	return (
		<React.Fragment>
			<PageContainer>
				<GlobalStyle />
				<HomePage />
			</PageContainer>
		</React.Fragment>
	);
};
