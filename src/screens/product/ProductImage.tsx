import { useState } from "react";
import { ICurrentProduct } from "./Product";
import { isMobile } from "react-device-detect";

function ProductImage({ data }: ICurrentProduct) {
	const [image, setImage] = useState(0);
	return (
		<>
			{isMobile ? (
				<div className="flex gap-2 overflow-hidden overflow-x-scroll whitespace-nowrap">
					{data.images &&
						data.images.map((img, i) => (
							<img
								key={i}
								src={img}
								alt="product"
								className={
									"rounded-lg bg-gray-100 p-1  w-[90%] sm:min-w-[32rem] h-[19rem] sm:h-[25rem]"
								}
							/>
						))}
				</div>
			) : (
				<div>
					<div className="relative">
						<img
							src={data.images && data.images[image]}
							alt="product"
							className="rounded-lg 2xl:h-[27rem] w-full h-[20rem]"
						/>
					</div>
					<div className="flex gap-2 mt-3 overflow-hidden overflow-x-scroll whitespace-nowrap">
						{data.images &&
							data.images.map((img, i) => (
								<img
									key={i}
									onMouseOver={() => setImage(i)}
									onClick={() => setImage(i)}
									src={img}
									alt="product"
									className={`${
										image === i ? "border outline-2" : "border-0 outline-0"
									} w-[4.5rem] h-[4.5rem] border-primary outline-primary hover:border border-black hover:outline-2 rounded-sm cursor-pointer`}
								/>
							))}
					</div>
				</div>
			)}
		</>
	);
}

export default ProductImage;
