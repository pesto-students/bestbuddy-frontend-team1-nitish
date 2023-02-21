import React from "react";
import "./Preference.scss";

import BookWorm from "../../assets/preferences/Book-worm.svg";
import Fashionable from "../../assets/preferences/Fashionable.svg";
import FitnessFreak from "../../assets/preferences/Fitness-Freak.svg";
import MediaBuff from "../../assets/preferences/Media-Buff.svg";
import Nondrinker from "../../assets/preferences/Non-Drinker.svg";
import PartyAnimal from "../../assets/preferences/Party-Animal.svg";
import Professional from "../../assets/preferences/Professional.svg";
import Student from "../../assets/preferences/Student.svg";
import Vegan from "../../assets/preferences/Vegan.svg";

const Preference = () => {
  return (
    <div className="Preference">
      <h3> Preferences</h3>
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
      </div>
    </div>
  );
};

export default Preference;
