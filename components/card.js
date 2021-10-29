import Image from "next/image";

export default function Card(props) {
	console.log("props", props);
	return (
		<div class="card " style={{ width: 180 }}>
			<img src={props.Poster} class="card-img-top" alt="..." />
			<div class="card-body">
				<h5 class="card-title">{props.Title}</h5>
				<div class="row">
					<div class="col">
						<span class="card-text">{props.Type}</span>
					</div>
					<div class="col">
						<span class="card-text">{props.Year}</span>
					</div>
				</div>

				<a href="#" class="btn btn-primary">
					Add to Fav
				</a>
			</div>
		</div>
	);
}
