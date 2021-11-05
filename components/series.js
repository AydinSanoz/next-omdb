import Card from "./card";
import { useState } from "react";
import Pagination from "next-pagination";
import { useEffect } from "react";
import axios from "axios";

export default function Series({ onClick, favList, selected, path, ...props }) {
	const [series, setSeries] = useState([]);
	const [seriesData, setSeriesData] = useState([]);
	const APIKEY = "10a28510";
	const BASEURL = "https://www.omdbapi.com";
	useEffect(() => {
		const query = new URLSearchParams({
			apikey: APIKEY,
			type: "series",
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
				setSeriesData(data);
			})
			.catch((err) => console.log({ err: err }));
	}, [path]);

	seriesData?.Search?.map((item) => {
		const index = favList.findIndex((favItem) => {
			return item.imdbID === favItem.imdbID;
		});
		if (index === -1) {
			series = [...series, item];
		} else {
			series = [...series, { ...item, selected }];
		}
	});
	return (
		<div id="rollerContainer">
			<h1 id="title">Series</h1>
			<div className="row" id="overflowH">
				{series.map((item, i) => (
					<Card key={i} item={item} onClick={onClick} />
				))}
			</div>
			<Pagination total={seriesData.totalResults} size="10" />
		</div>
	);
}
