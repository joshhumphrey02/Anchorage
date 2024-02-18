import { CardPrice } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import LocalDB from "@/localDB/Schema";
import { checkItem, decreaseQty, increaseQty } from "@/reducers/Cart";
import { useAppDispatch } from "@/redux/hook";
import { Heart, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { DeleteItem } from "./DeleteItem";
import { type ICart } from "@/@types";

interface CItem {
	product: ICart;
}

function CartItem({ product }: CItem) {
	const dispatch = useAppDispatch();
	return (
		<div
			key={product.id}
			className=" grid grid-cols-[.9rem,3.1rem,auto,6rem] sm:grid-cols-[1.1rem,4.5rem,auto,8rem] font-[Robotobold] gap-2 py-3 border-b h-fit">
			<div className="flex items-center">
				<input
					onClick={() => {
						(async () => {
							if (product.id === undefined) return;
							const Ldb = new LocalDB();
							await Ldb.createObjectStore(["cart"]);
							await Ldb.updateValue(
								"cart",
								{ checked: !product.checked },
								product.id
							);
							dispatch(checkItem({ id: product.id }));
						})();
					}}
					type="checkbox"
					name=""
					checked={product.checked ? true : false}
					id="selectAll"
					className=" size-3 sm:size-4"
				/>
			</div>
			<Link state={product.id} to={`/p/${product.title}`}>
				<img
					src={product.image}
					alt={product.title}
					className=" w-[3rem] h-[3rem] sm:w-[5rem] sm:h-[5rem] rounded-lg"
				/>
			</Link>
			<div className="flex flex-col gap-1 h-full justify-between pb-3">
				<Link state={product.id} to={`/p/${product.title}`}>
					<h2 className="font-[RobotoRegular] text-sm sm:text-lg lg:text-base">
						{product.title}
					</h2>
				</Link>
				<CardPrice
					className="text-xs sm:text-base"
					price={product.price ? product.price * 1000 : 0}
				/>
			</div>
			<div className=" flex flex-col gap-3">
				<div className="flex justify-end gap-8 sm:gap-3 mr-2">
					<Button variant={"ghost"} className="p-0 sm:p-2 h-fit w-fit">
						<Heart color="blue" />
					</Button>
					<DeleteItem id={product.id ? product.id : -1} />
				</div>
				<div className="mt-0 sm:mt-2 flex items-center justify-end gap-3 pr-2">
					<span
						onClick={() => {
							(async () => {
								if (product.price === undefined || product.quantity < 2) return;
								const Ldb = new LocalDB();
								await Ldb.createObjectStore(["cart"]);
								await Ldb.updateValue(
									"cart",
									{
										price: product.price - product.price / product.quantity,
										quantity: product.quantity - 1,
									},
									product.id
								);
								dispatch(decreaseQty({ id: product.id }));
							})();
						}}
						className={`${
							product.quantity > 1
								? "bg-primary text-white"
								: "bg-gray-300 text-foreground"
						}  cursor-pointer rounded-full flex items-center justify-center p-1 mt-0 sm:mt-[2px]`}>
						<Minus size={16} />
					</span>
					<span className="font-[RobotoBold] text-sm m-0">
						{product.quantity}
					</span>
					<span
						onClick={() => {
							(async () => {
								if (product.price === undefined) return;
								const Ldb = new LocalDB();
								await Ldb.createObjectStore(["cart"]);
								await Ldb.updateValue(
									"cart",
									{
										price: product.price + product.price / product.quantity,
										quantity: product.quantity + 1,
									},
									product.id
								);
								dispatch(increaseQty({ id: product.id }));
							})();
						}}
						className="bg-primary text-white cursor-pointer rounded-full flex items-center justify-center p-1 mt-0 sm:mt-[2px]">
						<Plus size={16} />
					</span>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
