import Movies from "../components/movies";
import Episodes from "../components/episode";
import Series from "../components/series";

function HomePage({ onClick }) {
	return (
		<>
			<Movies onClick={onClick} />
			<Episodes onClick={onClick} />
			<Series onClick={onClick} />
		</>
	);
}

export default HomePage;
