import { useState } from "react";
import "./Hamburger.scss";

const Hamburger = () => {
  const [burger, setBurger] = useState(false);
  // console.log(burger);
  return (
    // <div
    //   className={burger ? "hamburger active" : "hamburger"}
    //   onClick={() => setBurger(!burger)}
    // >
    <div className="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
