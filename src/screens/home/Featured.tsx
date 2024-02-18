import {
	Card,
	CardImage,
	CardTitle,
	CardWrapper,
} from "@/components/ProductCard";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

function Featured() {
	const Featured = [
		{
			title: "Deals in PCs",
			image: "https://source.unsplash.com/500x500?desktop",
			link: "laptops",
			linkTitle: "Find afforable desktop here",
		},
		{
			title: "Laptops for every need",
			image: "https://source.unsplash.com/500x500?macbook",
			link: "laptops",
			linkTitle: "Find your Laptop here",
		},
		{
			title: "Amazing deals in bluetooth speakers",
			image: "https://source.unsplash.com/500x500?jbl",
			link: "lighting",
			linkTitle: "Get your amazing speakers here",
		},
	];
	return (
		<section className="my-5">
			<div className="container">
				<div
					className={`${
						isMobile
							? "flex overflow-auto gap-2 w-full whitespace-nowrap"
							: "grid grid-cols-4 gap-2 justify-between w-full"
					} `}>
					<Card
						className={
							isMobile ? " h-[15rem] min-w-[15rem] w-[15rem]" : "h-[25rem]"
						}>
						<CardTitle className=" font-[RobotoMedium] text-sm sm:text-base lg:text-lg ">
							Electronic Accessories
						</CardTitle>
						<CardWrapper className="grid grid-cols-2 gap-2">
							<CardImage
								src={"https://source.unsplash.com/500x500?1k-resistors"}
								className="md:h-[8rem] h-[9rem]"
								alt="Shop personal laptops"
							/>
							<CardImage
								src={"https://source.unsplash.com/500x500?airpods"}
								className="md:h-[8rem] h-[9rem]"
								alt="Shop personal laptops"
							/>
							<CardImage
								src={"https://source.unsplash.com/500x500?arduino"}
								className="h-[8rem] hidden lg:flex"
								alt="Shop personal laptops"
							/>
							<CardImage
								src={"https://source.unsplash.com/500x500?phone charger"}
								className="h-[8rem] hidden lg:flex"
								alt="Shop personal laptops"
							/>
						</CardWrapper>
						<Link
							state={"smartphones"}
							className="mt-2 md:mt-5  text-xs font-[RobotoMedium] text-primary"
							to={"/smartphones"}>
							Shop personal laptops
						</Link>
					</Card>
					{Featured.map((f) => (
						<Card
							key={f.title}
							className={
								isMobile ? " h-[15rem] min-w-[15rem] w-[15rem]" : "h-[25rem]"
							}>
							<CardTitle className=" font-[RobotoMedium] text-sm sm:text-base lg:text-lg text-wrap leading-5 ">
								{f.title}
							</CardTitle>
							<CardImage
								src={f.image}
								alt={f.title}
								className={isMobile ? "h-[9rem] min-w-[13rem] w-[13rem]" : ""}
							/>
							<Link
								state={f.link}
								className="md:mt-5 mt-2 text-xs font-[RobotoMedium] text-primary"
								to={`/${f.link}`}>
								{f.linkTitle}
							</Link>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}

export default Featured;
