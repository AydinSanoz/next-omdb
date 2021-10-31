import Movies from "../components/movies";
import Episodes from "../components/episode";
import Series from "../components/series";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

function HomePage({ onClick }) {
	return (
		<div>
			<Movies onClick={onClick} />
			<Episodes onClick={onClick} />
			<Series onClick={onClick} />
		</div>
	);
}

export default HomePage;
