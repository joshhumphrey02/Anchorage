import { createSlice } from "@reduxjs/toolkit";
import { type IProduct } from "../@types";

interface state {
	products: IProduct[];
	filtered: IProduct[] | IProduct;
}
const initialState: state = {
	products: [],
	filtered: [],
};

export const productsSlice = createSlice({
	name: "Products",
	initialState,
	reducers: {
		addproducts: (state, action) => {
			const updates = action.payload.filter((product: IProduct) => {
				if (state.products.find((item) => item.id === product.id)) return;
				return product;
			});
			return {
				...state,
				products: [...state.products, ...updates],
			};
		},
		filteredproduct: (state, action) => {
			if (action.payload.type === "category") {
				const filtered = state.products.filter((item) => {
					if (state.products.find((p) => p.category !== action.payload.value))
						return;
					return item;
				});
				return {
					...state,
					filtered: [...filtered],
				};
			} else if (action.payload.type === "product") {
				const filtered = state.products.filter((item) => {
					if (state.products.find((p) => p.id !== action.payload.value)) return;
					return item;
				});
				return {
					...state,
					filtered: [...filtered],
				};
			}
		},
	},
});

export const { addproducts, filteredproduct } = productsSlice.actions;

export default productsSlice.reducer;
