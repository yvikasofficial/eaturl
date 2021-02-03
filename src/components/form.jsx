import React from "react";

const FormField = ({ placeholder, type = "text", min, value, setValue }) => {
  return (
    <div className="form-field">
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        min={min}
      />
    </div>
  );
};

export default FormField;

export const FormWrapper = ({ children }) => {
  return <div className="form-wrapper">{children}</div>;
};
