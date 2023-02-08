import React from 'react';
import { useRoutes } from 'react-router-dom';


import './App.css';
import Routers from './Routers';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  return (
    <div className="App">
      {useRoutes(Routers(isAuthenticated))}
    </div>
  );
}

export default App;
