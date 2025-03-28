import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Form from "./form";
import Cart from "./cart";
import About from "./about";
import Team from "./Team";
import HelpAndSupport from "./Help&Support";
import OrderHistoty from "./orderhistory"

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct=(Product)=>{
    const productExist=cartItems.find((item)=>item.id===Product.id);
    if(productExist){
        setCartItems(cartItems.map((item)=>item.id===Product.id ? {...productExist,quantity:productExist.quantity+1}:item));
    }else{
        alert("Product Added");
        setCartItems([...cartItems,{...Product,quantity:1}]);
    }
  }

  const handleDelProduct=(Product)=>{
    const productExist=cartItems.find((item)=>item.id===Product.id);
    if(productExist.quantity===1){
      setCartItems(cartItems.filter((item)=>item.id!==Product.id));
    }else{
      setCartItems(
        cartItems.map((item)=>
      item.id===Product.id ? {...productExist,quantity:productExist.quantity-1}:item)
      );
    }
  };

  const handleCartClear=()=>{
    setCartItems([]);
  }

  return (
    <div className="container">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/form" element={<Form />} />
            <Route path="/history" element={<OrderHistoty/>}/>
            <Route
              path="/cart"
              element={<
                Cart cartItems={cartItems} 
                setCartItems={setCartItems} 
                handleAddProduct={handleAddProduct} 
                handleDelProduct={handleDelProduct}
                handleCartClear={handleCartClear}
              />}
            />
            <Route
              path="/"
              element={
                <>
                  <Home cartItems={cartItems} 
                  setCartItems={setCartItems} 
                  handleAddProduct={handleAddProduct}
                  />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/Help&Support" element={<HelpAndSupport />}/>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;