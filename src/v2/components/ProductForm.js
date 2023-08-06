import React, { useState } from "react";
import "./Product.css";
const ProductForm = () => {
  const [value, setValue] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [place, setPlace] = useState("");
  const [waranty, setWaranty] = useState(1);

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
    },
  ];
  return (
    <div className="formdesign">
      <h3>ProductDetails</h3>
      <form>
        <section className="inputdesign">
          <label className="labeling">Name</label>
          <input type="text" name="name" value={name} />

          <label className="labeling">Type</label>
          <input type="text" name="type" value={type} />

          <label className="labeling">Place</label>
          <input type="text" name="place" value={place} />

          <label className="labeling">Waranty</label>
          <input type="number" name="waranty" value={waranty} />
        </section>
        <button className="buttonstyling">Add</button>
      </form>
    </div>
  );
};

export default ProductForm;
