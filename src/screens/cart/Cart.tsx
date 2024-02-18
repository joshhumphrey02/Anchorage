import { useFetchProductsQuery } from "@/api/ProductApi";
import MayAlsoLikeCard from "@/components/MayAlsoLikeCard";
import AuthWrapper from "@/lib/AuthWrapper";
import { checkAllItem } from "@/reducers/Cart";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { isMobile } from "react-device-detect";
import CartItem from "./CartItem";
import CartSummary from "./CarrtSummary";

function Cart() {
	const dispatch = useAppDispatch();
	const CartItems = useAppSelector((state) => state.Cart);
	const result = useFetchProductsQuery({ limit: isMobile ? 8 : 4, skip: 0 })
		.data?.products;
	return (
		<AuthWrapper>
			<section
				className={`${
					isMobile
						? "flex flex-col landscape:grid landscape:grid-cols-[65%,33%]"
						: "grid grid-cols-[auto,25rem]"
				} container my-5 gap-3 `}>
				<div>
					<div className=" bg-card w-full h-16 p-4 rounded-lg">
						<h1 className="text-xl font-[RobotoMedium]">
							Shopping Cart Items ({CartItems.length > 0 ? CartItems.length : 0}
							)
						</h1>
					</div>
					<div className="flex flex-col bg-card my-3 rounded-lg p-4">
						<h3 className=" flex gap-2 border-b pb-4 items-center">
							<input
								onClick={() => dispatch(checkAllItem())}
								type="checkbox"
								name=""
								checked={
									CartItems.length > 0 &&
									CartItems.every((item) => item.checked)
								}
								id="selectAll"
								className=" size-4 sm:size-5"
							/>
							<label htmlFor="selectAll">Select all items</label>
						</h3>
						<div className=" flex flex-col gap-2 mt-3">
							{CartItems &&
								CartItems.map((product) => <CartItem product={product} />)}
						</div>
					</div>
				</div>
				<CartSummary />
			</section>
			{result && <MayAlsoLikeCard result={result} />}
		</AuthWrapper>
	);
}

export default Cart;
