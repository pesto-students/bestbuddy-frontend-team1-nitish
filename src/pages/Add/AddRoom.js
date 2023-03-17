import React, { useState } from "react";
import "./AddRoom.scss";

import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar";
import Amenties from "./../../components/Amenties/Amenties";
import PreferenceGrid from "./../../components/PreferenceGrid/PreferenceGrid";
import { Button } from "react-bootstrap";
import Camera2 from "../../assets/Camera2.svg";

const AddRoom = () => {
  const [amenties, setAmenties] = useState([]);
  const [preferences, setPreferences] = useState([]);

  return (
    <>
      <NavBar />
      <div className="add-room">
        <h2 className="addHeading">Have a Room</h2>
        <h6 className="addHeading2">Please enter the room details below</h6>

        <form>
          <div className="inputs-grpstop">
            <div className="input-grp grp1">
              <div className="input-location">
                <h5>Property name</h5>
                <input
                  type="text"
                  placeholder="Add property name"
                  name="property-name"
                  id=""
                  required="true"
                />
              </div>
              <div className="input-location">
                <h5>Add room location</h5>
                <input type="text" name="location" id="" />
              </div>
              <div className="input-rent">
                <h5>Rent of Room</h5>
                <input
                  type="text"
                  name="rent"
                  id=""
                  placeholder="Please input here"
                />
              </div>
            </div>
            <span className="divider1"></span>
            <div className="input-grp grp2">
              <div className="input-type">
                <h5>Property type</h5>
                <select name="property-type" className="select-type">
                  <option value="Flat">Flat</option>
                  <option value="PG">PG</option>
                  <option value="Apartment">Apartment</option>
                </select>
              </div>
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
                <select
                  name="gender"
                  style={{ width: "100%", height: "2.2rem" }}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </div>
        </form>

        <h2 className="addHeading">Select available Amenties</h2>
        <Amenties selectable={true} setAmenties={setAmenties}/>
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

        <div className="input-grp grp3">
          <div className="input-availability">
            <h5>Room is available from</h5>
            <input
              type="date"
              name="date"
              id=""
              placeholder="Please input here"
            />
          </div>

          <span className="divider2"></span>

          <div className="input-occupancy">
            <h5>Current Occupancy of Room</h5>
            <div className="buttons">
              <button>Single</button>
              <button>Shared</button>
            </div>
          </div>
        </div>

        <h2 className="addHeading">
          Preferences for Room Partner(select 3 atleast)
        </h2>
        <PreferenceGrid selectable={true} setPreferences={setPreferences}/>
        <Button className="submitbutton">Submit</Button>
      </div>
      <Footer />
    </>
  );
};

export default AddRoom;
