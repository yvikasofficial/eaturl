import React from "react";

const Button = ({
  children,
  danger,
  color,
  outline,
  outlineColor,
  width,
  height,
  borderRadius,
}) => {
  return (
    <div
      className="button"
      style={{
        width,
        height,
        borderRadius,
        backgroundColor: outline ? "transparent" : color,
        border: outline ? `1px solid ${outlineColor}` : null,
      }}
    >
      {children}
    </div>
  );
};

export default Button;
