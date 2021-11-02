import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
import Card from "../components/card";
import { useState } from "react";
import Pagination from "next-pagination";

export default function Movies({ onClick, favList, selected, ...props }) {
	const [movies, setMovies] = useState([]);

	const url = "http://localhost:3000/api/movies";
	const { data, error } = useSWR(url, fetcher, {
		// initialData: props,
		revalidateOnMount: true,
		revalidateOnFocus: true,
	});

	if (error) {
		console.log("error occured");
		return <h1>Not Found Try another Search</h1>;
	}
	if (!data) return <div>loading</div>;

	data?.Search?.map((item) => {
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
			<Pagination total={parseInt(data.totalResults)} size="10" />
		</div>
	);
}
