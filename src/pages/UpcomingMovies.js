import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MoviesUpcoming({ upcomings }) {
	return (
		<div className="upcomings" key="upcoming.id">
			<h1>Upcoming Movies</h1>
			{upcomings &&
				upcomings.length > 0 &&
				upcomings.map((upcomings) => {
					return (
						<div className="comings" key={upcomings.id}>
							<h2>{upcomings.title}</h2>
							<p>{upcomings.overview}</p>
						</div>
					);
				})}
		</div>
	);
}

class UpcomingMovies extends React.Component {
	state = {
		upcomings: [],
		loading: true,
		error: false,
	};
	componentDidMount() {
		axios({
			url:
				"https://api.themoviedb.org/3/movie/upcoming?api_key=f784d51211ae6f36dd6a8855e3980923&language=en-US&page=1",
			method: "GET",
		})
			.then((response) => {
				this.setState({ upcomings: response.data.results });
			})
			.catch((error) => {
				this.setState({ error: true });
			})
			.finally(() => {
				this.setState({ loading: false });
			});
	}
	render() {
		if (this.state.loading) return <p>...Loading</p>;
		if (this.state.error) return <p>Ups! something went wrong!</p>;
		return (
			<div className="App">
				<MoviesUpcoming upcomings={this.state.upcomings} />
			</div>
		);
	}
}

export default UpcomingMovies;
