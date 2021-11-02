import Navbar from "./navbar";

export default function Layout({ children, favCounter, ...props }) {
	return (
		<>
			<Navbar favCounter={favCounter} {...props} />
			<main id="main">{children}</main>
		</>
	);
}
