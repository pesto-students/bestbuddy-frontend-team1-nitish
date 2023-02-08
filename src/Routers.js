import React from "react";
import { Navigate } from "react-router-dom";

import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import Details from "./pages/detail/Details";
import AddRoom from "./pages/Add/AddRoom";
import Profile from "./pages/profile/Profile";

const Routers = (isLoggedIn) => [
    {
        path: '/',
        element: (<Signin />)
    },
    {
        path: '/signup',
        element: (<Signup />)
    },
    {
        path: '/home',
        element: isLoggedIn ? <Home /> : <Navigate to='/' />
    },
    {
        path: '/category',
        element: isLoggedIn ? <Category /> : <Navigate to='/' />
    },
    {
        path: '/details',
        element: isLoggedIn ? <Details /> : <Navigate to='/' />
    },
    {
        path: '/addroom',
        element: isLoggedIn ? <AddRoom /> : <Navigate to='/' />
    },
    {
        path: '/profile',
        element: isLoggedIn ? <Profile /> : <Navigate to='/' />
    }
]

export default Routers;