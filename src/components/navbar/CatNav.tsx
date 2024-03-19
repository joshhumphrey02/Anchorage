import { type IQuery } from "@/@types";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface CNav {
	data: IQuery | undefined;
}

function CatNav({ data }: CNav) {
	return (
		<section className="container mb-5">
			<div className="flex justify-between h-12  shadow border-b items-center px-1 rounded-b-lg">
				<div className="text-sm font-[RobotoRegular]">
					1-{data && data.products.length} of over {data && data.total} products
				</div>
				<div className="flex w-[10rem] h-6 border p-1 rounded-2xl items-center  outline outline-blue-300">
					<span className="w-[5rem] text-xs font-[RobotoLight]">Sort by:</span>
					<Select>
						<SelectTrigger className=" text-xs font-[RobotoLight] text-black bg-transparent p-0 rounded-none border-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-transparent focus:ring-0 focus:ring-offset-0 focus:ring-transparent">
							<SelectValue placeholder="All" />
						</SelectTrigger>
						<SelectContent className="-top-1 h-fit">
							<SelectGroup>
								<SelectItem value={"Popular"} className="">
									Popular
								</SelectItem>
								<SelectItem value={"rating"} className="">
									Rating
								</SelectItem>
								<SelectItem value={"price"} className="">
									Price
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>
		</section>
	);
}

export default CatNav;
