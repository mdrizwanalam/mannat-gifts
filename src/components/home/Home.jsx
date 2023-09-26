import React from "react";
import Slider from "./Slider";
import ProductList from "../products/ProductList";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Home = () => {
  return (
    <div className="home_Wrapper">
      <Header />
      <Slider />
      <ProductList />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
