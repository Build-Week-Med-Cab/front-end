import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/utils/PrivateRoute"
import Login from "./components/Login";
import WebApp from "./components/WebApp"
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <PrivateRoute exact path = '/WebApp' component={WebApp}/>
      <Route exact path="/" component={Login} />
    </div>
  </Router>
  );
}

export default App;
