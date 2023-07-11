import Image from "next/image";
import React, { Fragment } from "react";
import LogoImage from "../../public/icons/mg-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header_Wrapper">
      <header>
        <div className="header_container">
          <div className="logo_block block">
            <a className="mannat_logo">
              <figure className="footer_logo">
                <Image
                  src={LogoImage}
                  alt="Footer_logo"
                  className="img-fluid"
                />
              </figure>
            </a>
          </div>
          <div className="search_block block">
            <div className="search search_input">
              <input
                placeholder="Search best gifts..."
                className="form-control border-end-0 border rounded-pill"
                // type="search"
                id="example-search-input"
              />
            </div>
            <div className="search search_icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
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
        </div>
      </header>
    </div>
  );
};

export default Header;
