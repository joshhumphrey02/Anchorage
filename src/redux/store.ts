import { configureStore } from "@reduxjs/toolkit";
import User from "../reducers/User";
import anchor from "../reducers/Anchorage";
import Products from "../reducers/Products";
import Orders from "../reducers/Orders";
import SideBar from "../reducers/SideBar";
import { productApiSlice } from "@/api/ProductApi";
import Cart from "@/reducers/Cart";

// ...

export const store = configureStore({
	reducer: {
		User: User,
		Anchor: anchor,
		[productApiSlice.reducerPath]: productApiSlice.reducer,
		Orders: Orders,
		SideBar: SideBar,
		Cart: Cart,
		Products: Products,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(productApiSlice.middleware);
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
