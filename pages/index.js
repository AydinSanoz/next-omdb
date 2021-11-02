import Movies from "../components/movies";
import Series from "../components/series";

function HomePage({ onClick, favList, selectedMovie, ...props }) {
	return (
		<>
			<Movies onClick={onClick} />
			<Series onClick={onClick} />
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
