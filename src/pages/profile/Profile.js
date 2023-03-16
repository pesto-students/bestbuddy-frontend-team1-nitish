import React from "react";
import "./Profile.scss";
import { Button } from "react-bootstrap";

import NavBar from "../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";

const Profile = () => {
  return (
    <div>
      <NavBar />
      <div className="profile">
        <h2>Profile Details</h2>
        <h5>Please edit the Profile details below</h5>

        <div className="inputs-grpstop">
          <div className="input-grp grp1">
            <div className="input-first">
              <h5>First Name</h5>
              <input
                type="text"
                name="location"
                id=""
                placeholder="Please input here"
              />
            </div>
            <div className="input-last">
              <h5>Last Name</h5>
              <input
                type="text"
                name="rent"
                id=""
                placeholder="Please input here"
              />
            </div>
            <div className="input-email">
              <h5>Email</h5>
              <input
                type="text"
                name="location"
                id=""
                placeholder="Please input here"
              />
            </div>
          </div>
          <span className="divider1"></span>
          <div className="input-grp grp2">
            <div className="input-number">
              <h5>Phone Number</h5>
              <input
                type="text"
                name="number"
                id=""
                placeholder="Please input here"
              />
            </div>
            <div className="input-gender">
              <h5>Gender of RoomMate</h5>
              <div className="buttons">
                <button>Male</button>
                <button>FeMale</button>
              </div>
            </div>
          </div>
        </div>
        <Button className="submitbutton">Save Changes</Button>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
