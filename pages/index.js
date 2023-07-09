import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/common/Footer.jsx";
import Header from "../components/common/Header.jsx";
import Home from "../components/Home/Home.jsx";

export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Mannat Gifts : Buy Best Gifts For Your Loved ones </title>
      </Head>
      <div className="home_page_wrapper">
        <div className="header_Wrapper">
          <Header />
        </div>
        <hr className="horizontal_line"/>
        <div className="home_Wrapper">
          <Home />
        </div>
        <div className="footer_wrapper">
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}
