const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const { collection, CartItem } = require("./mongo")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",cors(),(req,res)=>{
})

app.post("/login",async(req,res)=>{
    const {user,password}=req.body
    try{
        const check=await collection.findOne({user:user, password:password})
        if(check){
            res.json("exist")
        }else{
            res.json("Not Exist")
        }
    }
    catch(e){
        res.json("Not Exist")
    }
})


app.post("/form",async(req,res)=>{
    const {user,email,password}=req.body

    const data={
        user:user,
        email:email,
        password:password
    }

    if (!user || !password) {
        return res.status(400).json({ error: "Username and password are required." });
    }

    try{
        const check=await collection.findOne({user:user})
        if(check){
            res.json("exist")
        }else{
            res.json("Not Exist")
            await collection.insertMany([data])
        }
    }
    catch(e){
        res.json("Not Exist")
    }
})

app.post("/history", async (req, res) => {
    const { items } = req.body;
    try {
        const itemsWithAddress = items.map(item => ({
            ...item,
            Delivery_Address: req.body.deliveryAddress
        }));

        await CartItem.insertMany(itemsWithAddress);
        res.status(201).json({ message: "Cart item history stored successfully." });
    } catch (error) {
        console.error("Error storing cart item history:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});

    app.get("/history", async (req, res) => {
        try {
          const cartItems = await CartItem.find();
          res.json(cartItems);
        } catch (error) {
          console.error("Error fetching cart items:", error);
          res.status(500).json({ error: "Internal server error" });
        }
      });

app.listen(process.env.PORT,()=>{
    console.log("Server is running")
})
