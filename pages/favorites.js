import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Card from "../components/card";

function Favorites({ onClick }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		const savedMovie = !Cookies.get("fav")
			? JSON.stringify([])
			: Cookies.get("fav");
		setData(JSON.parse(savedMovie));
	}, [onClick]);

	return (
		<div>
			<h1 id="title">Favorites</h1>

			<div className="row" id="overflowH">
				{data?.map((item, i) => (
					<Card key={i} item={item} onClick={onClick} />
				))}
			</div>
		</div>
	);
}

export default Favorites;
