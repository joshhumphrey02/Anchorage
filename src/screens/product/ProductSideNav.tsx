/* eslint-disable no-mixed-spaces-and-tabs */
import { ChevronRight, Heart, Minus, Navigation, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { ICurrentProduct } from "./Product";
import { addToCart } from "@/reducers/Cart";
import { useAppDispatch } from "@/redux/hook";
import LocalDB from "@/localDB/Schema";
import { CardPrice } from "@/components/ProductCard";
import { isMobile } from "react-device-detect";

function ProductSideNav({ data = {} }: ICurrentProduct) {
	const productSidebar = useRef<HTMLDivElement>(null);
	const parentRef = useRef<HTMLDivElement>(null);
	const [quantity, setQuantity] = useState(1);
	const dispatch = useAppDispatch();

	async function AddToCart() {
		if (data) {
			dispatch(
				addToCart({
					id: data.id,
					title: data.title,
					image: data.images && data.images[0],
					price: data.price,
					quantity: quantity,
					checked: false,
				})
			);
			const Ldb = new LocalDB();
			await Ldb.createObjectStore(["cart"]);
			await Ldb.updateValue(
				"cart",
				{
					id: data.id,
					title: data.title,
					image: data.images && data.images[0],
					price: data.price,
					quantity: quantity,
					checked: false,
				},
				data?.id
			);
		}
		return;
	}

	useEffect(() => {
		function animateDiv() {
			if (
				parentRef.current?.clientHeight === undefined ||
				productSidebar.current === null
			)
				return;
			window.scrollY < parentRef.current?.clientHeight - 540
				? (productSidebar.current.style.marginTop = window.scrollY + "px")
				: (productSidebar.current.style.marginTop =
						parentRef.current?.clientHeight - 540 + "px");
		}

		window.addEventListener("scroll", () => requestAnimationFrame(animateDiv));
		return () => {
			window.removeEventListener("scroll", animateDiv);
		};
	}, []);
	return (
		<>
			{isMobile ? (
				<div className="fixed bottom-0 z-50 left-0 w-full">
					<div className=" container w-full my-2 flex gap-2">
						<Button className="w-fit bg-gray-100">
							<Heart color="blue" strokeWidth={4} />
						</Button>
						<Button
							onClick={AddToCart}
							className="w-full text-base font-[RobotoBold] hover:bg-blue-500">
							Add to Cart
						</Button>
						<Button className="w-full bg-blue-200 text-base font-[RobotoBold] hover:bg-blue-300 text-primary">
							Buy Now
						</Button>
					</div>
				</div>
			) : (
				<div ref={parentRef} className=" w-full relative hidden lg:flex">
					<div ref={productSidebar} className={` w-[22.4rem]`}>
						<div className=" w-full bg-card py-4 px-3 rounded-lg">
							<div className="flex gap-2 pb-3 border-b mb-3">
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
								</div>
							</div>
							<div className=" flex justify-between pb-3 border-b items-center">
								<p className="text-bases font-[RobotoMedium]">Ship to</p>
								<p className="flex text-sm font-[RobotoLight] items-center gap-1">
									<Navigation size={15} /> Bayelsa
								</p>
							</div>
							<div className=" mt-3 pb-4 border-b">
								<h4 className="flex text-base font-[RobotoMedium] items-center gap-1">
									Delivery
									<ChevronRight size={20} />
								</h4>
								<h4 className="flex my-1 text-base font-[RobotoMedium] items-center gap-1">
									Shipping: <CardPrice price={2000} />
								</h4>
								<p className="text-sm font-[RobotoLight]">
									Estimated delivery on Feb 20, item ships within 2 days{" "}
								</p>
							</div>
							<div className=" mt-4 pb-4 border-b">
								<h4 className="flex text-base font-[RobotoMedium] items-center gap-1">
									Service
									<ChevronRight size={20} />
								</h4>
								<p className="text-sm font-[RobotoLight]">Buyer protection</p>
							</div>
							<div className=" mt-4 pb-4">
								<h4 className="flex text-base font-[RobotoMedium] items-center gap-1">
									Quantity:
								</h4>
								<div className="mt-2 flex items-center gap-3">
									<span
										onClick={() => {
											if (quantity < 2) return;
											setQuantity(quantity - 1);
										}}
										className={`${
											quantity > 1
												? "bg-primary text-white"
												: "bg-gray-300 text-foreground"
										}  rounded-full flex items-center justify-center p-1 mt-[2px]`}>
										<Minus size={13} />
									</span>
									<span className="font-[RobotoBold] text-sm m-0">
										{quantity}
									</span>
									<span
										onClick={() => setQuantity(quantity + 1)}
										className="bg-primary text-white rounded-full flex items-center justify-center p-1 mt-[2px]">
										<Plus size={13} />
									</span>
								</div>
								<p className="text-sm font-[RobotoRegular] mt-2">
									{data.stock} items in stock
								</p>
							</div>
							<div className=" my-2 flex flex-col gap-4">
								<Button
									onClick={AddToCart}
									className="w-full text-base font-[RobotoBold] hover:bg-blue-500">
									Add to Cart
								</Button>
								<Button className="w-full bg-blue-200 text-base font-[RobotoBold] hover:bg-blue-300 text-primary">
									Buy Now
								</Button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default ProductSideNav;
