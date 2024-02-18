import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";

function ProductReviews() {
	return (
		<section className="bg-card p-3">
			<div className="my-3 border-b pb-3">
				<h2 className=" text-xl font-[RobotoMedium]">
					Verified Customers Feedback
				</h2>
			</div>
			<div>
				<div className="flex flex-col border-b pb-3">
					<h4 className=" font-[RobotoRegular] ml-20 sm:ml-16">
						VERIFIED RATINGS (2755)
					</h4>
					<div className="flex justify-between flex-col sm:flex-row gap-2">
						<div className=" flex flex-col gap-2">
							<h1 className="text-5xl text-center my-3">4.7</h1>
							<div className="flex gap-1 justify-center">
								<Star />
								<Star />
								<Star />
								<Star />
								<Star />
							</div>
							<p className="text-base font-[RobotoLight] ml-4">
								All reviews come from verified purchasers
							</p>
						</div>
						<div className="flex flex-col justify-center">
							<div className="grid grid-cols-[4rem,auto,3rem] w-full gap-2 items-center text-[0.92rem] font-[RobotoRegular]">
								<p>5 stars</p>
								<Progress
									value={70}
									className=" w-full sm:w-[20rem] h-[0.5rem]"
								/>
								<p>300</p>
							</div>
							<div className="grid grid-cols-[4rem,auto,3rem] w-full gap-2 items-center text-[0.92rem] font-[RobotoRegular]">
								<p>4 stars</p>
								<Progress
									value={50}
									className=" w-full sm:w-[20rem] h-[0.5rem]"
								/>
								<p>210</p>
							</div>
							<div className="grid grid-cols-[4rem,auto,3rem] w-full gap-2 items-center text-[0.92rem] font-[RobotoRegular]">
								<p>3 stars</p>
								<Progress
									value={30}
									className=" w-full sm:w-[20rem] h-[0.5rem]"
								/>
								<p>100</p>
							</div>
							<div className="grid grid-cols-[4rem,auto,3rem] w-full gap-2 items-center text-[0.92rem] font-[RobotoRegular]">
								<p>2 stars</p>
								<Progress
									value={10}
									className=" w-full sm:w-[20rem] h-[0.5rem]"
								/>
								<p>30</p>
							</div>
							<div className="grid grid-cols-[4rem,auto,3rem] w-full gap-2 items-center text-[0.92rem] font-[RobotoRegular]">
								<p>1 stars</p>
								<Progress
									value={4}
									className=" w-full sm:w-[20rem] h-[0.5rem]"
								/>
								<p>12</p>
							</div>
						</div>
					</div>
				</div>
				<div className="my-4">
					<h3 className="text-base font-[RobotoRegular]">
						COMMENTS FROM VERIFIED PURCHASES(762)
					</h3>
					<div className="mt-3">
						<div className="flex flex-col gap-3 border-b pb-3 font-[RobotoLight] ">
							<div className="flex gap-1">
								<Star size={18} color="blue" />
								<Star size={18} color="blue" />
								<Star size={18} color="blue" />
								<Star size={18} color="blue" />
								<Star size={18} color="blue" />
							</div>
							<h4 className=" text-base font-[RobotoMedium]">I like it</h4>
							<p className=" font-[RobotoRegular]">
								It's nice and last long, but the cord that comes with it is not
								working.
							</p>
							<p>08-02-2024 by Damilare</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductReviews;
