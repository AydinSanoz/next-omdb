import useSWR from "swr";
import { fetcher } from "../functions/fetcher";
import Card from "../components/card";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function Movies({ onClick }) {
	const url = "http://localhost:3000/api/movies";
	const { data, error } = useSWR(url, fetcher, {
		// initialData: props,
		revalidateOnMount: true,
		revalidateOnFocus: true,
	});
	if (error) {
		console.log("error occured");
		return null;
	}
	if (!data) return <div>loading</div>;

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
					<Card key={i} item={item} onClick={onClick} />
				))}
			</div>
		</div>
	);
}
