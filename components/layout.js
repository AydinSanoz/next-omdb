import Navbar from "./navbar";

export default function Layout({ children, ...props }) {
	console.log("LayoutProps", props);
	return (
		<div>
			<Navbar />
			<main>{children}</main>
		</div>
	);
}
