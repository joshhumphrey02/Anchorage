import { NavLink } from "react-router-dom";
import {
	ListOrdered,
	MessageSquareCode,
	RotateCcw,
	Save,
	Settings,
	User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { auth } from "@/firebase/firebaseConfig";
import { signOut } from "firebase/auth";

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
		link: "/account/saved-items",
		icon: <Save />,
	},
	{
		title: "Recently Viewed",
		link: "/account/recent-view",
		icon: <RotateCcw />,
	},
	{
		title: "Settings",
		link: "/account/setting",
		icon: <Settings />,
	},
	{
		title: "Invite Friends",
		link: "/account/invite-friends",
		icon: <RotateCcw />,
	},
	{
		title: "Help Center",
		link: "/account/help-center",
		icon: <Settings />,
	},
	{
		title: "Reports",
		link: "/account/reports",
		icon: <RotateCcw />,
	},
	{
		title: "Suggestion",
		link: "/account/suggestion",
		icon: <Settings />,
	},
];

function AccountMenu() {
	return (
		<div className="bg-card h-fit rounded-lg py-3">
			<h2 className="text-xl px-3 mb-2">Account</h2>
			<ul className="flex flex-col">
				{AccountNavigation.map((nav, i) => (
					<li key={nav.title}>
						<NavLink
							state={nav.title}
							to={nav.link}
							className={`${
								i === 6 ? "border-y" : ""
							} px-3 py-3 hover:bg-gray-200 font-[RobotoRegular] text-sm flex`}>
							{nav.title}
						</NavLink>
					</li>
				))}
				<li>
					<Button
						onClick={() => {
							window.location.reload();
							signOut(auth);
						}}
						variant={"ghost"}
						className="w-full text-destructive font-[RobotoMedium] hover:bg-transparent border-t text-base">
						Logout
					</Button>
				</li>
			</ul>
		</div>
	);
}

export default AccountMenu;
