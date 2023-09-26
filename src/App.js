import "../src/styles/global.scss";
import "../src/styles/global.responsive.scss";
import React, { Fragment } from "react";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/common/AboutUs";
import ProductInfo from "./components/products/ProductInfo";
import Admin from "./components/admin/Admin";
import ProductList from "./components/products/ProductList";

function App() {
  return ( 
    <Fragment>
      <div className="main_wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/products/:productId" element={<ProductInfo />} />
          <Route path="/admin" exact element={<Admin />} />
          <Route path="/all-products" exact element={<ProductList />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
