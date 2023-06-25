import React, { useEffect, useState } from "react";

import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [scroll, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    console.log(window.scrollY + " scrolling");
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar fixed-top  navbar-expand-lg navbar-light ${
          scroll ? "bg-light" : "bg-none navbar-dark"
        }`}
      >
        <div className="container-fluid px-5">
          <div className="navbar-brand fw-bold fs-4">AIO Summarizer</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <span className="navbar-text">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <span className="nav-link">
                    {/* Go to your dashboard{" "}
                    <FontAwesomeIcon
                      icon={faGreaterThan}
                      size="sm"
                      className="ms-2"
                    /> */}
                  </span>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>

      {/*  */}
    </>
  );
};

export default Header;
