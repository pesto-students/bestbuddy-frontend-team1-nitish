import React from "react";
import "./Amenties.scss";
import BookWorm from "../../assets/preferences/Book-worm.svg";
import Fashionable from "../../assets/preferences/Fashionable.svg";
import FitnessFreak from "../../assets/preferences/Fitness-Freak.svg";
import MediaBuff from "../../assets/preferences/Media-Buff.svg";
import Nondrinker from "../../assets/preferences/Non-Drinker.svg";
import PartyAnimal from "../../assets/preferences/Party-Animal.svg";
import Professional from "../../assets/preferences/Professional.svg";
import Student from "../../assets/preferences/Student.svg";
import Vegan from "../../assets/preferences/Vegan.svg";

const Amenties = () => {
  return (
    <div className="amenties">
      <h3> Amenties</h3>
      <div className="grid">
        <img src={BookWorm} alt="BookWorm" className="bookworm"/>
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

export default Amenties;
