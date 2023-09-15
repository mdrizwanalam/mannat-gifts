import "../src/styles/global.scss";
import "../src/styles/global.responsive.scss";
import React, { Fragment } from "react";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/common/AboutUs";
import ProductInfo from "./components/products/ProductInfo";

function App() {
  return ( 
    <Fragment>
      <div className="main_wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/products/:productId" element={<ProductInfo />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
