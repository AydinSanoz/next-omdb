import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

// Initialize the cors middleware
const cors = initMiddleware(
	// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
	Cors({
		// Only allow requests with GET, POST and OPTIONS
		methods: ["GET", "POST", "OPTIONS"],
	})
);

export default async function Test(req, res) {
	// Run cors
	await cors(req, res);
	const { BASEURL, APIKEY } = process.env;
	// const url = !usp
	// 	? BASEURL + `?${(apikey = APIKEY)}`
	// 	: BASEURL + `?${(apikey = APIKEY)}+&${usp.toString()}`;

	try {
		const response = await fetch(
			`http://www.omdbapi.com/?apikey=10a28510&type=movie&s=home`
		);
		const data = await response.json();
		res.json(data);
	} catch (error) {
		res.json({ Error: error });
	}

	// Rest of the API logic
}
