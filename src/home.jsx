import react, { useEffect } from "react";
import "./home.css"
import {Link, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "./header";
import data from "./data";
import Routes from "./Routes";

function home({handleAddProduct,cartItems,setCartItems, searchitem, handleSearchChange}){
    const history=useNavigate();
    const { productItems } = data;

    useEffect(()=>{
        if(!localStorage.getItem("token")){
            history('/login')
        }
    },[])
    return (
    <>
    <div className="maincont">
    <div className="containerhome">
    <Link to="/" ><button className="cname">FoodX</button></Link>
    <button className="searchbar"></button>
    <Link to="/login"><button onClick={()=>{localStorage.removeItem("token")}} className="signin">Logout</button></Link>
    <Link to="/cart"> <button className="cart">Cart <span className="quantity">{cartItems.length===0 ?"":cartItems.length}</span></button></Link>
    <hr></hr>    
    </div>
     <Routes productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct}/>
    <Header/>
    </div>
    </>
    );
}

export default home;