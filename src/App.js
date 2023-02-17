import React from "react";
import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import Routers from "./Routers";
import "./App.scss";

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return <div className="App">{useRoutes(Routers(isAuthenticated))}</div>;
}

export default App;
