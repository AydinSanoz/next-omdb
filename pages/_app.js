import "../styles/globals.css";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import { createContext, useState } from "react";
import { SearchContext } from "../context/searchContext";

function MyApp({ Component, pageProps, props }) {
	const [inputVal, setInputVal] = useState("");
	console.log("MYAPPPageProps", pageProps);
	console.log("MYAPPProps", props);

	const onChange = (e) => {
		setInputVal(e.target.value);
		console.log(e.target.value);
	};

	return (
		<SearchContext.Provider value={inputVal}>
			<Layout>
				<Component {...pageProps} onChange={onChange} />;
			</Layout>
		</SearchContext.Provider>
	);
}

export default MyApp;
