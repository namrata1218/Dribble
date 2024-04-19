import React from "react";

import CreateAccount from "./CreateAccount";
// import Cards from "../src/Cards";
// import Navbar from "./Navbar";
// import Verification from "./Verification";
// import Ctasection from "./Ctasection";
// import Footer from "./Footer";
import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/create" element={<CreateAccount />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
