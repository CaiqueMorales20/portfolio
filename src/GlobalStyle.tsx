// Imports
import styled, { createGlobalStyle } from "styled-components";

// Variables
export const cssVariables = {
	// Typography
	typography: {
		fzLargest: "2.953rem",
		fzLarger: "1.763rem",
		fzLarge: "1.45rem",
		fzNormal: "1.1rem",
		fzSmall: "0.8rem",
		fzSmaller: "0.64rem",
	},
	color: {
		clrPrimary: "#0c3945",
		clrText: "#ccd8f0",
	},
};

// Global Style
export const GlobalStyle = createGlobalStyle`
  // CSS
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
  html,
  body{
    width: 100%;
    overflow-x: hidden;
  }
  body{
    background-color: ${cssVariables.color.clrPrimary};
    color: #fefefe;
    line-height: 1.6;
  }
  ul{
    list-style: none;
  }
  button{
    outline: none;
    border: none;
    background-color: transparent;
  }
  a{
    text-decoration: none;
  }
`;

// Styled Components
export const PageContainer = styled.div`
	width: min(1440px, 90%);
	margin-inline: auto;
`;
