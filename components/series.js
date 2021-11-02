import useSWR from "swr";
import { fetcher } from "../functions/fetcher";
import Card from "./card";

export default function Series({ onClick, ...props }) {
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

	return (
		<div>
			<h1 id="title">Series</h1>
			<div className="row" id="overflowH">
				{data.map((item, i) => (
					<Card key={i} item={item} onClick={onClick} />
				))}
			</div>
		</div>
	);
}
