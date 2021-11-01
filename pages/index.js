import Movies from "../components/movies";
import Series from "../components/series";

function HomePage({ onClick }) {
	return (
		<>
			<Movies onClick={onClick} />
			<Series onClick={onClick} />
		</>
	);
}

export default HomePage;
