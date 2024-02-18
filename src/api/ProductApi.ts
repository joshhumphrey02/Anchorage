import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type IProduct, IQuery } from "../@types";

export const productApiSlice = createApi({
	reducerPath: "ProductApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://dummyjson.com/products",
	}),
	endpoints: (builder) => {
		return {
			fetchProducts: builder.query<IQuery, { limit?: number; skip?: number }>({
				query({ limit = 20, skip = 0 }) {
					return `?limit=${limit}&skip=${skip}`;
				},
			}),
			fetchByCategory: builder.query<
				IQuery,
				{ category: string; limit?: number; skip?: number }
			>({
				query({ category, limit = 20, skip = 0 }) {
					return `/category/${category}?limit=${limit}&skip=${skip}`;
				},
			}),
			fetchBySearch: builder.query<
				IQuery,
				{ search: string; limit?: number; skip?: number }
			>({
				query({ search, limit = 20, skip = 0 }) {
					return `/search/?q=${search}&limit=${limit}&skip=${skip}`;
				},
			}),
			fetchSingleProducts: builder.query<IProduct, string | void>({
				query(product) {
					return `/${product}`;
				},
			}),
		};
	},
});

export const {
	useFetchProductsQuery,
	useFetchByCategoryQuery,
	useFetchSingleProductsQuery,
	useFetchBySearchQuery,
} = productApiSlice;
