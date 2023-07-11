import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/common/Footer.jsx";
import Header from "../components/common/Header.jsx";
import Home from "../components/Home/Home.jsx";

export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Mannat Gifts : The Perfect Gift For Your Loved ones </title>
      </Head>
      <div className="main_wrapper">
        <Header />
        {/* <hr className="horizontal_line" /> */}
        <Home />
        <Footer />
      </div>
    </Fragment>
  );
}
