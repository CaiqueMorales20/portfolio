// Imports
import React from "react";
import { GlobalStyle, PageLoadS, PageLoadText } from "./GlobalStyle";

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
				<PageLoadS
					initial={{ y: 0 }}
					animate={{
						y: "-100vw",
						transition: {
							duration: 1,
						},
					}}
				>
					<PageLoadText>CM</PageLoadText>
				</PageLoadS>
				<Header />
				<HomePage />
				<Socials />
			</PageContainer>
		</React.Fragment>
	);
};
