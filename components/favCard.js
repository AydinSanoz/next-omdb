import { useState } from "react";

export default function FavCard(props) {
	const noImg = "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com";
	const [favList, setFavList] = useState([]);
	console.log("favList", favList);

	return (
		<div className="card container-sm" style={{ width: 400 }}>
			<img
				src={props.Poster === "N/A" ? noImg : props.Poster}
				className="card-img-top"
				alt={props.Title}
				width="200"
				height="250"
			/>
			<div className="card-body">
				<h5 className="card-title mx-auto">{props.Title}</h5>
			</div>

			<a className="btn btn-primary" onClick={() => onClick(item)}>
				Add to Fav
			</a>
		</div>
	);
}
