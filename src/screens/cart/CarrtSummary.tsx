import { CardPrice } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hook";

function CartSummary() {
	const CartItems = useAppSelector((state) => state.Cart);
	const totalPrice = CartItems.reduce((sum, item) => {
		if (item.checked) {
			return item.price ? sum + item.price : sum + 0;
		}
		return sum;
	}, 0);
	return (
		<div className="w-full">
			<div className="bg-card w-full p-4 py-2 lg:py-4 rounded-lg">
				<h2 className=" text-xl hidden lg:flex font-[RobotoRegular] border-b pb-2">
					Cart Summary
				</h2>
				<div className="flex justify-between gap-4 mt-5 mb-3 pb-3 border-b ">
					<h4 className="font-[RobotoRegular]">SubTotal:</h4>
					<CardPrice className="text-xl font-[RobotoBold]" price={totalPrice} />
				</div>
				<Button className="w-full">
					CHECKOUT (<CardPrice price={totalPrice} />)
				</Button>
			</div>
		</div>
	);
}

export default CartSummary;
