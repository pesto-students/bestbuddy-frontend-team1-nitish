import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Camera2 from "../../assets/Camera2.svg";
import { Button } from "react-bootstrap";
import "./ImageUploader.scss";

const ImageUploader = ({ setImages = () => {} }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleFileInput = (e) => {
    setSelectedFiles([...selectedFiles, ...e.target.files]);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const publicId = uuidv4();
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "bestbuddy");
      formData.append("public_id", publicId);

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dfshf22du/image/upload`,
        formData
      );
      const url = await response.data.secure_url.toString();
      setUploadedImages((prev) => [...prev, url]);
    }
  };

  useEffect(() => {
    setImages(uploadedImages);
  }, [uploadedImages]);

  return (
    <>
      <div className="imageupload">
        {uploadedImages?.length > 0 ? (
          <div className="img-container">
            <p className="uploadp1">Uploaded Files</p>
            {uploadedImages?.map((item, index) => (
              <img
                key={`${item}--${index}`}
                src={item}
                alt="img-uploaded"
                className="uploaded-images"
              />
            ))}
          </div>
        ) : (
          <>
            <label className="custom-file-upload">
              <input
                className="custom-input"
                type="file"
                multiple
                onChange={handleFileInput}
              />
              <img className="camera2" src={Camera2} alt="Camera2" />
            </label>
            {selectedFiles.length > 0 ? (
              <p className="uploadp1">Selected Files</p>
            ) : (
              ""
            )}
            {selectedFiles.length > 0 ? (
              selectedFiles?.map((item, index) => (
                <p key={`${item}--${index}`} className="uploadp1">
                  {index + 1}
                  {item.name}
                </p>
              ))
            ) : (
              <p className="uploadp1">
                Click or Touch camera icon to select files
              </p>
            )}
            <Button className="uploadbutton" onClick={handleFileUpload}>
              Click Here to upload images
            </Button>

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
