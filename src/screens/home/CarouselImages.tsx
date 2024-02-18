import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const Images = [
	{
		title: "Products",
		imgUrl: "https://source.unsplash.com/500x500?macbook",
	},
	{
		title: "Products",
		imgUrl: "https://source.unsplash.com/500x500?earbuds",
	},
	{
		title: "Products",
		imgUrl: "https://source.unsplash.com/500x500?touchpad",
	},
	{
		title: "Products",
		imgUrl: "https://source.unsplash.com/500x500?earphone",
	},
	{
		title: "Products",
		imgUrl: "https://source.unsplash.com/500x500?laptop",
	},
	{
		title: "Products",
		imgUrl: "https://source.unsplash.com/500x500?smartphone",
	},
	{
		title: "Products",
		imgUrl: "https://source.unsplash.com/500x500?touchpad",
	},
];

function CarouselImages() {
	const plugin = React.useRef(
		Autoplay({ delay: 6000, stopOnInteraction: true })
	);
	return (
		<div className="p-1 w-full overflow-hidden">
			<Carousel
				plugins={[plugin.current]}
				className="w-full h-fit border mx-auto p-2 rounded-lg flex items-center"
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}>
				<CarouselContent>
					{Images.map((image, i) => (
						<CarouselItem key={i} className="w-full relative">
							<div className="flex w-full h-fit items-center justify-center">
								<img
									src={image.imgUrl}
									alt="background"
									className=" h-[25rem] w-full"
									loading="lazy"
								/>
								<Link
									to={"#"}
									className=" absolute bottom-4 right-2 p-1 text-white rounded-lg cursor-pointer bg-primary">
									<span className="text-lg font-[RobotoRegular] ">
										Explore {image.title}
									</span>
								</Link>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}

export default CarouselImages;
