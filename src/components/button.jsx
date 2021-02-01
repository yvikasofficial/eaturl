import React from "react";

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
}) => {
  return (
    <div
      className="button"
      onClick={disabled ? null : onClick}
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

export default Button;
