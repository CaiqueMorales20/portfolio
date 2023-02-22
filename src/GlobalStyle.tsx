// Imports
import styled, { createGlobalStyle } from "styled-components";

// Global Style
export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
  body{
    background-color: #0c3945;
    color: #fefefe;
  }
`;

// Styled Components
export const PageContainer = styled.div`
	width: min(1440px, 80%);
	margin-inline: auto;
`;
