import React from "react";
import "./sidebar.scss";
import SideBar from "./SideBar";
const Layout = () => {
  return (
    <div className="layout">
      <SideBar />
      <div className="main">
        <div className="main-header"></div>
      </div>
    </div>
  );
};

export default Layout;
