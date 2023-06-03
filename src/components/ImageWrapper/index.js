import { useState, useEffect, useCallback } from "react";
import { Shimmer } from "../Shimmer";

const ImageWrapper = ({ imgSrc = "", style = {} }) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const checkImgLoader = useCallback(() => {
    if (imgSrc) {
      const image = new Image();
      image.onload = () => {
        setIsImgLoaded(true);
      };
      image.src = imgSrc;
    }
  }, [imgSrc]);

  useEffect(() => {
    checkImgLoader();
  }, [checkImgLoader]);

  return isImgLoaded ? (
    <img src={imgSrc} alt="image" />
  ) : (
    <Shimmer style={{ ...style }} />
  );
};

export default ImageWrapper;
