import Image from "next/image";

function About(props) {
	console.log("props About", props);
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				textAlign: "center",
				marginTop: "150px",
			}}
		>
			<h1>Lorem, ipsum.</h1>
			<h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
			<h4>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
				consectetur?
			</h4>
			<p style={{ textAlign: "justify", margin: "2rem" }}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta aliquam
				unde mollitia praesentium. Cum earum blanditiis eligendi accusantium
				maxime itaque quis molestias, provident quidem saepe asperiores
				obcaecati ducimus perspiciatis commodi dolor tenetur vitae enim
				similique, alias quasi iste. Iure maiores distinctio necessitatibus
				numquam saepe dolore veniam ad ipsam enim a ducimus nulla, sunt fugiat
				expedita, itaque earum fuga? Placeat, eaque dolores! Ducimus minima
				minus aliquid temporibus tempora ea, odio commodi eius laudantium?
				Itaque, sint iste. Voluptatem corporis hic vero harum consequatur
				deleniti maiores cupiditate qui nesciunt mollitia vel ratione non natus
				quos officia reiciendis nulla aliquam, excepturi ipsam cum accusantium.
			</p>
			<h4>Lorem ipsum dolor sit amet.</h4>
			<p style={{ textAlign: "justify", margin: "2rem" }}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
				eveniet ab! Voluptas magni eum quisquam aliquid inventore dolores quo
				corporis? Dolorem, amet. Est nulla similique voluptates, suscipit quod
				quo deleniti quae quasi earum maxime eaque ipsa magni magnam aliquam
				eum. Asperiores, eaque quo nobis fuga similique ex nesciunt veritatis
				autem quibusdam consequuntur ipsa commodi sequi at nam, aperiam vel
				labore ut rem eos inventore doloremque. Odio impedit nihil incidunt quo
				veritatis nisi quas ratione porro? Fuga quisquam deserunt sed rerum quis
				voluptas? Nam fuga architecto quo praesentium aut similique officiis in
				aperiam, commodi consequuntur excepturi veniam inventore doloremque vero
				cupiditate facilis, blanditiis at odio ullam? Necessitatibus, odio
				dolores? Non consectetur, error laborum quaerat fugit est. Aspernatur
				nisi, voluptatem optio ipsam, nihil expedita alias voluptates a maiores,
				nemo similique. Provident deleniti libero modi consectetur a harum, quae
				delectus voluptatum porro laudantium repudiandae dolorem sit atque.
				Tempora dignissimos beatae nisi nam maiores eveniet tenetur natus quam
				deleniti quas nostrum nobis facere itaque, consectetur illo veritatis
				nihil omnis! Eum corporis aut consequatur aliquid, nostrum explicabo
				impedit blanditiis beatae sint tempora saepe perferendis dignissimos
				facere vero quod? Rem animi officia non recusandae, officiis eos dolorum
				porro doloribus fugit voluptatibus, consequatur iure consectetur nisi
				minus!
			</p>
		</div>
	);
}

export default About;
