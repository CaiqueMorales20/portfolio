// Imports
import styled, { createGlobalStyle } from "styled-components";

// Global Style
export const GlobalStyle = createGlobalStyle`
  // Variables
  :root {
    // Typography
    --fzLargest: 2.953rem;
    --fzLarger: 1.763rem;
    --fzLarge: 1.45rem;
    --fzNormal: 1rem;
    --fzSmall: 0.8rem;
    --fzSmaller: 0.7rem;
    --fzSmallest: 0.5rem;

    // Colors
    --clrPrimary: #191627;
    --clrText: #efefef;
    --clrText600: #c1c1c1;
    --clrTitle: red;
  }; 

  @media screen and (max-width: 768px) {
    :root{
    // Typography
    --fzLargest: 1.953rem;
    --fzLarger: 1.363rem;
    --fzLarge: 1  rem;
    --fzNormal: .8rem;
    --fzSmall: 0.6rem;
    --fzSmaller: 0.5rem;
    --fzSmallest: 0.3rem;
    }
  } 

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
    background-color: var(--clrPrimary);
  }
  body *,
  body *::after,
  body *::before{
    color: var(--clrText);
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
  input,
  textarea{
    outline: none;
    border: none;
    background-color: transparent;
    font-weight: 400;
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
	padding-bottom: 15rem;
`;

export const SectionTitle = styled.h1`
	color: var(--clrText);
	width: 100%;
	font-size: var(--fzLarger);
	display: flex;
	align-items: center;
	gap: 2rem;
	margin-bottom: 2rem;

	&::after {
		content: "";
		display: block;
		height: 1px;
		width: min(100%, 20rem);
		background-color: var(--clrText);
		top: 55%;
		right: 0;
	}
`;
