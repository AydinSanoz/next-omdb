import axios from "axios";
import Cookies from "js-cookie";

export default (req, res) => {
	const { BASEURL, APIKEY } = process.env;

	const respond = fetch("http://www.omdbapi.com/?apikey=10a28510&s=avatar", {
		method: "HEAD",
		mode: "no-cors",
	});
	const data = respond.json()
		})
		res.status(200).json(data.Search))
		
};
