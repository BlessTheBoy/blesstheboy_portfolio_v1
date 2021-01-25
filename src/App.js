import { ThemeProvider } from "styled-components";
import {
  darkTheme,
  GlobalStyles,
  lightTheme,
} from "./components/styledComponents/themes";
import { useStateValue } from "./components/StateProvider";
import { LandingPage } from "./components/pages/LandingPage";

function App() {
  const [{ theme }] = useStateValue();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <LandingPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
