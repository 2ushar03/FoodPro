const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((error) => {
        console.error("Failed to connect to MongoDB:", error);
    });
const collectionSchema = new mongoose.Schema({
    user: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});
const cartItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    Delivery_Address: {
        type: String,
        required:true,
    }
});

const collection = mongoose.model("collection", collectionSchema);

const CartItem = mongoose.model("CartItem", cartItemSchema);

module.exports = {
    collection,
    CartItem
};
