import React from "react";
import "./FormGeneral.css";

const FormGenreal = (props) => {
  // { name, placeholder,setProductName}
  // name={name} placeholder={placeholder}
  // <h1>{name}</h1>
  return (
    <div className="inputs">
      <label>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default FormGenreal;
