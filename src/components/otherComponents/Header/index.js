import "./style.scss";
import { HomeNav } from "../HomeNav";
import { Logo } from "../Logo";
import { ThemeToggler } from "../ThemeToggler";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <Logo />
        <ThemeToggler />
        <HomeNav />
      </div>
    </div>
  );
};
