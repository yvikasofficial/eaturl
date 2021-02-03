import React from "react";
import { Link } from "react-router-dom";

const Drawer = ({ open }) => {
  return (
    <div className="drawer" style={{ right: open ? 0 : "-100%" }}>
      <div className="drawer__logo">
        <h2>EatUrl</h2>
      </div>
      <div className="drawer__links">
        <Link to="/about">About</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Drawer;
