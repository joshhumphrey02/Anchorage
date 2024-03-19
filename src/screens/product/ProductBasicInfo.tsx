/* eslint-disable no-mixed-spaces-and-tabs */
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import productImage1 from "@/assets/featuredimages/findlaptop.jpg";
import productImage2 from "/categoryImages/laptop.jpeg";
import { ICurrentProduct } from "./Product";
import { CardPrice } from "@/components/ProductCard";

function ProductBasicInfo({ data }: ICurrentProduct) {
	return (
		<div className=" px-1">
			<div className=" border-b pb-2 mb-2">
				<h1 className=" flex flex-col font-[RobotoMedium] text-2xl mb-1">
					{data && data.title}
				</h1>
				<div className="h-6 flex gap-3 items-center">
					<div className="flex gap-3 font-[RobotoBold] items-center">
						<span className="flex gap-1">
							{Array(5)
								.fill("")
								.map((_, i) => (
									<Star
										key={i}
										color={i < Number(data?.rating) ? "blue" : "black"}
										strokeWidth={5}
										size={12}
									/>
								))}
						</span>
						<span className=" text-sm">{data && Number(data.rating)}</span>
					</div>
					<div className="text-sm font-[RobotoRegular]">
						<span>20 Reviews | 6 Sold</span>
					</div>
				</div>
			</div>
			<div className="flex gap-2">
				<div className="flex gap-1 items-center">
					<CardPrice
						className="font-[RobotoBold] text-xl"
						price={
							data.price
								? Math.round(
										Number(data.price) * 1000 -
											(Number(data.price) *
												1000 *
												Number(data.discountPercentage)) /
												100
								  )
								: 0
						}
					/>
					<CardPrice
						className=" text-base font-[RobotoLight] mt-2 items-center line-through"
						price={data.price ? Number(data.price) * 1000 : 0}
					/>
				</div>
				<Badge className=" text-xs h-6 p-0 mt-2 font-[RobotoBold] text-primary bg-blue-200">
					-{data && Number(data.discountPercentage)}%
				</Badge>
			</div>
			<p className=" my-2 font-[RobotoLight] text-sm">In stock</p>
			<div className="mt-6">
				<p>
					colors: <span className="text-sm font-[RobotoBold]">Gray</span>
				</p>
				<div className="flex gap-2 overflow-hidden overflow-x-scroll p-2 mt-2 whitespace-nowrap">
					<div className=" flex min-w-[5.2rem] py-1 gap-2 border rounded px-1 items-center">
						<img
							src={productImage1}
							alt="product"
							className="w-[1.8rem] h-[1.8rem]  rounded-sm"
						/>
						<p className="text-xs font-[RobotoLight]">46,500</p>
					</div>
					<div className=" flex min-w-[5.2rem] py-1 border rounded px-1 gap-2 items-center">
						<img
							src={productImage2}
							alt="product"
							className={`w-[1.8rem] h-[1.8rem] rounded-sm cursor-pointer`}
						/>
						<p className="text-xs font-[RobotoLight]">48,000</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductBasicInfo;
