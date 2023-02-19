import React from "react";
import { Navigate } from "react-router-dom";

import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import Details from "./pages/details/Details";
import AddRoom from "./pages/Add/AddRoom";
import Profile from "./pages/profile/Profile";

const Routers = (isLoggedIn) => [
    {
        path: '/',
        element: (<Home />)
    },
    {
        path: '/signup',
        element: (<Signup />)
    },
    {
        path: '/signin',
        element: <Signin />
    },
    {
        path: '/category',
        element: isLoggedIn ? <Category /> : <Navigate to='/signin' />
    },
    {
        path: '/details/:id',
        element: isLoggedIn ? <Details /> : <Navigate to='/signin' />
    },
    {
        path: '/addroom',
        element: isLoggedIn ? <AddRoom /> : <Navigate to='/signin' />
    },
    {
        path: '/profile',
        element: isLoggedIn ? <Profile /> : <Navigate to='/signin' />
    }
]

export default Routers;