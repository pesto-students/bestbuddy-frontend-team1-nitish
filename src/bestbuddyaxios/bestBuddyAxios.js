import axios from "axios";

const token = localStorage.getItem("access-token");

const bestBuddyAxios = axios.create({
  baseURL: "https://rich-lime-pig-tam.cyclic.app/",
  // baseURL: "http://localhost:8000/",
  headers: {
    "access-token": token,
  },
});

export default bestBuddyAxios;
