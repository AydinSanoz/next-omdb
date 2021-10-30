import useSWR from "swr";
import { fetcher } from "../functions/fetcher";
import Card from "../components/card";
import Movies from "../components/movies";
import Episodes from "../components/episode";
import Series from "../components/series";

function HomePage(props) {
	return (
		<div>
			<Movies />
			<Episodes />
			<Series />
		</div>
	);
}

export default HomePage;
