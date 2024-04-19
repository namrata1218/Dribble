import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Ctasection from "./Ctasection";
import Cards2 from "./Cards2";
import Footer from "./Footer";
// import Verification from "./Verification";

const Home =()=>{
    return(
        <>
        <Navbar/>
        {/* <Verification/> */}
        <About/>
        <Cards2/>
       <Ctasection/>
       <Footer/>
        </>
    )
}
export default Home;