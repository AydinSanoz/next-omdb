import { useEffect, useState } from "react";
import * as Icon from "../components/Icons/index";

export default function Card({ item, onClick, ...props }) {
	const noImg = "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com";

	const [data, setData] = useState([]);
	const [selected, setSelected] = useState("");

	return (
		<div className="card col-6" style={{ width: 200 }}>
			<img
				src={item.Poster === "N/A" ? noImg : item.Poster}
				className="card-img-top"
				alt={item.Title}
				width="200"
				height="250"
			/>
			<div className="card-body">
				<h5 className="card-title mx-auto">{item.Title}</h5>
			</div>
			<a
				id="icon"
				onClick={() => {
					onClick(item);
				}}
			>
				<Icon.HeartRegular color="red" />
			</a>
		</div>
	);
}
