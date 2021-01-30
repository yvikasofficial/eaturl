import React from "react";
import { COLOR_BLUE } from "../utils/constats";
import Button from "./button";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <span>EatUrl</span>
        </div>
        <div className="header__links">
          <Button outline outlineColor="#fff">
            About
          </Button>
          <Button color={COLOR_BLUE}>Sign up</Button>
          <Button>Log in</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
