import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { ThemeProvider } from "styled-components";
import {
  darkTheme,
  GlobalStyles,
  lightTheme,
} from "./components/styledComponents/themes";

function App() {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <h1>Hello World</h1>
        <Button
          onSwitch={() => {
            themeToggler();
          }}>
          Switch Theme
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
