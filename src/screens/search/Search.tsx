import { useFetchBySearchQuery } from "@/api/ProductApi";
import InvalidData from "@/components/InvalidData";
import CatNav from "@/components/navbar/CatNav";
import ProductsGridTemplate from "@/components/ProductsGridTemplate";
import AuthWrapper from "@/lib/AuthWrapper";
import { useLocation } from "react-router-dom";
import noproduct from "@/assets/vectors/no-product.jpg";

function Search() {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const q = searchParams.get("q");
	const { data, isFetching } = useFetchBySearchQuery({
		search: q ? q : "",
		limit: 20,
		skip: 0,
	});
	return (
		<AuthWrapper>
			{isFetching ? (
				<div>Loading...</div>
			) : data && data.products.length > 0 ? (
				<>
					<CatNav data={data} />
					<div className="container grid grid-cols-1 lg:grid-cols-[17%,auto] gap-3">
						<div className="w-full h-full hidden lg:flex bg-card"></div>
						<div>
							<div>
								<ProductsGridTemplate products={data ? data.products : []} />
							</div>
						</div>
					</div>
				</>
			) : (
				<InvalidData image={noproduct} title="Item not found" message="" />
			)}
		</AuthWrapper>
	);
}

export default Search;

// const { data, isFetching } = useFetchProductsQuery(5);
