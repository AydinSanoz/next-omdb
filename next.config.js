module.exports = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: "http://http://www.omdbapi.com/:path*",
			},
		];
	},
};
