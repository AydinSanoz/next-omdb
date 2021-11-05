import Card from "../components/card";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Pagination from "next-pagination";

export default function Movies({ onClick, favList, selected, path, ...props }) {
	const [movies, setMovies] = useState([]);
	const [movieData, setMovieData] = useState([]);
	const [total, setTotal] = useState("");
	const APIKEY = "10a28510";
	const BASEURL = "http://www.omdbapi.com";

	useEffect(() => {
		const query = new URLSearchParams({
			apikey: APIKEY,
			type: "movie",
			s: "avatar",
		});
		const newQuery = new URLSearchParams(path);
		for (const [key, value] of newQuery.entries()) {
			if (key === "s") {
				query.set("s", value);
			}
			if (key === "page") {
				query.set("page", value);
			}
		}
		axios
			.get(BASEURL, {
				params: query,
			})
			.then(({ data }) => {
				setMovieData(data);
				setTotal(Number(data?.totalResults));
			})
			.catch((err) => console.log({ err: err }));
	}, [path]);

	movieData?.Search?.map((item) => {
		const index = favList.findIndex((favItem) => {
			return item.imdbID === favItem.imdbID;
		});
		if (index === -1) {
			movies = [...movies, item];
		} else {
			movies = [...movies, { ...item, selected }];
		}
	});

	return (
		<div id="rollerContainer">
			<h1 id="title">Movies</h1>
			<div className="row" id="overflowH">
				{movies?.map((item, i) => (
					<Card key={i} item={item} onClick={onClick} />
				))}
			</div>
			<Pagination total={total} />
		</div>
	);
}
