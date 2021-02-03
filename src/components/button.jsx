import React from "react";
import { withRouter } from "react-router-dom";

const Button = ({
  children,
  color,
  outline,
  outlineColor,
  width,
  height,
  borderRadius,
  backgroundColor,
  onClick,
  disabled,
  history,
  to,
}) => {
  return (
    <div
      className="button"
      onClick={disabled ? null : to ? () => history.push(to) : onClick}
      style={{
        width,
        height,
        borderRadius,
        backgroundColor: outline ? "transparent" : backgroundColor,
        border: outline ? `1px solid ${outlineColor}` : null,
        color,
      }}
    >
      {children}
    </div>
  );
};

export default withRouter(Button);
