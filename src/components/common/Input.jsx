import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        name={name}
        autoFocus
        className="form-control"
        id={name}
      />
      {error && <small className="form-text text-danger">{error}</small>}
    </div>
  );
};

export default Input;