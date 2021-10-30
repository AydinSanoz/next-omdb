import Movies from "../components/movies";
import Episodes from "../components/episode";
import Series from "../components/series";
import Cookies from "js-cookie";

function HomePage(props) {
	return (
		<div>
			<Movies />
			{/* <Episodes />
			<Series /> */}
		</div>
	);
}

export default HomePage;
