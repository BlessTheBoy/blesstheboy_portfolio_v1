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
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Projects } from "./components/pages/Projects";

function App() {
  const [{ theme }] = useStateValue();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <Router>
          <Switch>
            <Route path="/allprojects">
              <Projects />
            </Route>
            <Route path="/">
              <div style={{ scrollSnapType: "y mandatory" }}>
                <LandingPage />
                <RecentProjects />
                <ContactPage />
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
