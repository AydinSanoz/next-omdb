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

	const response = await fetch(
		`http://www.omdbapi.com${req.cookies.search}&apikey=10a28510`,
		[]
	);
	const data = await response.json();
	console.log(req.cookies);

	// Rest of the API logic
	res.json(data);
}
