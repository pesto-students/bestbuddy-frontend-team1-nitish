import axios from "axios";

const uploadImgs = async (formData) => {
  return axios.post(`${process.env.REACT_APP_CLOUDINARY_BASE_URL}`, formData);
};

export default uploadImgs;