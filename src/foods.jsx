import React from "react";
import "./foods.css";
import Spicypannerwrap from "resources/Spicypannerwrap.png";
import AlooTiki from "resources/AlooTikiBurger.avif";
import Margreta from "resources/Margretta.avif";
import SpicyChicken from "resources/McSpicyChicken.avif";
import Periperi from "resources/Periperi.avif";
import Vegcorn from "resources/Vegcorn.avif";
import Cheese from "resources/cheese.avif";






function Foods(){
    return(
        <>
        <div className="foodstore">
        <div className="omg">
            <img src={Spicypannerwrap} alt="Spicypannerwrap"/>
            <button>ADD</button>
            <h2>Big Spicy Paneer Wrap Combo</h2>
            <p>Rs 360.95</p>
            <p>Enjoy Panner Wrap + Fries + Drink </p>
        </div>
        <div className="smg">
            <img src={AlooTiki} alt="Aloo_Tiki_Burger"/>
            <button>ADD</button>
            <h2>2 McAloo Tikki Burger + 2 Fries</h2>
            <p>Rs 327.95</p>
            <p>Enjoy Tikki Burger with fries </p>
        </div>
        <div className="tmg">
            <img src={Margreta} alt="Margreta"/>
            <button>ADD</button>
            <h2>Margreta</h2>
            <p>Rs 349</p>
            <p>Enjoy Margreta Pizza </p>
        </div>
        <div className="fmg">
            <img src={SpicyChicken} alt="McSpicyChicken"/>
            <button>ADD</button>
            <h2>Spicy Chicken Burger</h2>
            <p>Rs 388.95</p>
            <p>Enjoy Chicken Burger + fries +Drink </p>
        </div>
        <div className="fimg">
            <img src={Periperi} alt="Periperi"/>
            <button>ADD</button>
            <h2>Peri Peri Pizza - Freshly Hand Tossed 7</h2>
            <p>Rs 359</p>
            <p>Enjoy Peri Peri Pizza </p>
        </div>
        <div className="simg">
            <img src={Cheese} alt="Classic Pizza" width="303px" height="242px"/>
            <button>ADD</button>
            <h2>New York Style Cheese (Classic Pizza)</h2>
            <p>Rs 199</p>
            <p>Enjoy the Classic New York Pizza! Topped with 100% whole milk Mozzarella </p>
        </div>
        <div className="smg">
            <img src={Vegcorn} alt="Vegcorn" width="303px" height="286px"/>
            <button>ADD</button>
            <h2>Veg Corn Pizza</h2>
            <p>Rs 200</p>
            <p>Enjoy Veg Corn Pizza </p>
        </div>
        </div>
        </>
    );
}
export default Foods;
