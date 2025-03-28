import React from "react";
import "./payment.css"

const DummyPayButton=({onPayment,Price})=>{
    const handlePayment=()=>{
        alert("Payment Successful of Rs "+Price);
        console.log("Payment Successful of Rs "+Price);
        onPayment();
    };

    return (
        <button onClick={handlePayment} className="paybtn">
            Proceed To Payment
        </button>
    )
}

export default DummyPayButton;