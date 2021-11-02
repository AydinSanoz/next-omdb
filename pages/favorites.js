import Card from "../components/card";

function Favorites({ onClick, favList, ...props }) {
	return (
		<>
			<h1 id="title">Favorites</h1>

			<div className="row ">
				{favList?.map((item, i) => (
					<Card key={i} item={item} onClick={onClick} />
				))}
			</div>
		</>
	);
}

export default Favorites;
