import { useState } from "react";
import * as Icon from "../components/Icons/index";

export default function Card({ item, onClick, ...props }) {
	const noImg = "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com";

	const [data, setData] = useState([]);
	const [selected, setSelected] = useState("");

	return (
		<div className="card col-6" id="card-container">
			<img
				src={item.Poster === "N/A" ? noImg : item.Poster}
				className="card-img-top"
				alt={item.Title}
				width="200"
				height="250"
			/>
			<div className="card-body" id="card-body">
				<h5 className="card-title mx-auto">{item.Title}</h5>
				<a
					id="icon"
					onClick={() => {
						onClick(item);
					}}
				>
					{item.selected ? (
						<Icon.HeartSolid color="red" />
					) : (
						<Icon.HeartRegular color="red" />
					)}
				</a>
			</div>
		</div>
	);
}
