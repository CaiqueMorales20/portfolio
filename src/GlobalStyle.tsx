// Imports
import styled, { createGlobalStyle } from "styled-components";

// Variables
export const cssVariables = {
	// Typography
	typography: {
		fzLargest: "2.953rem",
		fzLarger: "1.763rem",
		fzLarge: "1.45rem",
		fzNormal: "1rem",
		fzSmall: "0.8rem",
		fzSmaller: "0.7rem",
		fzSmallest: "0.5rem",
	},
	// Colors
	color: {
		clrPrimary: "#191627",
		clrText: "#efefef",
		clrText600: "#c1c1c1",
		clrTitle: "red",
	},
};

// Global Style
export const GlobalStyle = createGlobalStyle`
  // CSS
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html,
  body{
    width: 100%;
    overflow-x: hidden;
  }
  body{
    background-color: ${cssVariables.color.clrPrimary};
  }
  body *,
  body *::after,
  body *::before{
    color: ${cssVariables.color.clrText};
    line-height: 1.6;
    font-family: 'Lato', sans-serif;
    letter-spacing: 1px;
    -webkit-tap-highlight-color: transparent;
    transition: all 0.4s ease-in-out;
    z-index: 2;
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
	padding-bottom: 10rem;
`;

export const SectionTitle = styled.h1`
	color: ${cssVariables.color.clrText};
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
		background-color: ${cssVariables.color.clrText};
		top: 55%;
		right: 0;
	}
`;
