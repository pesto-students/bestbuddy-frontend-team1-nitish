import React, { useCallback, useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import jwt_decode from "jwt-decode";
import "react-loading-skeleton/dist/skeleton.css";
import Routers from "./Routers";
import { setAuthenticated, userInfo } from "./store/slice/users/userSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const location = useLocation();

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

  // Fetch user info on every page refresh
  const fetchUserInfo = useCallback(() => {
    if (isAuthenticated) {
      dispatch(userInfo());
    }
    // eslint-disable-next-line
  }, [isAuthenticated, location?.pathname]);

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  useEffect(() => {
    checkAuthentication();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      {useRoutes(Routers(isAuthenticated))}
      <ToastContainer />
    </div>
  );
}

export default App;
