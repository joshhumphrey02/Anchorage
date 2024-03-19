import ProductImage from "./ProductImage";
import ProductBasicInfo from "./ProductBasicInfo";
import ProductSideNav from "./ProductSideNav";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";
import { useLocation } from "react-router-dom";
import { IProduct } from "@/@types";
import MayAlsoLikeCard from "@/components/MayAlsoLikeCard";
import {
	useFetchByCategoryQuery,
	useFetchSingleProductsQuery,
} from "@/api/ProductApi";
import AuthWrapper from "@/lib/AuthWrapper";
import { isMobile } from "react-device-detect";
import InvalidData from "@/components/InvalidData";
import noProduct from "@/assets/vectors/no-product.jpg";
import { Skeleton } from "@/components/ui/skeleton";

export interface ICurrentProduct {
	data: Partial<IProduct>;
}

function Product() {
	const { state } = useLocation();
	const { data, isLoading } = useFetchSingleProductsQuery(state);
	const result = useFetchByCategoryQuery({
		category: data ? data?.category : "",
		limit: isMobile ? 8 : 4,
	}).data?.products;
	return (
		<AuthWrapper>
			<main className="container">
				<div
					className={`${
						data
							? "grid-cols-1 2xl:grid-cols-[auto,22.4rem] lg:grid-cols-[auto,22.4rem]"
							: "grid-cols-1"
					} mt-4 grid  gap-3 relative`}>
					<div>
						<div>
							{isLoading ? (
								<Skeleton className="w-full h-[20rem]">Loading</Skeleton>
							) : data ? (
								<>
									<div className="bg-card grid grid-cols-1 2xl:grid-cols-[30rem,auto] lg:grid-cols-[22rem,auto] gap-3  px-3 py-5 rounded-lg">
										<ProductImage data={data} />
										<ProductBasicInfo data={data} />
									</div>
									<ProductDescription data={data} />
									<ProductReviews />
								</>
							) : (
								<InvalidData
									image={noProduct}
									title=""
									message="Product not found"
								/>
							)}
						</div>
					</div>
					{data && <ProductSideNav data={data} />}
				</div>
			</main>
			{result && <MayAlsoLikeCard result={result} />}
		</AuthWrapper>
	);
}

export default Product;
