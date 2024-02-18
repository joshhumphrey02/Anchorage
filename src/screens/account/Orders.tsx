import { Link } from "react-router-dom";

function CustomerOrders() {
	return (
		<section>
			<h1>Orders</h1>
			<div>
				<ul>
					<li>All</li>
					<li>Recieved</li>
					<li>Cancelled</li>
					<li>In progress</li>
				</ul>
			</div>
			<div>
				<div className=" grid grid-cols-[3.1rem,auto,6rem] sm:grid-cols-[4.5rem,auto,8rem] font-[Robotobold] gap-2 py-3 border-b h-fit">
					<Link to={`/p/`}>
						<img
							src={"product.image"}
							alt={"product.title"}
							className=" w-[3rem] h-[3rem] sm:w-[5rem] sm:h-[5rem] rounded-lg"
						/>
					</Link>
					<div className="flex flex-col gap-1 h-full justify-between pb-3">
						<Link state={"product.id"} to={`/p/`}>
							<h2 className="font-[RobotoRegular] text-sm sm:text-lg lg:text-base">
								"product.title"
							</h2>
						</Link>
						<span>p</span>
					</div>
					<div className=" flex flex-col gap-3">
						<div className="flex justify-end gap-8 sm:gap-3 mr-2">
							<span>k</span>h
						</div>
						<div className="mt-0 sm:mt-2 flex items-center justify-end gap-3 pr-2">
							<span
								className={` cursor-pointer rounded-full flex items-center justify-center p-1 mt-0 sm:mt-[2px]`}>
								j
							</span>
							<span className="font-[RobotoBold] text-sm m-0">y</span>
							<span className="bg-primary text-white cursor-pointer rounded-full flex items-center justify-center p-1 mt-0 sm:mt-[2px]">
								h
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CustomerOrders;
