import React from "react";
import Products from "./Products";

const myroutes = ({ productItems, setCartItems,handleAddProduct}) => {
  return (
    <>
      <Products productItems={productItems} setCartItems={setCartItems} handleAddProduct={handleAddProduct}/>
    </>
  );
};

export default myroutes;