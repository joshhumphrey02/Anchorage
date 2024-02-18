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

export interface ICurrentProduct {
	data: Partial<IProduct>;
}

function Product() {
	const { state } = useLocation();
	const { data } = useFetchSingleProductsQuery(state);
	const result = useFetchByCategoryQuery({
		category: data ? data?.category : "",
		limit: isMobile ? 8 : 4,
	}).data?.products;
	return (
		<AuthWrapper>
			<main className="container">
				<div className="mt-4 grid grid-cols-1 2xl:grid-cols-[auto,22.4rem] lg:grid-cols-[auto,22.4rem] gap-3 relative">
					<div>
						<div>
							{data ? (
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
						{result && <MayAlsoLikeCard result={result} />}
					</div>
					{data && <ProductSideNav data={data} />}
				</div>
			</main>
		</AuthWrapper>
	);
}

export default Product;
