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
}) => {
  return (
    <div
      className="button"
      onClick={onClick}
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
