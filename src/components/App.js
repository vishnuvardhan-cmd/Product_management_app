import "./App.css";
// import { Autocomplete, TextField } from "@mui/material";
// import ProductForm from "./ProductForm";
import FormInput from "../FormGeneral/FormInput";
import { useState } from "react";

function App() {
  const [productList, setProductList] = useState([]);

  const updateList=(e)=> {
    
    setProductList([...productList, e]);
    console.log(productList)
  }
  return (
    <div className="App">
      <FormInput setProductList={updateList} />
      {productList.map((product) => (
        <p>{product.ProductName}</p>
      ))}
    </div>
  );
}

export default App;
