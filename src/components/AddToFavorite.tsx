import { type ICart } from "@/@types";
import LocalDB from "@/localDB/Schema";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";
import Loader from "@/Loader";
import toast from "react-hot-toast";

interface IFav {
	product: Partial<ICart>;
}

function AddToFavorite({ product }: IFav) {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	async function AddToFav() {
		if (product.id === undefined) return;
		setIsLoading(true);
		const ldb = new LocalDB();
		await ldb.createObjectStore(["fav"]);
		await ldb.putValue("fav", {
			id: product.id,
			title: product.title,
			image: product.image,
			price: product.price,
			quantity: product.quantity,
			checked: product.checked,
		});
		toast.success("Item Added successfully");
		return setIsLoading(false);
	}
	return (
		<>
			{isLoading && <Loader />}
			<Button
				onClick={AddToFav}
				variant={"ghost"}
				className="p-0 sm:p-2 h-fit w-fit">
				<Heart color="blue" />
			</Button>
		</>
	);
}

export default AddToFavorite;
