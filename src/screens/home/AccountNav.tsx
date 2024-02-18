import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hook";
import { ListOrdered, MessageCircle, User } from "lucide-react";
import { Link } from "react-router-dom";

function AccountNav() {
	const currentUser = useAppSelector((state) => state.User);
	return (
		<aside className="md:flex hidden flex-col h-[26.5rem] px-2 py-3 bg-card border rounded-lg">
			<div className="flex flex-col items-center mb-2">
				<div className="mb-1">
					<img
						src={currentUser.image}
						alt="background"
						className="w-10 h-10 rounded-full"
					/>
				</div>
				{currentUser.logged === "logged" ? (
					<h3 className=" text-xl">
						Hi,{" "}
						<span>
							{currentUser.name !== undefined
								? currentUser.name
								: currentUser.email}
						</span>
					</h3>
				) : (
					<div className=" ">
						<h3 className=" text-xl font-[RobotoBold]">
							Welcome to Anchorage{" "}
						</h3>
					</div>
				)}
			</div>
			<div className="">
				{currentUser.logged === "logged" ? (
					<div className="flex justify-evenly mb-3">
						<div className="flex flex-col items-center">
							<User />
							<Link className="font-[RobotoRegular]" to="/profile">
								Account
							</Link>
						</div>
						<div className="flex flex-col items-center">
							<ListOrdered />
							<Link className="font-[RobotoRegular]" to="/profile/orders">
								Orders
							</Link>
						</div>
						<div className="flex flex-col items-center">
							<MessageCircle />
							<Link className="font-[RobotoRegular]" to="/profile/messages">
								Messages
							</Link>
						</div>
					</div>
				) : (
					<div className=" flex justify-evenly w-full mb-3">
						<Link to={"/register"}>
							<Button className="w-[6rem] font-[RobotoRegular] text-base">
								Register
							</Button>
						</Link>
						<Link to={"/login"}>
							<Button
								variant={"outline"}
								className="w-[6rem] bg-transparent border-black font-[RobotoRegular] text-base">
								Login
							</Button>
						</Link>
					</div>
				)}
			</div>
			<div className="bg-blue-200 rounded-lg pt-2 pb-4">
				<div className="text-center">
					<h2>Exclusive offers</h2>
					<h3>Just for new Members</h3>
				</div>
				<div className="grid grid-rows-2 gap-1">
					<img
						src={"https://source.unsplash.com/500x500?earphone"}
						alt="background"
						className=" w-[80%] mx-auto rounded-lg h-[5.7rem]"
					/>
					<img
						src={"https://source.unsplash.com/500x300?airpod"}
						alt="background"
						className=" w-[80%] mx-auto rounded-lg h-[5.7rem]"
					/>
				</div>
			</div>
		</aside>
	);
}

export default AccountNav;
