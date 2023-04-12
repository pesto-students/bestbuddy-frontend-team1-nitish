import React, { useEffect, useState } from "react";
import { AiOutlineCheckSquare } from "react-icons/ai";
import BookWorm from "../../assets/preferences/Book-worm.svg";
import Fashionable from "../../assets/preferences/Fashionable.svg";
import FitnessFreak from "../../assets/preferences/Fitness-Freak.svg";
import MediaBuff from "../../assets/preferences/Media-Buff.svg";
import Nondrinker from "../../assets/preferences/Non-Drinker.svg";
import PartyAnimal from "../../assets/preferences/Party-Animal.svg";
import Professional from "../../assets/preferences/Professional.svg";
import Student from "../../assets/preferences/Student.svg";
import Vegan from "../../assets/preferences/Vegan.svg";
import MusicLover from "../../assets/preferences/Music-Lover.svg";
import PetAllowed from "../../assets/preferences/Pet-Allowed.svg";
import Religious from "../../assets/preferences/Religious.svg";
import "./PreferenceGrid.scss";

const data = [
  {
    id: 1,
    title: "Book Warm",
    src: BookWorm,
    alt: "BookWorm",
    selected: false,
  },
  {
    id: 2,
    title: "Fashionable",
    src: Fashionable,
    alt: "Fashionable",
    selected: false,
  },
  {
    id: 3,
    title: "FitnessFreak",
    src: FitnessFreak,
    alt: "FitnessFreak",
    selected: false,
  },
  {
    id: 4,
    title: "Media Buff",
    src: MediaBuff,
    alt: "MediaBuff",
    selected: false,
  },
  {
    id: 5,
    title: "Non-drinker",
    src: Nondrinker,
    alt: "Nondrinker",
    selected: false,
  },
  {
    id: 6,
    title: "PartyAnimal",
    src: PartyAnimal,
    alt: "PartyAnimal",
    selected: false,
  },
  {
    id: 7,
    title: "Professional",
    src: Professional,
    alt: "Professional",
    selected: false,
  },
  {
    id: 8,
    title: "Student",
    src: Student,
    alt: "Student",
    selected: false,
  },
  {
    id: 9,
    title: "Vegan",
    src: Vegan,
    alt: "Vegan",
    selected: false,
  },
  {
    id: 10,
    title: "Music Lover",
    src: MusicLover,
    alt: "MusicLover",
    selected: false,
  },
  {
    id: 11,
    title: "PetAllowed",
    src: PetAllowed,
    alt: "PetAllowed",
    selected: false,
  },
  {
    id: 12,
    title: "Religious",
    src: Religious,
    alt: "Religious",
    selected: false,
  },
];

const PreferenceGrid = ({
  selectable = false,
  setPreferences = () => {},
  receivedPreferences,
}) => {
  const [renderData, setRenderData] = useState(() =>
    data.map((item) => ({
      ...item,
      selected: receivedPreferences?.includes(item.title),
    }))
  );
  useEffect(() => {
    if (selectable && renderData) {
      const selectedPreferences = renderData?.filter((item) => item?.selected);
      const mappedData = selectedPreferences?.map((item) => item?.title);
      setPreferences(mappedData);
    }
  }, [renderData]);

  const handleSelectPreferences = (selected) => {
    const mappedData = renderData?.map((item) => {
      if (item?.id === selected?.id) {
        return { ...item, selected: !item?.selected };
      }
      return item;
    });
    setRenderData(mappedData);
  };
  return (
    <div className="Preferencegrid">
      <div className="grid">
        {renderData?.map((item) => (
          <div
            className={selectable ? "selectable" : ""}
            key={item?.id}
            onClick={() => selectable && handleSelectPreferences(item)}
          >
            {/* {selectable && item?.selected && (
              <AiOutlineCheckSquare className="selected-icon" />
            )} */}
            <img
              className={selectable && item?.selected ? "selects" : ""}
              src={item?.src}
              alt={item?.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreferenceGrid;
