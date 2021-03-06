import "../styles/globals.css";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "next-pagination/dist/index.css";
import Layout from "../components/layout";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps, ...props }) {
	const [selectedMovie, setSelectedMovie] = useState();
	const [favList, setFavList] = useState([]);
	const [favCounter, setFavCounter] = useState("");
	const [selected, setSelected] = useState("true");
	const { route, asPath } = useRouter();
	const path = asPath.slice(2);

	useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
		Cookies.get("fav")
			? setFavCounter(JSON.parse(Cookies.get("fav")).length)
			: null;
	}, []);

	useEffect(() => {
		const savedMovie = !Cookies.get("fav")
			? JSON.stringify([])
			: Cookies.get("fav");
		setFavList(JSON.parse(savedMovie));
	}, [selectedMovie]);

	function toggleToFav(val) {
		setSelectedMovie(val);
		const indexOfItem = favList.findIndex(
			(item) => item?.imdbID === val?.imdbID
		);
		indexOfItem === -1
			? (favList = [...favList, val])
			: favList.splice(indexOfItem, 1);
		setFavList(favList);
		setFavCounter(favList.length);
		Cookies.set("fav", JSON.stringify(favList));
	}

	return (
		<Layout favCounter={favCounter} route={route} {...props}>
			<Component
				{...pageProps}
				onClick={toggleToFav}
				favList={favList}
				selectedMovie={selectedMovie}
				selected={selected}
				path={path}
				{...props}
			/>
		</Layout>
	);
}

// export async function getStaticProps() {
// 	const { BASEURL, APIKEY } = process.env;
// 	return {
// 		props: {
// 			BASEURL,
// 			APIKEY,
// 		},
// 	};
// }

export default MyApp;
