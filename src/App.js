import { ThemeProvider } from "styled-components";
import {
  darkTheme,
  GlobalStyles,
  lightTheme,
} from "./components/styledComponents/themes";
import { useStateValue } from "./components/StateProvider";
import { LandingPage } from "./components/pages/LandingPage";
import { RecentProjects } from "./components/pages/RecentProjects";
import { ContactPage } from "./components/pages/ContactPage";

function App() {
  const [{ theme }] = useStateValue();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <LandingPage />
        <RecentProjects />
        <ContactPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
