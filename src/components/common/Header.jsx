import React from "react";
import Logo from "../../assets/icons/mannat_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header_Wrapper">
        <div className="drawer_block">
          <span onclick="openNav()">
            &#9776;
          </span>
        </div>
        <div className="logo_block block">
          <Link to="/" className="mannat_logo">
            <figure className="">
              <img src={Logo} alt="HeaderLogo" className="img-fluid logo" />
            </figure>
          </Link>
        </div>

        <div className="menu_block block">
          <a>
            <FontAwesomeIcon
              icon={faCartShopping}
              size="xl"
              style={{ color: "black" }}
            ></FontAwesomeIcon>
            <span>Cart</span>
          </a>
          <a>
            <FontAwesomeIcon icon={faUser} size="xl" />
            <span>Hi Guest</span>
          </a>
        </div>
    </header>
  );
};

export default Header;
