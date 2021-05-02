import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import "./App.css"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CartPage from "./components/CartPage";

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Switch>
          <Route path="/cart">
            <CartPage/>
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
