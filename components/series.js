import useSWR from "swr";
import { fetcher } from "../functions/fetcher";
import Card from "./card";
import { useState } from "react";

export default function Series({ onClick, favList, selected, ...props }) {
	const [series, setSeries] = useState([]);
	const url = "http://localhost:3000/api/series";
	const { data, error } = useSWR(url, fetcher, {
		// initialData: props,
		revalidateOnMount: true,
		revalidateOnFocus: true,
	});
	if (error) {
		console.log("error occured");
		return <h1>Not Found Try another serie Search</h1>;
	}
	if (!data) return <div>loading</div>;

	data.map((item) => {
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
		<div>
			<h1 id="title">Series</h1>
			<div className="row" id="overflowH">
				{series.map((item, i) => (
					<Card key={i} item={item} onClick={onClick} />
				))}
			</div>
		</div>
	);
}
