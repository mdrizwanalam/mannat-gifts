import React, { Fragment } from "react";
import mgLogo from "../../assets/icons/mannat_logo.png";
import instaLogo from "../../assets/icons/insta.svg";
import ytLogo from "../../assets/icons/yt.svg";
import fb from "../../assets/icons/fb.svg";
import twLogo from "../../assets/icons/tw.svg";
import tgLogo from "../../assets/icons/telegram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <footer className="footer">
        <div className="custom_container">
          <div className="row align-items-baseline">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <aside className="footer_widget first_widget">
                <Link to="/">
                <figure className="footer_logo">
                  <img src={mgLogo} alt="Footer_logo" className="img-fluid" />
                </figure>
                </Link>
                <p>
                  <b>Mannat Gifts</b> brings you the best gifts that helps you
                  to show your love to your loved ones and to bring happy
                  moments.
                </p>
                <ul type="none" className="social_icons">
                  <li>
                    <a
                      href="https://www.instagram.com/mannat.gifts/"
                      target="_blank"
                    >
                      <img
                        src={instaLogo}
                        alt="insta"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com/@mannatgifts" target="_blank">
                      <img src={ytLogo} alt="yt" className="img-fluid" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/giftsmannat/"
                      target="_blank"
                    >
                      <img src={fb} alt="fb" className="img-fluid" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img
                        src={tgLogo}
                        alt="telegram"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src={twLogo} alt="twitter" className="img-fluid" />
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <aside className="footer_widget">
                <h4>Company</h4>
                <ul type="none" className="social_links">
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">blog</a>
                  </li>
                  <li>
                    <a href="#">Review Us</a>
                  </li>
                  <li>
                    <a href="#">Cancellation Policy</a>
                  </li>
                  <li>
                    <a href="#">Return & Refund</a>
                  </li>
                  <li>
                    <a href="#">privacy policy</a>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <aside className="footer_widget">
                <h4>Popular Gifts</h4>
                <ul type="none" className="social_links">
                  <li>
                    <a href="#">Birthday Gifts</a>
                  </li>
                  <li>
                    <a href="#">Couple Gifts</a>
                  </li>
                  <li>
                    <a href="#">Aanniversary Gifts</a>
                  </li>
                  <li>
                    <a href="#">Religious Gifts</a>
                  </li>
                  <li>
                    <a href="#">Personalized Gifts</a>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <aside className="footer_widget">
                <h4>Contact Us</h4>
                <h5>
                  +(91) 8447308316 &nbsp; &nbsp; giftsmannat@gmail.com
                </h5>
                <h5>
                  Address- Mannat Gifts, Saini Street, Haldoni Village, Greater
                  Noida, UP 201306
                </h5>
              </aside>
              {/* <div className="download_app">
                    <h4>Download the App</h4>
                    <div className="app_images">
                        <a href="https://play.google.com/store/apps/details?id=com.egurukulapp&hl=en_IN&gl=US" target="_blank">
                            <img src="assets/icons/play_store.svg" alt="Android" className="img-fluid" />
                        </a>
                        <a href="https://apps.apple.com/in/app/egurukul/id1491444366" target="_blank">
                            <img src="assets/icons/app_store.svg" alt="Apple" className="img-fluid" />
                        </a>
                    </div>
                </div> */}
            </div>
          </div>
        </div>
        <p className="copright_text">Copyright 2023 mannatgifts.com</p>
      </footer>
    </div>
  );
};

export default Footer;
