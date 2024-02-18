import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IFeaturedBasic {
	className?: string;
	children: ReactNode | string;
}

interface IFeaturedImage {
	src: string;
	className?: string;
	alt: string;
}

interface IFeaturedLink extends IFeaturedBasic {
	to: string;
}
interface IFeaturedPrice {
	className?: string;
	price: number;
	hidden?: boolean;
}

export const Card = ({ className, children }: IFeaturedBasic) => (
	<div
		className={`flex flex-col bg-card px-4 py-4 rounded-lg border ${className}`}>
		{children}
	</div>
);

export const CardTitle = ({ className, children }: IFeaturedBasic) => (
	<h3
		className={` text-lg font-[RobotoBlack] md:h-[3rem] h-fit flex items-center tracking-tight ${className}`}>
		{children}
	</h3>
);

export const CardWrapper = ({ className, children }: IFeaturedBasic) => (
	<div className={className}>{children}</div>
);
export const CardImage = ({ src, className, alt }: IFeaturedImage) => (
	<img
		src={src}
		alt={alt}
		className={` object-cover max-h-[19rem] my-1 ${className}`}
		loading="lazy"
	/>
);

export const CardLink = ({ to, className, children }: IFeaturedLink) => (
	<Link
		to={to}
		className={`text-xs font-[RobotoMedium] text-primary ${className}`}>
		{children}
	</Link>
);

export const CardPrice = ({
	className,
	price,
	hidden = false,
}: IFeaturedPrice) => {
	const formattedPrice = price.toLocaleString("en-NG", {
		style: "currency",
		currency: "NGN",
	});
	return (
		<p hidden={hidden} className={className}>
			{formattedPrice}
		</p>
	);
};
