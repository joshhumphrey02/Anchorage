export interface IUser {
	id: string;
	name: string;
	email: string;
	verified: boolean;
	logged: "notLogged" | "logged" | "checking";
	image: string;
}

export interface ICart {
	id?: number;
	title?: string;
	image?: string;
	price?: number;
	quantity: number;
	checked: boolean;
}

export interface ICategory {
	category: string;
}
export interface ISubs {
	subTitle: string;
	subLink: string;
	categories: ICategory[];
}

export interface ISubCategory {
	subCategory: ISubs[];
}

export interface ICategorires {
	categoryTitle: string;
	categoryImage: string;
	link: string;
	subCategory: ISubs[];
}

export interface IQuery {
	limit: number;
	products: IProduct[];
	skip: number;
	total: number;
}

export interface IProduct {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number | string;
	rating: number | string;
	stock: number | string;
	brand: string;
	category: string;
	thumbnail?: string;
	images: string[];
}

export interface IOrders {
	id: string;
	product_id: string;
	customer_id: string;
	customer_name: string;
	order_date: string;
	order_total: string;
	current_order_status:
		| "placed"
		| "confirmed"
		| "shipped"
		| "delivered"
		| "returned";
	shipment_address: string;
	quantity: string;
}
