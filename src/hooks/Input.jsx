import React from "react";
export const Input = ({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  required,
}) => {
  return (
    <div className="inputBigDiv">
      <div className="flex flex-row items-center gap-0.5">
        <label htmlFor={name} className="inputTitle">
          {label}
        </label>
        {required && <span className="star">*</span>}
      </div>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        className={`input ${error ? "borderRed" : "borderGray"}`}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};
