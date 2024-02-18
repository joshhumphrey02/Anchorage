import { ICart } from "@/@types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState: ICart[] = [];

const cartSlice = createSlice({
	name: "Cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<ICart>) => {
			if (
				action.payload &&
				state.find((item) => item?.id === action.payload?.id)
			) {
				toast.error("item already added");
				return;
			} else {
				toast.success("item add successfully");
				return [...state, action.payload];
			}
		},
		updateCart: (state, action: PayloadAction<ICart[]>) => {
			const filtered = action.payload.filter((p) => {
				if (state.find((item) => item?.id === p.id)) return;
				return p;
			});
			return [...state, ...filtered];
		},
		removeItem: (state, action) => {
			const filtered = state.filter((item) => item?.id !== action.payload?.id);
			toast.success("item removed successfully");
			return [...filtered];
		},
		increaseQty: (state, action) => {
			const updated = state.map((item) => {
				if (item.id === action.payload.id) {
					return {
						...item,
						quantity: item.quantity + 1,
						price: item.price
							? item.price + item.price / item.quantity
							: item.price,
					};
				}
				return item;
			});
			return [...updated];
		},
		decreaseQty: (state, action) => {
			const updated = state.map((item) => {
				if (item.id === action.payload.id) {
					return {
						...item,
						quantity: item.quantity - 1,
						price: item.price
							? item.price - item.price / item.quantity
							: item.price,
					};
				}
				return item;
			});
			return [...updated];
		},
		checkItem: (state, action) => {
			const updated = state.map((item) => {
				if (item.id === action.payload.id) {
					return { ...item, checked: !item.checked };
				}
				return item;
			});
			return [...updated];
		},
		checkAllItem: (state) => {
			const updated = state.map((item) => {
				if (state.every((item) => item.checked)) {
					return { ...item, checked: false };
				} else {
					return { ...item, checked: true };
				}
			});
			return [...updated];
		},
	},
});

export const {
	addToCart,
	removeItem,
	increaseQty,
	decreaseQty,
	checkAllItem,
	checkItem,
	updateCart,
} = cartSlice.actions;
export default cartSlice.reducer;
