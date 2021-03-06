import Image from "next/image";
import Link from "next/link";
import * as Icon from "./Icons";

export default function Navbar({ route, ...props }) {
	return (
		<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link href="/favorites">
					<a id="avatar">
						<Icon.UserTieSolid color="white" />
						<span id="counterSpan">{props.favCounter}</span>
					</a>
				</Link>
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
					className="collapse navbar-collapse popUpContent"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 " id="navbar-nav">
						<li className="nav-item">
							<Link href="/">
								<a
									className={route === "/" ? "nav-link active" : "nav-link"}
									aria-current="page"
								>
									Home
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/about">
								<a
									className={
										route === "/about" ? "nav-link active" : "nav-link"
									}
								>
									About
								</a>
							</Link>
						</li>

						<li className="nav-item">
							<Link href="/favorites">
								<a
									className={
										route === "/favorites" ? "nav-link active" : "nav-link"
									}
								>
									Favorites
								</a>
							</Link>
						</li>
					</ul>

					<form className="d-flex " action="/">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Enter a keyword"
							aria-label="Search"
							name="s"
						/>
						input
						<button className="btn btn-outline-success" type="submit">
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
}
