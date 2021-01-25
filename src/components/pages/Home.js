import React from "react";
import { Button } from "../otherComponents/Button";
import { useStateValue } from "../StateProvider";

const Home = () => {
  const [{ theme }, dispatch] = useStateValue();

  const themeToggler = () => {
    dispatch({
      type: "TOGGLE_THEME",
    });
  };

  return (
    <div>
      <h1>Hello World</h1>
      <Button
        onSwitch={() => {
          themeToggler();
        }}>
        Switch Theme
      </Button>
    </div>
  );
};

export default Home;
