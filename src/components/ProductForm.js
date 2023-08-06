import React, { useEffect, useState } from "react";
import FormInput from "./FormInput";
import "./ProductForm.css";
import { useNavigate } from "react-router-dom";
const ProductForm = (props) => {
  const [values, setValues] = useState({
    name: "",
    place: "",
    type: "",
    waranty: 0,
  });

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const inputs = [
    {
      id: 1,
      name: "name",
      palceholder: "Enter the name",
      type: "text",
      errormsg: "name should consists of atleast 1 -16 characters",
      label: "Name",
      pattern: "^[A-Za-z0-9 ]{1,16}$",
    },
    {
      id: 2,
      name: "place",
      palceholder: "Enter the place",
      type: "text",
      errormsg: "place should consists of atleast 1 -16 characters",
      label: "Place",
      pattern: "^[A-Za-z0-9 ]{1,16}$",
    },
    {
      id: 3,
      name: "type",
      palceholder: "Enter the Type",
      type: "text",
      errormsg: "Type should consists of atleast 1 -16 characters",
      label: "Type",
      pattern: "^[A-Za-z0-9 ]{1,16}$",
    },
    {
      id: 4,
      name: "waranty",
      palceholder: "Enter the waranty",
      type: "number",
      errormsg: "waranty should consists of only numbers",
      label: "Waranty",
      pattern: "^[0-9]+$",
    },
  ];

  const handleFormElements = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    props.updateProducts(values)
    // setProducts([...products, { ...values }]);
    // setValues({
    //   name: "",
    //   place: "",
    //   type: "",
    //   waranty: 0,
    // ,function(){
    //   localStorage.setItem("products",JSON.stringify(products))
    // }
    // });
    setTimeout(navigate("/"),5000);
  };

  // useEffect(() => {
  //   console.log(products);
  //   localStorage.setItem("products", JSON.stringify(products));
  //   navigate("/");
  // }, []);
  // useEffect(() => {
    
  //   navigate("/");
  // }, [products]);
  return (
    <div className="adjustCenter">
      <form onSubmit={handleForm}>
        <h1>Product Details</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleFormElements}
          />
        ))}
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
