import React, { useEffect, useState } from "react";
import axios from "axios";
import "./cart.css";
import Payment from "./payment";
import OrderHistory from "./orderhistory";
import "./payment.css";

const Cart = ({ cartItems, handleAddProduct, handleDelProduct, handleCartClear }) => {
    const [paymentCompleted, setPaymentCompleted] = useState(false);
    const [purchasedItems, setPurchasedItems] = useState([]);
    const [showHistory, setShowHistory] = useState(false);
    const [loading, setLoading] = useState(false);
    const [deliveryAddress, setDeliveryAddress] = useState("");

    const totalPrice = cartItems.reduce(
        (price, item) => price + item.quantity * item.price,
        0
    );

    const handlePaymentCompletion = async () => {
        try {
            const itemsWithAddress = cartItems.map(item => ({ ...item, deliveryAddress: deliveryAddress }));
            await axios.post("https://34.206.123.65:3000/history", { items: itemsWithAddress, deliveryAddress }); // Updated URL
            setPurchasedItems([...cartItems]);
            setPaymentCompleted(true);
            alert("Thanks for Shopping");
            window.location.reload();
            alert("Delivered to " + deliveryAddress);
            window.location.href = "https://34.206.123.65:3000";
        } catch (error) {
            console.error("Error storing cart item history:", error);
        }
    };

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://34.206.123.65:3000/history"); // Updated URL
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleShowHistory = async () => {
        try {
            setLoading(true);
            const itemsWithAddress = cartItems.map(item => ({ ...item, deliveryAddress: deliveryAddress }));
            await axios.post("https://34.206.123.65:3000/history", { items: itemsWithAddress }); // Updated URL
            setShowHistory(!showHistory);
            setLoading(false);
        } catch (error) {
            console.error("Error storing cart item history:", error);
            setLoading(false);
        }
    };

    return (
        <div className="conatinerofcart">
            <div className="carthead">Cart Items</div>
            {cartItems.length === 0 && (
                <div className="cartempty"> Cart is Empty </div>
            )}
            <div>
                <div>
                    {cartItems.length >= 1 && (
                        <button className="clearcart" onClick={() => handleCartClear()}>
                            Clear
                        </button>
                    )}
                </div>
                {cartItems.map((item) => (
                    <div key={item.id} className="cartlist">
                        <img className="cartimg" src={item.image} alt={item.name} />
                        <div className="cartItemsname">{item.title}</div>
                        <div className="cartItemsfunc">
                            <button onClick={() => handleAddProduct(item)} className="addbttn">+</button>
                            <button onClick={() => handleDelProduct(item)} className="delbttn">-</button>
                        </div>
                        <div> {item.quantity}*Rs{item.price} </div>
                    </div>
                ))}
            </div>
            <div className="finalamt">Total Price
                <div className="totprice">Rs {totalPrice}</div>
                <div>
                    {cartItems.length > 0 && !paymentCompleted && (
                        <>
                            <input className="Address"
                                type="text"
                                placeholder="Enter Delivery Address"
                                value={deliveryAddress}
                                onChange={(e) => setDeliveryAddress(e.target.value)}
                            />
                            <button onClick={handlePaymentCompletion} className="paybtn">Proceed to Payment</button>
                        </>
                    )}
                </div>
            </div>
            <div className="history">
                <button onClick={handleShowHistory} className="hbtn">
                    {showHistory ? "Hide History" : "Show History"}
                </button>
                {showHistory && !loading && <OrderHistory purchasedItems={purchasedItems} />}
                {showHistory && !loading && 
                    <div>
                        <h1>Transaction History</h1>
                        <ul>
                            {data.map((item) => (
                                <div key={item._id}>
                                    <h2>{item.Delivery_Address}</h2>
                                    <li>{item.title} - Quantity: {item.quantity}, Price: Rs{item.price}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                }
                {loading && <p>Loading...</p>}
            </div>
        </div>
    );
}

export default Cart;
