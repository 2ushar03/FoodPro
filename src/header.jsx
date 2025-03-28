import React from "react";
import './header.css'
import { Link } from "react-router-dom";

function header(){
    return (
        <div className="headcont">
            <h2 className="logo">FoodX</h2>
            <div className="company">
            <h2>Company</h2>
                <li><Link to="./about" className="fabt"> About </Link></li>
                <li><Link to="./Team" className="fteam"> Team </Link></li>
            </div>
            <div className="contact">
            <h2>Contact Us</h2>
            <li><Link to="./Help&Support" className="fhelp">Help & Support</Link></li>
            </div>
        </div>
    );
}
export default header;