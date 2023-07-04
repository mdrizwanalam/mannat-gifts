import Head from "next/head";
import { Fragment } from "react";
import Header from "../components/common/Header.jsx";
import Home from "../components/Home/Home.jsx";

export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Mannat Gifts</title>
      </Head>
      <div className="home_page_wrapper">
        <div className="header_Wrapper">
          <Header />
        </div>
        <hr />
        <div className="home_Wrapper">
          <Home />
        </div>
      </div>
    </Fragment>
  );
}
