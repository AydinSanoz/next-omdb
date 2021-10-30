import Link from "next/link";
export default function Card(props) {
	console.log("props", props);
	const noImg = "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com";

	return (
		<div className="card container-sm" style={{ width: 200 }}>
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
			<Link href="#">
				<a className="btn btn-primary">Add to Fav</a>
			</Link>
		</div>
	);
}
