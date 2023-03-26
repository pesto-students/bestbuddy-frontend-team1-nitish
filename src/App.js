import React, { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import jwt_decode from "jwt-decode";

import Routers from "./Routers";
import "./App.scss";
import { setAuthenticated } from "./store/slice/users/userSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader/Loader";

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const isLoading = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();

  const checkAuthentication = () => {
    let accessToken = localStorage.getItem("access-token");
    if (accessToken) {
      try {
        const decoded = jwt_decode(accessToken);
        if (decoded) {
          dispatch(setAuthenticated(true));
        }
      } catch (err) {
        localStorage.removeItem("access-token");
        dispatch(setAuthenticated(false));
      }
    } else {
      dispatch(setAuthenticated(false));
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, [isAuthenticated]);

  return (
    <div className="App">
      {useRoutes(Routers(isAuthenticated))}
      <ToastContainer />
      <Loader isLoading={isLoading} />
    </div>
  );
}

export default App;
