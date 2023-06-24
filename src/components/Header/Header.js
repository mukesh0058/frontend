import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-dark navbar-expand-lg navbar-light bg-none">
        <div className="container-fluid px-5">
          <a className="navbar-brand" href="#">
            <div className="navbar-brand fw-bold fs-4">AIO Summarizer</div>
          </a>
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
                  <a className="nav-link active" aria-current="page" href="#">
                    menu 1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    menu 2
                  </a>
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
