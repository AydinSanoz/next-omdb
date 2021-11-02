import Navbar from "./navbar";

export default function Layout({ children, favCounter, ...props }) {
	return (
		<>
			<Navbar favCounter={favCounter} />
			<main id="main">{children}</main>
		</>
	);
}
