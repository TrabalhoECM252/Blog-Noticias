import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import Register from "./Register";
import Login from "./Login";

export default function App() {

  return (
      <Routes>
        {/** 
      <Route exact path="/" >
        <Login />
      </Route>
      <Route exact path="/login" >
        <Login />
      </Route>
      <Route exact path="/register" >
        <Register />
      </Route>
      <Route exact path="/home" >
        <Home />
      </Route>
      */}
        <Route exact path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
  );
}
