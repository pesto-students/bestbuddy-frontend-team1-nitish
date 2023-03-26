import React from "react";
import { ColorRing } from "react-loader-spinner";
import "./Loader.scss";

const Loader = ({ isLoading }) => {
  return (
    <div className="loader">
      <ColorRing
        visible={isLoading}
        height="200"
        width="200"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#152C5B", "#FF498B", "#3252DF", "#D9D9D9", "#585757"]}
      />
    </div>
  );
};

export default Loader;
