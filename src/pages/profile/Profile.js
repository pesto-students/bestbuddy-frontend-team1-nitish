import React from "react";
import "./Profile.scss";

import NavBar from "../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";

const Profile = () => {
  return (
    <div>
      <NavBar />
      <div className="profile">
        <h2>Profile Details</h2>
        <h5>Please edit the Profile details below</h5>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
