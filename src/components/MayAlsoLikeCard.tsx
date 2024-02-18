import { IProduct } from "@/@types";
import { Card, CardImage, CardTitle } from "@/components/ProductCard";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

interface IResult {
	result: IProduct[];
}

function MayAlsoLikeCard({ result }: IResult) {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // Optional: Adds smooth scrolling animation
		});
	};
	return (
		<section className=" mt-3 container">
			<div className=" bg-card p-3 rounded-lg">
				<div className=" my-3">
					<h2 className=" text-lg font-[RobotoBold]">May also like</h2>
				</div>
				<div
					className={
						isMobile
							? "flex w-full text-nowrap overflow-x-auto gap-2"
							: "grid grid-cols-4 gap-2 justify-between"
					}>
					{result &&
						result.map((item, i) => (
							<Card key={i}>
								<Link
									state={item.id}
									onClick={scrollToTop}
									to={`/p/${item.title}`}>
									<CardImage
										className={
											isMobile
												? "h-[9rem] min-w-[9rem] sm:min-w-[12rem] sm:min-h-[11rem]"
												: "h-[12rem] w-full"
										}
										src={item.images[0]}
										alt="Shop personal laptops"
									/>
									<CardTitle className="font-[RobotoRegular]">
										{item.title}
									</CardTitle>
								</Link>
							</Card>
						))}
				</div>
			</div>
		</section>
	);
}

export default MayAlsoLikeCard;
