import React, { useState, useEffect, useCallback, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Camera2 from "../../assets/Camera2.svg";
import { Container, ProgressBar } from "react-bootstrap";
import uploadImgs from "../../bestbuddyaxios/imgUploadHandler";
import ImageWrapper from "../ImageWrapper";
import { CustomButton } from "../CustomComponents";
import { AiFillCloseCircle } from "react-icons/ai";
import "./ImageUploader.scss";

const ImageUploader = ({ setImages = () => {} }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isUploadInProgress, setIsUploadInProgress] = useState(false);
  const [progress, setProgress] = useState(0);
  const inputRef = useRef(null);

  const handleFileUpload = async (event) => {
    event.preventDefault();
    const files = event.target.files;
    const updatedFiles = Array.from(files).map((file) => ({
      id: uuidv4(),
      file: file,
    }));
    setSelectedFiles((prev) => [...prev, ...updatedFiles]);
    setIsUploadInProgress(true);
    for (let i = 0; i < updatedFiles?.length; i++) {
      const file = updatedFiles?.[i]?.file;
      const publicId = updatedFiles?.[i]?.id;
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "bestbuddy");
      formData.append("public_id", publicId);

      const response = await uploadImgs(formData);
      const url = await response.data.secure_url.toString();
      setUploadedImages((prev) => [...prev, { url, id: publicId }]); // id for differentiating between files
      if (i === files?.length - 1) {
        setIsUploadInProgress(false);
      }
    }
  };

  const setProgressCount = useCallback(() => {
    if (selectedFiles?.length > 0) {
      const percentage = (uploadedImages?.length / selectedFiles?.length) * 100;
      setProgress(percentage);
    }
  }, [selectedFiles, uploadedImages]);

  useEffect(() => {
    setProgressCount();
  }, [setProgressCount]);

  useEffect(() => {
    setImages(uploadedImages);
    // eslint-disable-next-line
  }, [uploadedImages]);

  const handleUploadMore = (event) => {
    event.preventDefault();
    inputRef?.current?.click();
  };

  const handleRemoveImg = (item) => {
    const filteredImages = uploadedImages?.filter(
      (imgObj) => imgObj?.url !== item?.url
    );
    const fileteredSelectedFiles = selectedFiles?.filter(
      (file) => file?.id !== item?.id
    );
    setSelectedFiles(fileteredSelectedFiles);
    setUploadedImages(filteredImages);
  };

  const styleObj = {
    width: "110px",
    height: "100px",
    marginBottom: "1rem",
    borderRadius: "1rem",
  };

  return (
    <>
      <div className="imageupload">
        {uploadedImages?.length > 0 && !isUploadInProgress ? (
          <div className="img-container">
            <p className="uploadp1">Uploaded Images</p>
            <div className="uploaded-img-main-container">
              {uploadedImages?.map((item) => (
                <div style={{ position: "relative" }} key={item?.id}>
                  <ImageWrapper
                    imgSrc={item?.url}
                    style={styleObj}
                    imgStyle={styleObj}
                    showCloseIcon={true}
                  />
                  <AiFillCloseCircle
                    className="img-close-icon"
                    onClick={() => handleRemoveImg(item)}
                  />
                </div>
              ))}
            </div>
            <Container align="center" className="mt-5">
              <CustomButton title="Upload more" onClick={handleUploadMore} />
              <input
                className="custom-input-invisible"
                type="file"
                accept=".jpeg, .jpg"
                multiple
                onChange={handleFileUpload}
                ref={inputRef}
              />
            </Container>
          </div>
        ) : isUploadInProgress ? (
          <Container align="center" className="progress-bar-container">
            Image upload in progress...
            <ProgressBar animated now={progress} className="mt-3" />
            <p className="mt-3">
              {uploadedImages?.length} / {selectedFiles?.length} images uploaded
            </p>
          </Container>
        ) : (
          <>
            <label className="custom-file-upload">
              <input
                className="custom-input"
                type="file"
                accept=".jpeg, .jpg"
                multiple
                onChange={handleFileUpload}
              />
              <img className="camera2" src={Camera2} alt="Camera2" />
            </label>
            <p className="uploadp">
              Images should be in JPG/JPEG format (Max 10 images allowed)
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default ImageUploader;
