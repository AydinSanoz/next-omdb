import "../styles/globals.css";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/layout";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

function MyApp({ Component, pageProps }) {
	const [selectedMovie, setSelectedMovie] = useState();
	const [favList, setFavList] = useState([]);

	useEffect(() => {
		const savedMovie = !Cookies.get("fav")
			? JSON.stringify([])
			: Cookies.get("fav");
		setFavList(JSON.parse(savedMovie));
	}, [selectedMovie]);

	function toggleToFav(val) {
		setSelectedMovie(val);
		const indexofitem = favList.findIndex((item) => item.imdbID === val.imdbID);
		console.log("index", indexofitem);
		indexofitem === -1
			? (favList = [...favList, val])
			: favList.splice(indexofitem, 1);
		setFavList(favList);
		console.log(favList);

		Cookies.set("fav", JSON.stringify(favList));
	}

	return (
		<Layout>
			<Component {...pageProps} onClick={toggleToFav} />
		</Layout>
	);
}

export default MyApp;
