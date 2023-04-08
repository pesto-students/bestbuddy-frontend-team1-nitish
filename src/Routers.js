import React from "react";
import { Navigate } from "react-router-dom";

import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import Details from "./pages/details/index";
import AddRoom from "./pages/Add/AddRoom";
import Profile from "./pages/profile/Profile";
import Preference from "./pages/preference/Preference";
import Setting from "./pages/settings/Setting";
import NotFound from "./pages/404/NotFound";
import MyListings from "./pages/mylistings/MyListings";

const Routers = (isLoggedIn) => [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/category/:categoryname",
    element: isLoggedIn ? <Category /> : <Navigate to="/signin" />,
  },
  {
    path: "/details/:id",
    element: isLoggedIn ? <Details /> : <Navigate to="/signin" />,
  },
  {
    path: "/addroom",
    element: isLoggedIn ? <AddRoom /> : <Navigate to="/signin" />,
  },
  {
    path: "/profile/:mode",
    element: isLoggedIn ? <Profile /> : <Navigate to="/signin" />,
  },
  {
    path: "/mylistings",
    element: isLoggedIn ? <MyListings /> : <Navigate to="/signin" />,
  },
  {
    path: "/preference",
    element: isLoggedIn ? <Preference /> : <Navigate to="/signin" />,
  },
  {
    path: "/setting",
    element: isLoggedIn ? <Setting /> : <Navigate to="/signin" />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default Routers;
