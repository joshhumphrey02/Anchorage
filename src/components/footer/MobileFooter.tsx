import { Link } from "react-router-dom";

function MobileFooter() {
	return (
		<footer className="container sm:mb-10">
			<div className="bg-card rounded-lg p-3">
				<div className="mb-3 border-b pb-2">
					<ul className="flex justify-evenly gap-3 flex-wrap">
						<li>
							<Link to={"#"} className="text-sm font-[RobotoLight]">
								Help Center
							</Link>
						</li>
						<li>
							<Link to={"#"} className="text-sm font-[RobotoLight]">
								Report A Product
							</Link>
						</li>
						<li>
							<Link to={"#"} className="text-sm font-[RobotoLight]">
								About us
							</Link>
						</li>
						<li>
							<Link to={"#"} className="text-sm font-[RobotoLight]">
								Terms Of Use
							</Link>
						</li>
						<li>
							<Link to={"#"} className="text-sm font-[RobotoLight]">
								Privacy and Cookie
							</Link>
						</li>
						<li>
							<Link to={"#"} className="text-sm font-[RobotoLight]">
								Become A Seller
							</Link>
						</li>
					</ul>
				</div>

				<div className="mb-1">
					<p className=" text-[RobotoRegular] text-center text-sm">
						&copy; 2024 Anchorage, Inc. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default MobileFooter;
