import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet";
import { auth } from "@/firebase/firebaseConfig";
import ProductCategoryFetcher from "@/lib/ProductCategoryFetcher";
import { signOut } from "firebase/auth";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export function MobileSideNav() {
	const CSections = new ProductCategoryFetcher();
	return (
		<Sheet key={"left"}>
			<SheetTrigger asChild>
				<Button
					variant="outline"
					className=" bg-transparent p-0 outline-none hover:text-white hover:bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0">
					<Menu size={28} />
				</Button>
			</SheetTrigger>
			<SheetContent side={"left"} className="w-fit py-3 px-1">
				<SheetHeader>
					<Link to={"/"}>
						<h1 className=" text-2xl sm:text-3xl m-0 lg:ml-4 px-2 font-[RobotoMedium] flex items-center">
							Anchorage
						</h1>
					</Link>
				</SheetHeader>
				<div className="mt-7">
					<span className="text-lg border-b border-b-gray-500 pb-3 font-[RobotoRegular] px-2 flex items-center gap-2">
						All Categories
					</span>
					<div>
						{CSections.categoryTitle().map((title, i) => (
							<div key={i} className=" hover:bg-slate-100">
								<Link
									state={{ link: title.link, name: title.title }}
									to={`/${title.link}`}
									className="w-full sm:text-lg h-full  flex px-2 py-4">
									{title.title}
								</Link>
							</div>
						))}
					</div>
				</div>
				<SheetFooter>
					<Button
						onClick={() => {
							signOut(auth);
							window.location.reload();
						}}
						variant={"destructive"}
						className="w-full sm:py-6 sm:text-lg mt-6">
						Log out
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
