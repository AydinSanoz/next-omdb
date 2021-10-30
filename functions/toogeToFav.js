export default function toggleToFav(val) {
	setSelectedMovie(val);
	const indexofitem = favList.findIndex((item) => item.imdbID === val.imdbID);
	console.log("index", indexofitem);
	indexofitem === -1
		? (favList = [...favList, val])
		: favList.splice(indexofitem, 1);
	setFavList(favList);
	console.log(favList);

	Cookies.set("fav", JSON.stringify(favList));
}
