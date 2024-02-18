interface data {
	image: string;
	title: string;
	message: string;
}

function InvalidData({ image, title, message }: data) {
	return (
		<div className=" mx-auto w-fit mt-[2rem] pb-10 lg:pb-5">
			<div className=" flex justify-center">
				<img
					src={image}
					alt={title}
					className=" rounded w-[18rem] sm:w-[23rem] lg:w-[22rem]"
					width={300}
					height={250}
				/>
			</div>
			<h4 className=" font-[RobotoMedium] text-xl text-center my-3">{title}</h4>
			<p className="text-center font-[RobotoLight] my-1">{message}</p>
		</div>
	);
}

export default InvalidData;
