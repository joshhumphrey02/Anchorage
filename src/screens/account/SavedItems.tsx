import { Link } from "react-router-dom";
import { useFetchProductsQuery } from "@/api/ProductApi";
import { Button } from "@/components/ui/button";
import { CardPrice } from "@/components/ProductCard";
import { Trash } from "lucide-react";

function SavedItems() {
	const { data } = useFetchProductsQuery({ limit: 6, skip: 0 });
	return (
		<section className="bg-card py-3 rounded-lg">
			<h1 className="text-xl mb-3 border-b font-[RobotoMedium] px-4 pb-3">
				Saved Items ({data?.total})
			</h1>
			<div className=" px-3 flex flex-col gap-2 mt-4">
				{data &&
					data.products.map((order) => (
						<div className=" grid grid-cols-[5rem,auto,6rem] sm:grid-cols-[10rem,auto,8rem] font-[Robotobold] gap-2 px-2 py-3 border h-fit rounded-lg">
							<Link to={`/p/`} className="flex justify-center items-center">
								<img
									src={order.images[0]}
									alt={order.title}
									className=" w-[5rem] h-[5rem] sm:w-[6rem] sm:h-[6rem] rounded-lg"
								/>
							</Link>
							<div className="flex flex-col gap-1 h-full justify-between pb-3">
								<Link state={"product.id"} to={`/p/`}>
									<h2 className="font-[RobotoRegular] text-sm sm:text-lg lg:text-base">
										{order.title}
									</h2>
								</Link>
								<CardPrice price={order.price * 1000} />
							</div>
							<div className=" flex flex-col gap-3">
								<div className=" flex items-center justify-end gap-3 pr-2">
									<Button>Add to Cart</Button>
								</div>
								<div className="mt-2 flex items-center justify-end gap-3 pr-2">
									<Button variant={"ghost"} className="text-primary flex gap-2">
										<Trash size={18} /> Remove
									</Button>
								</div>
							</div>
						</div>
					))}
			</div>
		</section>
	);
}

export default SavedItems;
