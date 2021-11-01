import Navbar from "./navbar";

export default function Layout({ children, favCounter }) {
	return (
		<>
			<Navbar favCounter={favCounter} />
			<main>{children}</main>
		</>
	);
}
