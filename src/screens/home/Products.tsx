import { useFetchProductsQuery } from "@/api/ProductApi";
import ProductsGridTemplate from "@/components/ProductsGridTemplate";

function Products() {
	const { data } = useFetchProductsQuery({ limit: 28, skip: 0 });
	return (
		<section className="container my-2">
			<div className=" bg-card pb-2 rounded-lg">
				<div className=" bg-primary h-12 flex items-center rounded-sm text-white px-3 my-3">
					<h2 className=" text-lg font-[RobotoBold]">More To love</h2>
				</div>
				<ProductsGridTemplate
					products={data ? data.products : []}
					price={true}
				/>
			</div>
		</section>
	);
}

export default Products;
