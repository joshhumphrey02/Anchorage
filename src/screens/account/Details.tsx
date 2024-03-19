import propix from "@/assets/logos/profile svg.png";
import { Edit } from "lucide-react";

function Details() {
	return (
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
	);
}

export default Details;
