import React from "react";
import "./App.css";
import axios from "axios";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
	Link,
} from "react-router-dom";
import PlayingMovies from "./pages/PlayingMovies";
import PopularsMovies from "./pages/PopularsMovies";
import RatedsMovies from "./pages/RatedMovies";
import UpcomingMovie from "./pages/UpcomingMovies";
import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/now-playing" component={PlayingMovies} />
					<Route exact path="/popular" component={PopularsMovies} />
					<Route exact path="/top-rated" component={RatedsMovies} />
					<Route exact path="/upcoming" component={UpcomingMovie} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
