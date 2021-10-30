import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import FavCard from "../components/favCard";

function Favorites(props) {
	console.log("favorites", props);
	const [data, setData] = useState([]);
	console.log(data);
	useEffect(() => {
		const savedMovie = !Cookies.get("fav")
			? JSON.stringify([])
			: Cookies.get("fav");
		setData(JSON.parse(savedMovie));
	}, []);

	return (
		<div>
			<h1
				style={{
					backgroundColor: "gray",
					textAlign: "center",
					marginTop: "1rem",
				}}
			>
				Favorites
			</h1>
			<div
				className="row"
				style={{
					overflowX: "auto",
					overflowY: "hidden",
					flexWrap: "nowrap",
				}}
			>
				{data?.map((item, i) => (
					<FavCard key={i} {...item} />
				))}
			</div>
		</div>
	);
}
export async function getStaticProps(context) {
	return {
		props: {
			name: "Aydın",
		},
	};
}

export default Favorites;
