import {
	Select,
	SelectContent,
	SelectGroup,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import ProductCategoryFetcher from "@/lib/ProductCategoryFetcher";
import { ChevronUp, Menu } from "lucide-react";
import { Link } from "react-router-dom";
function FeaturedNav() {
	const CSections = new ProductCategoryFetcher();
	return (
		<section className="flex gap-3 items-center">
			<div className=" hidden lg:block">
				<Select>
					<SelectTrigger className="w-[16rem] rounded-full text-xs font-[RobotoRegular] bg-transparent text-white focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-transparent focus:ring-0 focus:ring-offset-0 focus:ring-transparent">
						<SelectValue
							placeholder={
								<span className="text-sm flex items-center gap-2">
									<Menu size={20} />
									All Categories
								</span>
							}
						/>
					</SelectTrigger>
					<SelectContent className=" p-0 flex flex-col h-fit -top-[2.7rem] w-[16rem] rounded-[1rem]">
						<SelectGroup>
							<SelectLabel className=" flex justify-between p-2">
								<span className="text-base flex items-center gap-2">
									<Menu size={20} />
									All Categories
								</span>
								<ChevronUp size={20} />
							</SelectLabel>
							{CSections.categoryTitle().map((title, i) => (
								<div key={i} className=" hover:bg-slate-100">
									<Link
										state={{ link: title.link, name: title.title }}
										to={`/${title.link}`}
										className="w-full h-full flex px-2 py-4">
										{title.title}
									</Link>
								</div>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<ul className="flex gap-10 justify-start">
				<li>
					<Link to={"/"} className="text-white text-base font-[RobotoRegular]">
						Today's Deal
					</Link>
				</li>
				<li>
					<Link to={"/"} className="text-white text-base font-[RobotoRegular]">
						Super Deals
					</Link>
				</li>
				<li>
					<Link to={"/"} className="text-white text-base font-[RobotoRegular]">
						Sell
					</Link>
				</li>
			</ul>
		</section>
	);
}

export default FeaturedNav;
