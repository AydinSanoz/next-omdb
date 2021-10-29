import useSWR from "swr";
import { fetcher } from "../functions/fetcher";
import Card from "../components/card";

function HomePage(props) {
	const url = "http://localhost:3000/api/movies";
	const { data, error } = useSWR(url, fetcher);
	if (error) return <div>error occured</div>;
	if (!data) return <div>loading</div>;
	console.log(data);

	return (
		<div>
			{data.map((item, i) => (
				<Card key={i} {...item} />
			))}
		</div>
	);
}

export default HomePage;
