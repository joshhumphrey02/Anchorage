import { ICurrentProduct } from "./Product";

function ProductDescription({ data }: ICurrentProduct) {
	return (
		<section className="bg-card p-3 my-4 rounded-lg">
			<div className="my-3 border-b pb-3">
				<h2 className=" text-xl font-[RobotoMedium]">Product Description</h2>
			</div>
			<div>
				<div className="text-sm font-[RobotoRegular]">
					<p className=" mb-3">{data?.description}</p>
					<span className="mb-2">SPECIFICATIONS</span>
					<ul className="list-disc px-4">
						<li>Battery Cell Type: Lithium Battery </li>
						<li>Capacity: 20,000mAh</li>
						<li>Rated Input: DC 5.0V, 2.1A</li>
						<li>Rated Output: DC 5.0V - 2.1A , 5.0V - 1A</li>
						<li>Dimensions: 165.5*83*22.9mm</li>
					</ul>
					<br />
					<span className="font-[RobotoBold]">About this item</span> <br />
					<br />
					20000mAh battery power bank packs not only for portable charging but
					also around the home. Allowing you charge mobile devices without
					having to be tethered to a plug socket. Each of them fully charges 4.2
					times for Samsung S10, 4 times for iPhone 11, 2.4 times for iPad mini
					5 and 4.6 times for iPhone X. <br />
					<br />
					Dual Output & Input: Each has 2 USB output ports that detect all the
					connected devices and efficiently distributes the current output up to
					5V 2.1A. The USB C and Micro USB ports can fully refill the battery
					itself in 10 hrs at 5V 2.0A. <br />
					<br />
					Reliable Li-polymer Cell: Thanks to the Li-polymer battery pack, the
					charger is much safer than any Li-ion charger. Also, it's lighter and
					slimer that you can easily carry it around, even on airplanes. <br />
					<br />
					Handy: It feels incredibly compact for a 20000mAh power bank, weighing
					just only 21mm thick. Grippy design is easy to hold, easy to toss into
					a bag and incredibly portable. <br />
					<br />
					What You Get: Itel 20000mAh USB Portable Charger ; 1 * USB Cable, 1 *
					12 Month Warranty
				</div>
			</div>
		</section>
	);
}

export default ProductDescription;
