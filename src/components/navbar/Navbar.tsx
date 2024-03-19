import { Form, Link, useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { Button } from "../ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown, Search, ShoppingCart, User } from "lucide-react";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { useAppSelector } from "@/redux/hook";
import FeaturedNav from "./FeaturedNav";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import { MobileSideNav } from "./MobileSideNav";

function Navbar() {
	const navigate = useNavigate();
	const [search, setSearch] = useState("");
	const cart = useAppSelector((state) => state.Cart);
	const currentUser = useAppSelector((state) => state.User);

	return (
		<header className=" bg-slate-800 text-white">
			<div className=" container min-h-[5rem] py-3 flex flex-col">
				<nav
					className={`
						${
							isMobile
								? "grid grid-cols-[auto,13rem]"
								: " grid grid-cols-[15rem,auto,20rem]"
						}  mb-3 gap-3 items-center
					`}>
					<div className="flex items-center">
						{isMobile && <MobileSideNav />}
						<Link to={"/"}>
							<h1 className=" text-xl md:text-3xl ml-4 text-white font-[RobotoMedium] flex items-center">
								Anchorage
							</h1>
						</Link>
					</div>
					<Form
						method="get"
						action={`/collection?q=${search}`}
						onSubmit={(e) => {
							e.preventDefault();
							navigate(`/collection?q=${search}`);
						}}
						className={`
							${isMobile ? "col-start-1 col-end-3" : "col-start-2 col-end-3 "}
						flex rounded-lg w-full`}>
						<Input
							type="search"
							onChange={(e) => setSearch(e.target.value)}
							placeholder="Search anchorage..."
							value={search}
							className=" rounded-none rounded-tl-lg rounded-bl-lg  w-full text-black border-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-transparent"
						/>
						<Button
							type="submit"
							className="rounded-none rounded-tr-lg rounded-br-lg p-0 px-3">
							<Search size={20} />
						</Button>
					</Form>
					<ul
						className={`
							${
								isMobile
									? "row-start-1 col-end-3 pr-2"
									: "col-start-3 col-end-4 pr-0"
							} flex md:justify-evenly justify-end w-full gap-2 items-center h-full`}>
						<li>
							{isMobile ? (
								<div className="pr-4 sm:mr-0">
									<Link to={"/account"}>
										<User color="white" strokeWidth={3} />
									</Link>
								</div>
							) : (
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button className=" outline-none text-base pt-3 focus-visible:ring-offset-0 font-[RobotoRegular] hover:bg-transparent bg-transparent text-white border-0 focus-visible:ring-0">
											<span></span>
											<span>
												{currentUser.logged === "logged" &&
												currentUser.name !== undefined
													? "Hi," + " " + currentUser.name
													: "Account"}
											</span>{" "}
											<ChevronDown size={20} className="md:bloack hidden" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent className="w-56">
										{currentUser.logged === "notLogged" && (
											<DropdownMenuGroup className="flex justify-evenly">
												<DropdownMenuItem>
													<Link to={"/login"}>
														<Button className=" w-[5.5rem] rounded-lg border-black text-base font-[RobotoBold]">
															Login
														</Button>
													</Link>
												</DropdownMenuItem>
												<DropdownMenuItem>
													<Link to={"/register"}>
														<Button
															variant={"outline"}
															className=" w-[5.5rem] bg-transparent rounded-lg border-black text-base font-[RobotoBold]">
															Register
														</Button>
													</Link>
												</DropdownMenuItem>
											</DropdownMenuGroup>
										)}
										<DropdownMenuSeparator />
										<DropdownMenuGroup>
											<DropdownMenuItem>
												<Link
													className="font-[RobotoRegular] text-sm w-full "
													to={"/account"}>
													Orders
												</Link>
											</DropdownMenuItem>
											<DropdownMenuItem>
												<Link
													className="font-[RobotoRegular] text-sm w-full "
													to={"/"}>
													Message Center
												</Link>
											</DropdownMenuItem>
											<DropdownMenuItem>
												<Link
													className="font-[RobotoRegular] text-sm w-full "
													to={"/"}>
													Payment
												</Link>
											</DropdownMenuItem>
											<DropdownMenuItem>
												<Link
													className="font-[RobotoRegular] text-sm w-full "
													to={"/"}>
													Wish List
												</Link>
											</DropdownMenuItem>
										</DropdownMenuGroup>
										<DropdownMenuSeparator />
										<DropdownMenuGroup>
											<DropdownMenuItem>
												<Link
													className="font-[RobotoRegular] text-sm w-full "
													to={"/"}>
													Seller Login
												</Link>
											</DropdownMenuItem>
											<DropdownMenuItem>
												<Link
													className="font-[RobotoRegular] text-sm w-full "
													to={"/"}>
													Help Center
												</Link>
											</DropdownMenuItem>
											<DropdownMenuItem>
												<Link
													className="font-[RobotoRegular] text-sm w-full "
													to={"/"}>
													Disputes & Reports
												</Link>
											</DropdownMenuItem>
										</DropdownMenuGroup>
										<DropdownMenuSeparator />
										<DropdownMenuItem className="p-0 pt-2">
											{currentUser.id && (
												<Button
													onClick={() => {
														signOut(auth);
														window.location.reload();
													}}
													variant={"destructive"}
													className="w-full">
													Log out
												</Button>
											)}
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							)}
						</li>
						<li className="mr-5 md:m-0">
							<Link
								to={"/cart"}
								className=" text-white flex gap-1 items-center">
								<span className=" relative">
									<ShoppingCart size={isMobile ? 24 : 30} />
									<Badge
										className={`${
											isMobile ? "-right-5 -top-1" : "-right-5 -top-2"
										} font-[RobotoBlack] absolute px-1`}>
										{cart ? cart.length : 0}
									</Badge>
								</span>
								<span className="text-sm mt-4 lg:flex hidden font-[RobotoMedium]">
									Cart
								</span>
							</Link>
						</li>
					</ul>
				</nav>
				<FeaturedNav />
			</div>
		</header>
	);
}

export default Navbar;
