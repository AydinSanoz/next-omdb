import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar(params) {
	return (
		<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
			<div class="container-fluid">
				<a class="navbar-brand" href="/">
					<Image src={require("../assets/imdb.png")} width="40" height="40" />
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="/">
								Home
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="about">
								About
							</a>
						</li>

						<li class="nav-item">
							<a class="nav-link active">Contact</a>
						</li>
					</ul>
					<form class="d-flex" action="/">
						<input
							class="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
							name="s"
						/>
						input
						<button class="btn btn-outline-success" type="submit">
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
}
