// Imports
import React from "react";
import { GlobalStyle, PageLoadS, PageLoadText } from "./GlobalStyle";

// Imported Components
import { Header } from "./components/Header";
import { PageContainer } from "./GlobalStyle";
import { Socials } from "./components/Socials";
import { ScrollTop } from "./components/SrollTop";

// Screens
import { HomePage } from "./screens/HomePage";

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
						y: "-100vh",
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
				<ScrollTop />
			</PageContainer>
		</React.Fragment>
	);
};
