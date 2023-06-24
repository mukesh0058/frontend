import React from "react";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav class="header navbar bg-theme">
      <div class=" container-fluid">
        <div className="navbar-brand fw-bold fs-4">AIO Summarizer</div>
        <div className="menu-items d-flex">
          <div className="fw-bold">Home</div>
          <div className="fw-bold">About</div>
          <div className="fw-bold">Contact</div>
          <div className="fw-bold d-flex align-items-center">
            Go to your dashboard{" "}
            <FontAwesomeIcon icon={faGreaterThan} size="sm" className="ms-2" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
