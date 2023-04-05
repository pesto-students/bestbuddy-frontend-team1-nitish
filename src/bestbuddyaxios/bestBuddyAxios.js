import axios from "axios";

const token = localStorage.getItem("access-token");

const bestBuddyAxios = axios.create({
  baseURL: "https://best-buddy.onrender.com/",
  headers: {
    "access-token": token,
  },
});

export default bestBuddyAxios;
