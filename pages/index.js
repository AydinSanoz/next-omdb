import Movies from "../components/movies";
import Series from "../components/series";

function HomePage(props) {
	return (
		<>
			<Movies {...props} />
			{/* <Series {...props} /> */}
		</>
	);
}
export default HomePage;
