import "./App.css";
import { Autocomplete, TextField } from "@mui/material";
import ProductForm from "./ProductForm";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./ProductList";
import React, { useEffect, useState } from "react";
import Header from "../v2/components/Header";
import AddProduct from "../v2/components/ProductForm";

function App() {
  const [products, setProducts] = useState([]);
  const LOCAL_PRODUCT_KEY = "product";
  useEffect(() => {
    JSON.parse(localStorage.getItem(LOCAL_PRODUCT_KEY));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_PRODUCT_KEY, JSON.stringify(products));
  }, [products]);

  const updateProducts = (values) => {
    console.log(values);
    setProducts([...products, { ...values }]);
    console.log(products);
  };

  return (
    <div>
      <Header />
      <AddProduct/>
    </div>
  );
}

export default App;
