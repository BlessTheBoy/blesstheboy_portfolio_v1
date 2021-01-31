import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  projectBody: "#FEFCFA",
  fontColor: "#000",
  secFontColor: "#5b5a5c",
  accentColor: "#4169E1",
  tagOpacity: 1,
};

export const darkTheme = {
  body: "#000",
  projectBody: "#202228",
  fontColor: "#fff",
  secFontColor: "#8b8a8c",
  accentColor: "#BFFF00",
  tagOpacity: 0.6,
};

export const GlobalStyles = createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: 'Roboto', sans-serif;
    }

  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: initial;
  }
`;
