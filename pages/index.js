import useSWR from "swr";
import { fetcher } from "../functions/fetcher";
import Card from "../components/card";

function HomePage(props) {
	const url = "http://localhost:3000/api/movies";
	console.log("Indexprops", props);

	const { data, error } = useSWR(url, fetcher, {
		initialData: props,
		revalidateOnMount: true,
		revalidateOnFocus: true,
	});

	if (error) return <div>error occured</div>;
	if (!data) return <div>loading</div>;
	console.log(data);

	return (
		<div>
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

export default HomePage;
