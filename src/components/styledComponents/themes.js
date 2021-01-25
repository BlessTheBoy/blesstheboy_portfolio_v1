import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  accentColor: "#4169E1",
  tagOpacity: 1,
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
  accentColor: "#BFFF00",
  tagOpacity: 0.6,
};

export const GlobalStyles = createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
    }
`;
