import React from "react";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sidebar-header">
        <Logo />
      </div>
      <div className="user-option-list">
        <div className="head-option">
          <ul>
            <li>Home</li>
            <li>Notebook</li>
            <li>Playlist</li>
            <li>Meeting Status</li>
            <li>Upload</li>
          </ul>
        </div>
        <div className="head-main">
          <ul>
            <li>Integration</li>
            <li>App</li>
            <li>Topic Tracker</li>
            <li>Analytic</li>
          </ul>
        </div>
        <div className="head-footer">
          <ul>
            <li>Team</li>
            <li>Upgrade</li>
            <li>Setting</li>
            <li>Platform Rules</li>
          </ul>
        </div>
      </div>
      <div className="sidebar-footer">
        <p>your team is on Fireflies</p>
        <span> join share meeting and </span>
      </div>
    </div>
  );
};

export default SideBar;
