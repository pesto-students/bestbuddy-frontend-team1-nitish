import { GET_ALLPROPERTIES } from "../store/slice/property/service";
import axios from "axios";

const token = localStorage.getItem("access-token");

const bestBuddyAxios = axios.create({
  baseURL: "https://rich-lime-pig-tam.cyclic.app/",
  headers: {
    ["access-token"]: token,
  },
});

export default bestBuddyAxios;
