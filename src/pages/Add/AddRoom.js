import React from "react";
import "./AddRoom.scss";

import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar";
import Amenties from "./../../components/Amenties/Amenties";
import PreferenceGrid from "./../../components/PreferenceGrid/PreferenceGrid";
import { Button } from "react-bootstrap";
import Camera2 from "../../assets/Camera2.svg";

const AddRoom = () => {
  return (
    <>
      <NavBar />
      <div className="add-room">
        <h2 className="addHeading">Have a Room</h2>
        <h6 className="addHeading2">Please enter the room details below</h6>
        <h2 className="addHeading">Select available Amenties</h2>
        <Amenties />
        <h2 className="addHeading">
          Preferences for Room Partner(select 3 atleast)
        </h2>
        <PreferenceGrid />
        <Button className="submitbutton">Submit</Button>
        <div className="imageupload">
          <img className="camera2" src={Camera2} alt="Camera2" />
          <Button className="uploadbutton">
            Click Here or Drag Here to upload images
          </Button>
          <p className="uploadp">
            Images should be JPG,JPEG,GIF,PNG and upload atleast 4 images and
            max 10 images
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddRoom;
