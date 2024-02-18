import propix from "@/assets/logos/profile svg.png";
import { Button } from "@/components/ui/button";
import { auth } from "@/firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import {
	Edit,
	ListOrdered,
	MessageSquareCode,
	RotateCcw,
	Save,
	Settings,
	User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ACategory } from "./Account";

const AccountNavigation = [
	{
		title: "My Account",
		link: "/account",
		icon: <User />,
	},
	{
		title: "Orders",
		link: "/account/orders",
		icon: <ListOrdered />,
	},
	{
		title: "Reviews",
		link: "/account/reviews",
		icon: <MessageSquareCode />,
	},
	{
		title: "Saved Items",
		link: "/account/saved",
		icon: <Save />,
	},
	{
		title: "Recently Viewed",
		link: "/account/recent",
		icon: <RotateCcw />,
	},
	{
		title: "Settings",
		link: "/account/setting",
		icon: <Settings />,
	},
];

function DesktopView({ state }: ACategory) {
	return (
		<div className=" grid grid-cols-[16rem,auto] mt-4 gap-2 container">
			<div className="bg-card rounded-lg py-3">
				<h2 className="text-xl px-3 mb-2">Account</h2>
				<ul className="flex flex-col">
					{AccountNavigation.map((nav) => (
						<li key={nav.title}>
							<Link
								to={nav.link}
								className="px-3 py-3 hover:bg-gray-200 font-[RobotoRegular] text-sm flex">
								{nav.title}
							</Link>
						</li>
					))}
					<li className=" border-y ">
						<Link
							to={"/account"}
							className="px-3 py-3 hover:bg-gray-200 font-[RobotoRegular] text-sm flex">
							Invite Friends
						</Link>
					</li>
					<li>
						<Link
							to={"/account"}
							className="px-3 py-3 hover:bg-gray-200 font-[RobotoRegular] text-sm flex">
							Help Center
						</Link>
					</li>
					<li>
						<Link
							to={"/account"}
							className="px-3 py-3 hover:bg-gray-200 font-[RobotoRegular] text-sm flex">
							Reports
						</Link>
					</li>
					<li>
						<Link
							to={"/account"}
							className="px-3 py-3 hover:bg-gray-200 font-[RobotoRegular] text-sm flex">
							Suggestion
						</Link>
					</li>
					<li>
						<Button
							onClick={() => signOut(auth)}
							variant={"ghost"}
							className="w-full text-destructive font-[RobotoMedium] hover:bg-transparent border-t text-base">
							Logout
						</Button>
					</li>
				</ul>
			</div>
			<div className="bg-card rounded-lg p-3">
				<div className="flex gap-6 mb-3 py-3">
					<div>
						<img src={propix} alt="profile pix" className="w-16 h-16" />
					</div>
					<div>
						<h1 className="text-xl mb-2 capitalize">Hello, Humphrey Joshua</h1>
					</div>
				</div>
				<div className=" flex justify-evenly">
					<div className=" border p-2 w-[40%]">
						<h3 className=" text-lg font-[RobotoRegular] flex justify-between py-3 border-b mb-2 px-2">
							<span>Account Details</span> <Edit size={20} />
						</h3>
						<div className=" px-2 pb-2 flex flex-col gap-3 h-36">
							<h3>Full name: Humphrey Joshua</h3>
							<h4>Email: Joshuahumphrey579@gmail.com</h4>
						</div>
					</div>
					<div className=" border p-2 w-[40%]">
						<h3 className=" text-lg font-[RobotoRegular] flex justify-between py-3 border-b mb-2 px-2">
							<span>Address</span> <Edit size={20} />
						</h3>
						<div className=" px-2 pb-2 flex flex-col gap-1 font-[RobotoLight] h-36">
							<h4>Your default shipping address:</h4>
							<p>Joshua Humphrey</p>
							<p>Kpansia</p>
							<p>Yenagoa-Okaka, Bayelsa</p>
							<p>+234 8149593345</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DesktopView;
