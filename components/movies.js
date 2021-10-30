import useSWR from "swr";
import { fetcher } from "../functions/fetcher";
import Card from "../components/card";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function Movies(props) {
	console.log("props", props);
	const [selectedMovie, setSelectedMovie] = useState();
	const [favList, setFavList] = useState([]);

	useEffect(() => {
		const savedMovie = !Cookies.get("fav")
			? JSON.stringify([])
			: Cookies.get("fav");
		setFavList(JSON.parse(savedMovie));
	}, [selectedMovie]);

	const url = "http://localhost:3000/api/movies";
	const { data, error } = useSWR(url, fetcher, {
		initialData: props,
		revalidateOnMount: true,
		revalidateOnFocus: true,
	});
	if (error) {
		console.log("error occured");
		return null;
	}
	if (!data) return <div>loading</div>;

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
		<div>
			<h1
				style={{
					backgroundColor: "gray",
					textAlign: "center",
					marginTop: "1rem",
				}}
			>
				Movies
			</h1>
			<div
				className="row"
				style={{
					overflowX: "auto",
					overflowY: "hidden",
					flexWrap: "nowrap",
				}}
			>
				{data.map((item, i) => (
					<Card key={i} item={item} onClick={toggleToFav} />
				))}
			</div>
		</div>
	);
}
