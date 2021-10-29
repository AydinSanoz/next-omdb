import { useRouter } from "next/router";

const Search = () => {
	const router = useRouter();
	const { pid } = router.query;

	return <h1>Wlcome dynmaic</h1>;
};

export default Search;
