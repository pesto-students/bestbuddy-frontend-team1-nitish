import axios from "axios";

const token = localStorage.getItem("access-token");

const bestBuddyAxios = axios.create({
  // baseURL: process.env.REACT_APP_API_BASE_URL,
  baseURL: "http://localhost:8000/",
  headers: {
    "access-token": token,
  },
});

export default bestBuddyAxios;
