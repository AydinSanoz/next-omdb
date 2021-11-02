import "../styles/globals.css";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/layout";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/dist/client/router";

function MyApp({ Component, pageProps, ...props }) {
	const [selectedMovie, setSelectedMovie] = useState();
	const [favList, setFavList] = useState([]);
	const [favCounter, setFavCounter] = useState("");
	const [selected, setSelected] = useState("true");
	const path = useRouter().pathname;

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
		<Layout favCounter={favCounter} path={path}>
			<Component
				{...pageProps}
				onClick={toggleToFav}
				favList={favList}
				selectedMovie={selectedMovie}
				selected={selected}
			/>
		</Layout>
	);
}

export default MyApp;
