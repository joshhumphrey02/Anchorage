import { useFetchByCategoryQuery } from "@/api/ProductApi";
import CatNav from "@/components/navbar/CatNav";
import ProductsGridTemplate from "@/components/ProductsGridTemplate";
import AuthWrapper from "@/lib/AuthWrapper";
// import ProductCategoryFetcher from "@/lib/ProductCategoryFetcher";
import { useLocation } from "react-router-dom";

function Category() {
	// const main = new ProductCategoryFetcher();
	const { state } = useLocation();
	const { data, isFetching } = useFetchByCategoryQuery({
		category: state.link,
		limit: 20,
		skip: 0,
	});
	// const subs = main.subCategory(state.name);
	return (
		<AuthWrapper>
			<CatNav data={data} />
			<section className="container flex gap-3">
				{/* <div className="w-full h-full hidden lg:flex bg-card">
					<ul className="flex flex-col py-2 w-full">
						{subs !== undefined &&
							subs.map((sub, i) => (
								<li key={i} className="border-b border-b-gray-400 w-full">
									<NavLink
										to={sub.subLink}
										className={
											"py-4 hover:bg-gray-300 bg-gray-200 px-3 w-full flex"
										}>
										{sub.subTitle}
									</NavLink>
								</li>
							))}
					</ul>
				</div> */}
				<div>
					{isFetching ? (
						<div>Loading...</div>
					) : (
						<ProductsGridTemplate products={data ? data.products : []} />
					)}
				</div>
			</section>
		</AuthWrapper>
	);
}

export default Category;
