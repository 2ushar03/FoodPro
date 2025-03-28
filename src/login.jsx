import react, { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";


function login(){
    const history=useNavigate();
    const [user,setUser]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("https://34.206.123.65:3000/login",{
                user,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    // console.log(res.data)
                    localStorage.setItem('token',res.data.token)
                    history("/")
                    alert("Logged In")
                }
                else if(res.data=="Not Exist"){
                   alert("Does Not Exist")
                }
            })
            .catch(e=>{
                alert("WRONG")
                console.log(e);
            })
        }
        catch(e){
            console.log(e)
        }
    }

    return(
    <div className="form">
    <form action="POST">
        <h1>Login</h1>
        <input className="user" type="text" onChange={(e)=>{setUser(e.target.value)}} placeholder="Username" />
        <input className="pass" type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
        <button onClick={submit} className="loginbtn" type="submit">Login</button>
        <p className="rgtxt">Don't have an account?<Link to="/form"><button className="Regbtn">Sign Up</button></Link></p>
    </form>
    </div>
    );
}
export default login;
