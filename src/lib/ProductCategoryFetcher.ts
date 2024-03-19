import { ICategorires } from "@/@types";
import { CategoryData } from "@/lib/SectionData.json";

class ProductCategoryFetcher {
	private CL: ICategorires[];
	constructor() {
		this.CL = CategoryData;
	}
	categoryTitle() {
		return this.CL.map((items) => {
			return {
				title: items.categoryTitle,
				image: items.categoryImage,
				link: items.link,
			};
		});
	}
	subCategory(title: string) {
		return this.CL.find((item) => item.categoryTitle === title)?.subCategory;
	}
	categories(sub: string, cat: string) {
		return this.CL.find((item) => item.categoryTitle === sub)?.subCategory.find(
			(c) => c.subTitle === cat
		)?.categories;
	}
}

export default ProductCategoryFetcher;
