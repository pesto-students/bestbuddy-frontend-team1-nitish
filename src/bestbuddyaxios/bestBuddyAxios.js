import axios from "axios";

const token = localStorage.getItem("access-token");

const bestBuddyAxios = axios.create({
  baseURL: "https://best-buddy.onrender.com/",
  // baseURL: "http://localhost:8000/",
  headers: {
    "access-token": token,
  },
});

export default bestBuddyAxios;
