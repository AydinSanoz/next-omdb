import axios from "axios";

export default (req, res) => {
	const { BASEURL, APIKEY } = process.env;
	axios
		.get(BASEURL, {
			params: {
				apikey: APIKEY,
				s: "avatar",
			},
		})
		.then(({ data }) => res.status(200).json(data.Search));
};
