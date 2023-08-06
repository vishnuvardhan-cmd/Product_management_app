import React,{useState} from "react";
import "./ProductForm.css";
const FormInput = ({ id, name, placeholder, pattern,errormsg, type, label ,value,onChange}) => {

  const [focused,setFocused]=useState(false)
  const handleFocus=()=>{
    setFocused(true)
  }
  return (
    <div key={id} className="formInput">
      <label >{label}</label>
      <input
     
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        pattern={pattern}
        onBlur={handleFocus}
        focused={focused.toString()}
        required
      />
      <span>{errormsg}</span>
    </div>
  );
};

export default FormInput;
