import "./App.css";
import { ThemeProvider } from "styled-components";
import {
  darkTheme,
  GlobalStyles,
  lightTheme,
} from "./components/styledComponents/themes";
import Home from "./components/pages/Home";
import { useStateValue } from "./components/StateProvider";

function App() {
  const [{ theme }] = useStateValue();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
