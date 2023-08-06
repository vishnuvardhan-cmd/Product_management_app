import React from "react";

const ProductList = (props) => {
  return (
    <div>
      <h1>AvailabelProducts</h1>
      <div>
        {props.products.map((product) => (
          <li>
            <p>{product.name}</p>
            <p>{product.place}</p>
            <p>{product.type}</p>
            <p>{product.waranty}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
