import "./style.scss";
import { HomeNav } from "../HomeNav";
import { Logo } from "../Logo";
import { ThemeToggler } from "../ThemeToggler";
import { forwardRef } from "react";

export const Header = forwardRef((props, ref) => {
  return (
    <div className="header" ref={ref}>
      <div className="header__container">
        <Logo />
        <ThemeToggler />
        <HomeNav />
      </div>
    </div>
  );
});
