import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-router-dom";
import { COLOR_BLUE } from "../utils/constats";
import Button from "./button";
import Drawer from "./drawer";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <Link to="/">
            <span>EatUrl</span>
          </Link>
        </div>
        <div className="header__links">
          <Button outline outlineColor="#fff">
            About
          </Button>
          <Button backgroundColor={COLOR_BLUE} to="/register">
            Sign up
          </Button>
          <Button to="/login">Log in</Button>
        </div>
        <div className="header__menu">
          <Drawer open={open} />
          <HamburgerMenu
            isOpen={open}
            menuClicked={() => setOpen(!open)}
            width={18}
            height={15}
            strokeWidth={2}
            rotate={0}
            color="white"
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
