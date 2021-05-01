import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import "./App.css"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-gray-500">
      <Navbar />
        <Switch>
          <Route path="/cart">
            "Cart"
          </Route>
          <Route path="/">
          <HomePage />
          </Route>
      </Switch>
      </div>
      </Router>
  );
}

export default App;
