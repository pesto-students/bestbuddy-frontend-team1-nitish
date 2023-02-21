import React from "react";
import "./Amenties.scss";

import AirConditioner from "../../assets/amenties/AirConditioner.svg";
import Bath from "../../assets/amenties/Bath.svg";
import Bed from "../../assets/amenties/Bed.svg";
import DiningRoom from "../../assets/amenties/DiningRoom.svg";
import Kitchen from "../../assets/amenties/Kitchen.svg";
import LivingRoom from "../../assets/amenties/LivingRoom.svg";
import Parking from "../../assets/amenties/Parking.svg";
import Refrigerator from "../../assets/amenties/Refrigerator.svg";
import TV from "../../assets/amenties/TV.svg";
import Wifi from "../../assets/amenties/Wifi.svg";

const Amenties = () => {
  return (
    <div className="amenties">
      <h3> Amenties</h3>
      <div className="grid">
        <img src={AirConditioner} alt="AirConditioner" />
        <img src={Bath} alt="Bath" />
        <img src={Bed} alt="Bed" />
        <img src={DiningRoom} alt="DiningRoom" />
        <img src={Kitchen} alt="Kitchen" />
        <img src={LivingRoom} alt="LivingRoom" />
        <img src={Parking} alt="Parking" />
        <img src={Refrigerator} alt="Refrigerator" />
        <img src={TV} alt="TV" />
        <img src={Wifi} alt="Wifi" />
      </div>
    </div>
  );
};

export default Amenties;
