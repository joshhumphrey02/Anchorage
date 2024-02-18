import { Link } from "react-router-dom";
import { Card, CardImage, CardPrice, CardTitle } from "./ProductCard";
import { type IProduct } from "@/@types";

interface HCard {
	products: IProduct[];
	price?: boolean;
}

function ProductsGridTemplate({ products, price }: HCard) {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // Optional: Adds smooth scrolling animation
		});
	};
	return (
		<div
			className={`${
				price ? "lg:grid-cols-5 " : "lg:grid-cols-4 "
			} grid grid-cols-2 sm:grid-cols-3 gap-2  w-full`}>
			{products.map((item) => (
				<Card key={item.id}>
					<Link state={item.id} onClick={scrollToTop} to={`/p/${item.title}`}>
						<CardImage
							className="h-[10rem] sm:h-[16rem]"
							src={item.images[0]}
							alt="Shop personal laptops"
						/>
						<CardTitle>{item.title}</CardTitle>
						<CardPrice hidden={price} className="mt-2" price={item.price} />
					</Link>
				</Card>
			))}
		</div>
	);
}

export default ProductsGridTemplate;
