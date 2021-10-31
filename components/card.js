export default function Card({ item, onClick }) {
	const noImg = "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com";
	return (
		<div className="card container-sm" style={{ width: 200 }}>
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

			<a className="btn btn-primary" onClick={() => onClick(item)}>
				Toggle to Fav
			</a>
		</div>
	);
}
