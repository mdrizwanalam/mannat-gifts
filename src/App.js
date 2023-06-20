import logo from "./logo.svg";
import "./App.css";
import Header from "./components/common/Header";
import Home from "./components/Home/Home";
import React from "react";

function App() {
  return (
    <>
      <div className="header-container">
        <Header />
      </div>
      <div className="home-container">
        <Home />
      </div>
    </>
  );
}

export default App;
