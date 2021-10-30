import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import { useState } from "react";
import { Nav } from "react-bootstrap";

export default function Navbar(props) {
	const [inputval, setInputval] = useState("");
	const onChange = (e) => {
		setInputval(e.target.value);
	};
	const onClick = () => {
		Cookies.set("search", inputval);
	};
	return (
		<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link href="/">
					<a className="navbar-brand">
						<Image src={require("../assets/imdb.png")} width="40" height="40" />
					</a>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
					style={{ display: "flex" }}
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link href="/">
								<a className="nav-link active" aria-current="page">
									Home
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="about">
								<a className="nav-link">About</a>
							</Link>
						</li>

						<li className="nav-item">
							<Link href="favorites">
								<a className="nav-link active">Favorites</a>
							</Link>
						</li>
					</ul>
					<form className="d-flex" action="/">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
							name="s"
							onChange={onChange}
						/>
						input
						<button
							className="btn btn-outline-success"
							type="submit"
							onClick={onClick}
						>
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
}
