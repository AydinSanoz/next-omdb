module.exports = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: "http:///www.omdbapi.com/:path*",
			},
		];
	},
};
