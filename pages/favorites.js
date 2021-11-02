import Card from "../components/card";

function Favorites({ onClick, favList, ...props }) {
	return (
		<div>
			<h1 id="title">Favorites</h1>

			<div className="row " id="favContainer">
				{favList?.map((item, i) => (
					<Card key={i} item={item} onClick={onClick} />
				))}
			</div>
		</div>
	);
}

export default Favorites;
