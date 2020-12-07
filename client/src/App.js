import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css";
import Navbar from "./components/Navbar"
import Search from "./components/Pages/Search"
import Saved from "./components/Pages/Saved"

function App() {
  return (
      <Router>
        <Navbar />
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} /> 
      </Router>
  );
}


export default App;
