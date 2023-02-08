import React from "react";
import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";

import Routers from "./Routers";
import "./App.css";

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return <div className="App">{useRoutes(Routers(isAuthenticated))}</div>;
}

export default App;
