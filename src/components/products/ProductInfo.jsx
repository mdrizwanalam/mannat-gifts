import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import ProductSwiper from "./ProductSwiper";
import ProductDetails from "./ProductDetails";


export default function ProductInfo() {
  return (
    <div className="main_wrapper">
      <Header />
      <div className="product_item_wrapper container">
        <div className="card">
          <div className="container-fluid">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <ProductSwiper />
              </div>
              <div className="details col-md-6">
                <ProductDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
