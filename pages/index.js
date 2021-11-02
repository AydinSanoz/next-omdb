import Movies from "../components/movies";
import Series from "../components/series";

function HomePage(props) {
	return (
		<>
			<Movies {...props} />
			<Series {...props} />
		</>
	);
}

// export async function getStaticProps() {
// 	const res = await fetch("http://www.omdbapi.com/?apikey=10a28510&s=avatar");
// 	const data = await res.json();

// 	return {
// 		props: {
// 			data: data.Search,
// 		},
// 	};
// }

export default HomePage;
