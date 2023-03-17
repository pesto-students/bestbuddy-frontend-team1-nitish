import React, { useState } from "react";
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
  const data = [
    { src: AirConditioner, alt: "AirConditioner" },
    { src: Bath, alt: "Bath" },
    { src: Bed, alt: "Bed" },
    { src: DiningRoom, alt: "DiningRoom" },
    { src: Kitchen, alt: "Kitchen" },
    { src: LivingRoom, alt: "LivingRoom" },
    { src: Parking, alt: "Parking" },
    { src: Refrigerator, alt: "Refrigerator" },
    { src: TV, alt: "TV" },
    { src: Wifi, alt: "Wifi" },
  ];

  // const [active, setActive] = useState(false);
  // console.log(active);
  return (
    <div className="amenties">
      <div className="grid">
        {data.map((item) => (
          <img
            src={item.src}
            alt={item.alt}
            key={item.src}
            // onClick={() => setActive(!active)}
            // className={`${active == item && "active"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Amenties;
