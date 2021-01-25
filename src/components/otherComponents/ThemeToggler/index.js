import "./style.scss";
import { useStateValue } from "../../StateProvider";

export const ThemeToggler = () => {
  const [{ theme }, dispatch] = useStateValue();

  const themeToggler = () => {
    dispatch({
      type: "TOGGLE_THEME",
    });
  };

  return (
    <div
      onClick={() => {
        themeToggler();
      }}
      className="themeToggler">
      {theme === "dark" ? (
        <img
          src="images/moon.png"
          alt="theme toggler"
          className="themeToggler__image"
        />
      ) : (
        <img
          src="images/sunIcon.png"
          alt="theme toggler"
          className="themeToggler__image"
        />
      )}
    </div>
  );
};
