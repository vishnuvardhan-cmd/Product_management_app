import React, { useState } from "react";
import FormInput from "./FormInput";
import "./ProductForm.css";
const ProductForm = () => {
  const [values, setValues] = useState({
    name: "",
    place: "",
    type: "",
    waranty: 0,
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      palceholder: "Enter the name",
      type: "text",
      errormsg: "name should consists of atleast 1 -16 characters",
      label: "Name",
    },
    {
      id: 2,
      name: "place",
      palceholder: "Enter the place",
      type: "text",
      errormsg: "place should consists of atleast 1 -16 characters",
      label: "Place",
    },
    {
      id: 3,
      name: "Type",
      palceholder: "Enter the Type",
      type: "text",
      errormsg: "Type should consists of atleast 1 -16 characters",
      label: "Type",
    },
    {
      id: 4,
      name: "waranty",
      palceholder: "Enter the waranty",
      type: "number",
      errormsg: "waranty should consists of atleast 1 -16 characters",
      label: "Waranty",
    },
  ];

  const handleFormElements=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }

  const handleForm=(e)=>{
    e.preventDefault();
    console.log(values)
  }
  return (
    <div>
      <form onSubmit={handleForm}>
      <h1>Product Details</h1>
        {inputs.map((input) => (
          <FormInput  {...input} value={values[input.name]} onChange={handleFormElements}/>
        ))}
        <button type="submit" >submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
