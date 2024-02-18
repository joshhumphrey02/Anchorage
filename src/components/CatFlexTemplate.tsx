import { Card, CardImage, CardTitle } from "@/components/ProductCard";
import ProductCategoryFetcher from "@/lib/ProductCategoryFetcher";
import { Link } from "react-router-dom";

interface ICat {
	state: string;
}

function CatFlexTemplate({ state }: ICat) {
	const categories = new ProductCategoryFetcher();
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div className=" rounded-lg h-fit bg-card mb-4 pt-5 pb-12 px-3">
			<div className=" h-6 pl-10">
				<h2 className=" text-2xl font-[RobotoBold]">Categories</h2>
			</div>
			<div className=" flex justify-evenly flex-wrap gap-2 mb-2 w-[90%] mx-auto">
				{categories.subCategory(state)?.map((category) => (
					<Card
						key={category.subTitle}
						className="w-[23%] h-[9rem] bg-transparent p-0 border-none">
						<Link
							state={category.subLink}
							onClick={scrollToTop}
							to={`/${category.subLink}`}>
							<div className="flex justify-center">
								<CardImage
									className="w-[7rem] h-[7rem] bg-gray-300 rounded-full"
									src={""}
									alt={category.subTitle}
								/>
							</div>
							<CardTitle className=" text-foreground text-[1rem] font-[RobotoRegular] flex justify-center mt-0 h-[2rem]">
								{category.subTitle}
							</CardTitle>
						</Link>
					</Card>
				))}
			</div>
		</div>
	);
}

export default CatFlexTemplate;
