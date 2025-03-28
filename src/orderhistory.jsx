import React from "react";

const OrderHistory = ({ purchasedItems }) => {
    return (
        <div>
            <h2>Order History</h2>
            <ul>
                {purchasedItems.map((item, index) => (
                    <li key={index}>
                        <div>{item.title} - {item.quantity}*Rs{item.price}</div>
                        {item.Delivery_Address && (
                            <div>Delivery Address: {item.Delivery_Address}</div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OrderHistory;
