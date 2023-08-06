import React from "react";
import FormGenreal from "../FormGeneral/FormGenreal";
import {useState} from "react";

const FormInput = (props) => {
  const [values, setValues] = useState({
    productName: "",
    productType: "",
    productPlace: "",
    productWaranty: 0,
  });

  const dataChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const inputs = [
    {
      id: 1,
      name: "productName",
      type: "text",
      label: "ProductName",
      placeholder: "Enter ProductName",
      onChange: dataChange,
      // value:values.productName
    },
    {
      id: 2,
      name: "productType",
      type: "text",
      label: "ProductType",
      placeholder: "Enter ProductType",
      onChange: dataChange,
      // value:values.productType
    },
    {
      id: 3,
      name: "productPlace",
      type: "text",
      label: "ProductPlace",
      placeholder: "Enter ProductPlace",
      onChange: dataChange,
      // value:values.productPlace
    },
    {
      id: 4,
      name: "productWaranty",
      type: "number",
      label: "ProductWaranty",
      placeholder: "Enter Waranty Details",
      onChange: dataChange,
      // value:values.productWaranty
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    props.setProductList(values)
    setValues({
      productName: "",
      productType: "",
      productPlace: "",
      productWaranty: 0,
    });
  };

  return (
    <div className="formInput">
    <h1>ProductDetails</h1>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormGenreal key={input.id} {...input} value={values[input.name]} />
        ))}
        <button>submit</button>
      </form>
    </div>
  );
};

export default FormInput;
