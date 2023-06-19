import React from "react";
import "./ProductForm.css";
const FormInput = ({ id, name, placeholder, errormsg, type, label ,value,onChange}) => {
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        key={id}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormInput;
