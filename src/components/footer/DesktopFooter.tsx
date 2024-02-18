import { Link } from "react-router-dom";
import { Facebook, Instagram, MessageCircle, Twitter } from "lucide-react";

function DesktopFooter() {
	return (
		<footer className="pb-5">
			<div className="container ">
				<div className="flex justify-between bg-card border px-3 py-4 border-b-gray-300 rounded-t-lg mt-5">
					<div className="ft_menu_item">
						<span className="text-base font-[RobotoRegular]">
							LET US HELP YOU
						</span>
						<ul className="py-1">
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									Help Center
								</Link>
							</li>
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									Contact Us
								</Link>
							</li>
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									How to shop on Art of Electronics?
								</Link>
							</li>
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									Delivery options and timelines
								</Link>
							</li>
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									How to return a product on Art of Electronics?
								</Link>
							</li>
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									Corporate and bulk purchases
								</Link>
							</li>
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									Report a Product
								</Link>
							</li>
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									Ship your package anywhere in Nigeria
								</Link>
							</li>
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									Dispute Resolution Policy
								</Link>
							</li>
						</ul>
					</div>
					<div className="ft_menu_item">
						<span className="text-base font-[RobotoRegular]">ABOUT </span>
						<ul className="py-1">
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									About us
								</Link>
							</li>
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									Art of Electronics careers
								</Link>
							</li>
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									Art of Electronics Express
								</Link>
							</li>
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									Terms and Conditions
								</Link>
							</li>
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									Privacy and Cookie Notice
								</Link>
							</li>
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									Art of Electronics Prime
								</Link>
							</li>
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									Art of Electronics Global
								</Link>
							</li>
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									Flash Sales
								</Link>
							</li>
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									Electronic Festival 2022
								</Link>
							</li>
						</ul>
					</div>
					<div className="ft_menu_item">
						<span className="text-base font-[RobotoRegular]">
							MAKE MONEY WITH US
						</span>
						<ul className="py-1">
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									Sell on Art of Electronics
								</Link>
							</li>
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									Become a Sales Consultant
								</Link>
							</li>
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									Become a Vendor Service Provider
								</Link>
							</li>
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									Become a Logistics Service Partner
								</Link>
							</li>
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									Join the Art of Electronics Academy
								</Link>
							</li>
							<li>
								<Link className="text-sm font-[RobotoLight]" to="#">
									Join the Art of Electronics Coding Program
								</Link>
							</li>
						</ul>
					</div>
					<div className="ft_menu_item">
						<span className="text-base font-[RobotoRegular]">
							CONNECT US ON
						</span>
						<ul className="py-1 flex flex-col ">
							<li className="pb-2">
								<Link
									className="text-sm font-[RobotoLight] flex items-center gap-1"
									to="#">
									<Twitter />
									Twitter
								</Link>
							</li>
							<li className="pb-2">
								<Link
									className="text-sm font-[RobotoLight] flex items-center gap-1"
									to="#">
									<Instagram />
									Instagram
								</Link>
							</li>
							<li className="pb-2">
								<Link
									className="text-sm font-[RobotoLight] flex items-center gap-1"
									to="#">
									<Facebook />
									Facebook
								</Link>
							</li>
							<li className="pb-2">
								<Link
									className="text-sm font-[RobotoLight] flex items-center gap-1"
									to="#">
									<MessageCircle />
									Whatsapp
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="bg-card flex justify-center items-center h-16 rounded-b-lg">
					<p className="text-base font-[RobotoRegular]">
						&copy; 2024 Anchorage, Inc. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default DesktopFooter;
