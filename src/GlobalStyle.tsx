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
		fzSmaller: "0.74rem",
	},
	color: {
		clrPrimary: "#212121",
		clrText: "#efefef",
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
    
	letter-spacing: 1px;
  }
  html,
  body{
    width: 100%;
    overflow-x: hidden;
  }
  body{
    background-color: ${cssVariables.color.clrPrimary};
    color: ${cssVariables.color.clrText};
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
  img{
    width: 100%;
    height: auto;
  }
  a{
    text-decoration: none;
  }
`;

// Styled Components
export const PageContainer = styled.div`
	width: min(1800px, 90vw);
	margin-inline: auto;
`;

export const Content = styled.div`
	margin-inline: auto;
	width: 70%;
`;

export const SectionTitle = styled.h1`
	color: #ffffff;
	width: 100%;
	font-size: ${cssVariables.typography.fzLarger};
	display: flex;
	align-items: center;
	gap: 2rem;

	&::after {
		content: "";
		display: block;
		height: 1px;
		width: min(100%, 20rem);
		background-color: #ffffff;
		top: 55%;
		right: 0;
	}
`;
