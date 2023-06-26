// Imports
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

// Global Style
export const GlobalStyle = createGlobalStyle`
  // Variables
  :root {
    // Typography
    --fzLargest: 2.853rem;
    --fzLarger: 1.563rem;
    --fzLarge: 1.45rem;
    --fzNormal: 1.05rem;
    --fzSmall: 0.84rem;
    --fzSmaller: 0.75rem;
    --fzSmallest: 0.48rem;

    // Colors
    --clrPrimary950: #232535;
    --clrPrimary900: #262839;
    --clrPrimary700: #343952;
    --clrPrimary500: #d1caca ;
    --clrPrimary400: #F1FAEE ;

    --clrPlaceholder: #afafaf ;
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
    scroll-behavior: smooth;
  }
  body{
    background-color: var(--clrPrimary900);
  }
  body *,
  body *::after,
  body *::before{
    color: var(--clrPrimary400);
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

export const Content = styled(motion.div)`
	margin-inline: auto;
	width: 70%;
	padding-bottom: 15rem;

	@media screen and (max-width: 768px) {
		padding-bottom: 5rem;
	}
`;

export const SectionTitle = styled.h1`
	color: var(--clrPrimary400);
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
		background-color: var(--clrPrimary400);
		top: 55%;
		right: 0;
	}
`;
