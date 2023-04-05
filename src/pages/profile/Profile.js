import React from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import "./Profile.scss";
import ProfileDetails from "./mode";

const Profile = () => {
  const params = useParams();
  const { mode = "view" } = params;
  return (
    <div>
      <NavBar />
      <div className="profile">
        <h2 className="profileheading">Profile Details</h2>
        <ProfileDetails mode={mode} />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
