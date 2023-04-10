import React, { useEffect, useState } from "react";
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
import Dryer from "../../assets/amenties/Dryer.svg";
import "./Amenties.scss";

const data = [
  {
    id: 1,
    title: "Air conditioner",
    src: AirConditioner,
    alt: "AirConditioner",
    selected: false,
  },
  { id: 2, title: "Bath", src: Bath, alt: "Bath", selected: false },
  { id: 3, title: "Bed", src: Bed, alt: "Bed", selected: false },
  {
    id: 4,
    title: "Dining Room",
    src: DiningRoom,
    alt: "DiningRoom",
    selected: false,
  },
  { id: 5, title: "Kitchen", src: Kitchen, alt: "Kitchen", selected: false },
  {
    id: 6,
    title: "Living Room",
    src: LivingRoom,
    alt: "LivingRoom",
    selected: false,
  },
  { id: 7, title: "Parking", src: Parking, alt: "Parking", selected: false },
  {
    id: 8,
    title: "Refrigerator",
    src: Refrigerator,
    alt: "Refrigerator",
    selected: false,
  },
  { id: 9, title: "TV", src: TV, alt: "TV", selected: false },
  { id: 10, title: "WiFi", src: Wifi, alt: "Wifi", selected: false },
  { id: 11, title: "Dryer", src: Dryer, alt: "Dryer", selected: false },
];

const Amenties = ({
  selectable = false,
  disableSelect = false,
  setAmenties = () => {},
  receivedAmenties,
}) => {
  const [renderData, setRenderData] = useState(() =>
    data.map((item) => ({
      ...item,
      selected: receivedAmenties?.includes(item.title),
    }))
  );

  useEffect(() => {
    if (selectable && renderData) {
      const selectedAmenties = renderData?.filter((item) => item?.selected);
      const mappedData = selectedAmenties?.map((item) => item?.title);
      setAmenties(mappedData);
    }
  }, [renderData]);

  const handleSelectAmenties = (selected) => {
    if (disableSelect) return;

    const mappedData = renderData?.map((item) => {
      if (item?.id === selected?.id) {
        return { ...item, selected: !item?.selected };
      }
      return item;
    });
    setRenderData(mappedData);
  };

  return (
    <div className="amenties">
      <div className="grid">
        {renderData?.map((item) => (
          <div
            className={selectable && "selectable"}
            key={item?.id}
            onClick={() => selectable && handleSelectAmenties(item)}
          >
            <img
              className={selectable && item?.selected ? "selectss" : ""}
              src={item.src}
              alt={item.alt}
              key={item.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenties;
