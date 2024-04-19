import React, { useState } from "react";
import logo from "./images/Dribbble New 2023.png";
import first from "./images/newproject1.jpg";
// import video3 from "./video/vd3.webm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignIn=()=>{
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const navigate=useNavigate();
    const submitForm=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/login',{email,password})
        .then(result=>{
            console.log(result)
            if(result.data==="Success"){
                navigate('/create')

            }
        
        })
        .catch(err=>console.log(err))}
    return(
        <div className="home">
            <div className="left">
          <div className="content-container">
            <div className="logo-img">
              <img src={logo} alt="logo" />
            </div>
            <h1 className="home-text">
              Discover the world's top <br />
              Designers & Creatives.
            </h1>
            <img className="leftimage" src={first} alt="images" />
            {/* <video src={video3}></video> */}
            <footer>
              <p>
                Art by <span><a href="">Peter Tharka</a></span>
              </p>
            </footer>
          </div>
        </div>
            
           <div className=" right  container-signin">
            <h2>Sign in to Dribble </h2>
            <form onSubmit={submitForm}>
                <div className="signin-content">
            <label htmlFor="email">Email</label>
                <input className="signin" type="email"  placeholder="abc12@gmail.com" id="email" name="email" value={email} 
               onChange={(e)=>setEmail(e.target.value)} required  autoComplete="off"/>
                <label htmlFor="password">Password</label>
                <input className="signin" type="password" id="password"  placeholder="6+ characters" value={password} onChange={(e)=>setPassword(e.target.value)}  name="password" required />
               <button type="submit">Sign In</button>
               </div>
            </form>
           </div>
        </div>
    )
}
export default SignIn;