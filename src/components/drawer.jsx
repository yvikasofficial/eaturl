import React from "react";

const Drawer = ({ open }) => {
  return <div className="drawer" style={{ right: open ? 0 : "-100%" }}></div>;
};

export default Drawer;
