import React from "react";

const ProductForm = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <form
        style={{
          margin: "58px",
          /* padding: 20px; */
          border: "1px solid black",
          borderRadius: "30px",
        }}
      >
        <div
          style={{
            padding: "30px",
          }}
        >
          <label style={{ paddingRight: "inherit" }}>Name</label>
          <input
            style={{ padding: "8px", borderRadius: "14px" }}
            type="text"
            placeholder="Enter the name"
          />
        </div>
        <div>
          <label>Place</label>
          <input type="text" placeholder="Enter the place" />
        </div>
        <div>
          <label>Type</label>
          <input type="text" placeholder="Enter the type" />
        </div>
        <div>
          <label>Waranty</label>
          <input type="number" placeholder="Enter the waranty" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
