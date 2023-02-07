import React from "react";
import "./Navbar.css";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="navbar">
        <div>
          <Logo />
        </div>
        <div className="right-grp">
          <h3 className="active">Home</h3>
          <h3>Upload Room</h3>
          <h3>Add Favourite</h3>
          <h3>Profile</h3>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Navbar;
