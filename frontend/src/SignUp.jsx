import React, { useState } from "react";
import axios from "axios";
import logo from "./images/Dribbble New 2023.png";
import first from "./images/newproject1.jpg";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const[name, setName]=useState("");
  const[username, setUsername]=useState("");
  const[email, setEmail]=useState("");
  const[password, setPassword]=useState("");
  const navigate=useNavigate()
  const [allEntry, setAllEntry]=useState([]);
  const submitForm=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/register',{name,username,email,password})
    .then(result=>{console.log(result)
     navigate('/login')
    })
    .catch(err=>console.log(err))
    if(name && username && email && password){
      const newEntry={id:new Date().getTime().toString(), name,username,email,password};
      setAllEntry([...allEntry, newEntry]);
      console.log(newEntry);


      setName("");
      setUsername("");
      setEmail("");
      setPassword("");
    }
    else{
      alert("please fill the data");
    }
    

  }

  return (
    <>
      <div  id="home" className="container home">
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
            <footer>
              <p>
                Art by <span><a href="">Peter Tharka</a></span>
              </p>
            </footer>
          </div>
        </div>

        <div className="right">
          <header>
            <div className="logo-image right-logo">
              <img src={logo} alt="" />
            </div>
            <p>
              Already a member?<a href="/login">Sign In</a>
            </p>
          </header>
          <div className="form-container">
            <h1>Sign up to Dribble</h1>
            <form onSubmit={submitForm} >
              <div className="input-group">
                <div className="input-container">
                  <div>
                    <label htmlFor="name">Name</label><br />
                    <input type="text" autoComplete="off" id="name" placeholder="john" value={name} onChange={(e)=>setName(e.target.value)}  name="name" required />
                  </div>
                  <div>
                    <label htmlFor="username">Username</label><br />
                    <input type="text" id="username"  autoComplete="off" placeholder="john2801" value={username} onChange={(e)=>setUsername(e.target.value)}  name="username" required />
                  </div>
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email"  placeholder="abc12@gmail.com" id="email" name="email" value={email} 
               onChange={(e)=>setEmail(e.target.value)} required  autoComplete="off"/>
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password"  placeholder="6+ characters" value={password} onChange={(e)=>setPassword(e.target.value)}  name="password" required />
              </div>
              <div className="input-group">
                <input type="checkbox" id="checkbox" /><p>Creating an account means
                 you're okay with our <a href="#">Terms of 
              <br /> Service,Privacy Policy</a>,and our default 
              <a href="#"> Notification <br /> Settings.</a></p>
              </div>
              <div className="input-group">
                <button type="submit" className="btn">Create Account</button>
              </div>
              <div className="input-group">
                <p id="privacy">The site is protected by reCAPTCHA and the Google <br />
                  <a href="#">Privacy Policy,</a>and <a href="#">Terms of Service</a>
                  <br />apply</p>
              </div>
              
            </form>
            <div>{
              allEntry.map((curElem)=>{
                const{id,name,username,email,password}=curElem;
                return(
                  <div key={curElem.id} className="showDataStyles">
                    <p>{name}</p>
                    <p>{username}</p>
                    <p>{email}</p>
                    <p>{password}</p>
                  </div>
                )

              })
              }
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default SignUp;
