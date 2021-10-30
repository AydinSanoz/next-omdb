import Card from "../components/card";

function Contact({ data }, props) {
	console.log("ContactData", data);
	console.log("Contactprops", props);
	return (
		<div className="row">
			{data.map((item, i) => (
				<Card key={i} {...item} />
			))}
		</div>
	);
}
export async function getStaticProps(props) {
	const res = await fetch(
		process.env.BASEURL + `/?s=All&apikey=${process.env.APIKEY}`
	);
	const data = await res.json();
	return {
		props: {
			data: data.Search,
		},
	};
}

export default Contact;
