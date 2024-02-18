import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { CardWrapper } from "@/components/ProductCard";

const popularProducts = [
	{
		productId: "3432",
		productName: 'Macbook M1 Pro 14"',
		productImgUrl: "https://source.unsplash.com/500x500?macbook",
		productPrice: "NGN149,900",
		productCategory: "laptop",
		productStock: "NGN300,000",
	},
	{
		productId: "7633",
		productName: "Samsung Galaxy Buds 2",
		productImgUrl: "https://source.unsplash.com/500x500?earbuds",
		productPrice: "NGN39,900",
		productCategory: "phones",
		productStock: "NGN599,000",
	},
	{
		productId: "4315",
		productName: "Apple Magic Touchpad",
		productImgUrl: "https://source.unsplash.com/500x500?touchpad",
		productPrice: "NGN69,900",
		productCategory: "iPads",
		productStock: "NGN100,000",
	},
	{
		productId: "4340",
		productName: "Nothing Earbuds One",
		productImgUrl: "https://source.unsplash.com/500x500?earphone",
		productPrice: "NGN39,900",
		productCategory: "air pod",
		productStock: "NGN94,530",
	},
	{
		productId: "6534",
		productName: "Asus Zenbook Pro",
		productImgUrl: "https://source.unsplash.com/500x500?laptop",
		productPrice: "NGN89,900",
		productCategory: "laptop",
		productStock: "NGN230,000",
	},
	{
		productId: "9234",
		productName: "LG Flex Canvas",
		productImgUrl: "https://source.unsplash.com/500x500?smartphone",
		productPrice: "NGN49,900",
		productCategory: "tv",
		productStock: "NGN105,000",
	},
	{
		productId: "4314",
		productName: "Apple Magic Touchpad",
		productImgUrl: "https://source.unsplash.com/500x500?touchpad",
		productPrice: "NGN69,900",
		productCategory: "laptop",
		productStock: "NGN231,000",
	},
];

function WelcomeSection() {
	const plugin = React.useRef(
		Autoplay({ delay: 3000, stopOnInteraction: true })
	);
	return (
		<section className=" bg-slate-300 border rounded-lg w-[16rem] h-fit py-3 px-4">
			<div className=" h-[6rem] mb-4 flex flex-col justify-center">
				<h2 className=" text-2xl text-primary">Welcome Deal</h2>
				<h4 className="text-base">Single items discount</h4>
			</div>
			<Carousel
				plugins={[plugin.current]}
				className="w-[14rem] h-fit mb-5 mx-autoflex items-center"
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}>
				<CarouselContent>
					{popularProducts.map((product) => (
						<CarouselItem key={product.productId} className="w-full">
							<CardWrapper className="flex flex-col w-full h-fit items-center justify-center">
								<img
									src={product.productImgUrl}
									alt={product.productCategory}
									className=" h-[14rem] w-full  rounded-2xl border mb-2"
								/>
								<div className=" flex justify-center gap-3 items-center w-full">
									<span className="text-lg font-[RobotoBold] text-primary">
										{product.productPrice}
									</span>{" "}
									<span className="text-base font-[RobotoLight] line-through decoration-2">
										{product.productStock}
									</span>
								</div>
							</CardWrapper>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	);
}

export default WelcomeSection;
