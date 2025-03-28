import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./form.css"; 

function Form() {
  const history = useNavigate();
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();
    try {
      if (!email.endsWith('@gmail.com')) {
        alert('Invalid Gmail');
        return;
      }

      await axios.post("https://34.206.123.65:3000/form", {
        user, email, password
      })
      .then(res => {
        if (res.data === "exist") {
          alert("Already Exists");
        } else if (res.data === "Not Exist") {
          alert("WELCOME");
          history("/", { state: { id: user } });
        }
      })
      .catch(e => {
        alert("WRONG");
        console.log(e);
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form className="forms">
      <h1>Sign Up</h1>
      <p>Please fill this form to create account!</p>
      <input className="user" type="text" onChange={(e) => setUser(e.target.value)} placeholder="Username" name="" id="user" />
      <input required className="mail" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Gmail" name="" id="mail" />
      <input required className="pass" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" name="" id="pass" />
      <button className="subtn" onClick={submit} type="submit">Register</button>
    </form>
  );
}

export default Form;
