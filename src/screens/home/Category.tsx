import ProductCategoryFetcher from "@/lib/ProductCategoryFetcher";
import { Card, CardImage, CardTitle } from "@/components/ProductCard";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

function Categories() {
	const categories = new ProductCategoryFetcher();
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // Optional: Adds smooth scrolling animation
		});
	};
	return (
		<section className="container mt-4 mb-4 sm:mb-8">
			<div className=" rounded-lg h-fit bg-card px-3 py-1">
				<div className=" pb-1 pl-0 lg:pl-10">
					<h2 className=" text-2xl font-[RobotoBold]">Categories</h2>
				</div>
				<div
					className={`${
						isMobile
							? " flex w-full text-nowrap overflow-x-auto"
							: "flex justify-evenly flex-wrap w-[90%] mx-auto"
					}  gap-3 mb-2 `}>
					{categories.categoryTitle().map((category) => (
						<Card
							key={category.title}
							className={`${
								isMobile ? "w-[11rem]  " : "w-[23%] "
							}  p-0 border-none`}>
							<Link
								state={{ link: category.link, name: category.title }}
								onClick={scrollToTop}
								to={`/${category.link}`}>
								<div className="flex justify-center">
									<CardImage
										className={`${
											isMobile
												? "min-w-[6rem] w-[6rem] h-[6rem]"
												: "w-[8rem] h-[8rem]"
										} rounded-full pb-1 object-contain`}
										src={category.image}
										alt={category.title}
									/>
								</div>
								<CardTitle className=" text-foreground text-[0.75rem] leading-4 sm:leading-7 sm:text-[1.2rem] text-wrap text-center  font-[RobotoRegular] flex justify-center mt-1 h-[2rem]">
									{category.title}
								</CardTitle>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}

export default Categories;
