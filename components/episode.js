import useSWR from "swr";
import { fetcher } from "../functions/fetcher";
import Card from "./card";

export default function Episodes(props) {
	const url = "http://localhost:3000/api/";
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

	return (
		<div>
			<h1
				style={{
					backgroundColor: "gray",
					textAlign: "center",
					marginTop: "1rem",
				}}
			>
				Episodes
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
					<Card key={i} {...item} />
				))}
			</div>
		</div>
	);
}