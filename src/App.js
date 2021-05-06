import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartPage from "./components/CartPage";
import RegisterForm from "./components/Register";
import LoginForm from "./components/Login";

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route path="/register">
						<RegisterForm />
					</Route>
					<Route path="/login">
						<LoginForm />
					</Route>
					<Route path='/cart'>
						<CartPage />
					</Route>
					<Route path='/'>
						<HomePage />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
