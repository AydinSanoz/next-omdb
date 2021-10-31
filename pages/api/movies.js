import axios from "axios";
import Cookies from "js-cookie";

export default (req, res) => {
	const { BASEURL, APIKEY } = process.env;

	axios
		.get(BASEURL, {
			method:"HEAD",
			mode:"no cors",
			headers: {
				'Access-Control-Allow-Origin': '*',
				Accept: 'application/json',
				'Content-Type': 'application/json',
		},
		withCredentials: true,
		credentials: 'same-origin',
		crossdomain: true,
			params: {
				apikey: APIKEY,
				s: req.cookies.search || "all",
				type: "movie",
			},
		})
		.then(({ data }) => res.status(200).json(data.Search))
		.catch((err) => res.status(400).json({ error: err }));
};
