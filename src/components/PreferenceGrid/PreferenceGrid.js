import React from "react";
import "./PreferenceGrid.scss";

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

const PreferenceGrid = () => {
  return (
    <div className="Preferencegrid">
      <div className="grid">
        <img src={BookWorm} alt="BookWorm" />
        <img src={Fashionable} alt="Fashionable" />
        <img src={FitnessFreak} alt="FitnessFreak" />
        <img src={MediaBuff} alt="MediaBuff" />
        <img src={Nondrinker} alt="Nondrinker" />
        <img src={PartyAnimal} alt="PartyAnimal" />
        <img src={Professional} alt="Professional" />
        <img src={Student} alt="Student" />
        <img src={Vegan} alt="Vegan" />
        <img src={MusicLover} alt="MusicLover" />
        <img src={PetAllowed} alt="PetAllowed" />
        <img src={Religious} alt="Religious" />
      </div>
    </div>
  );
};

export default PreferenceGrid;
