import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import LocalDB from "@/localDB/Schema";
import { removeItem } from "@/reducers/Cart";
import { useAppDispatch } from "@/redux/hook";
import { Trash } from "lucide-react";

interface CID {
	id: number;
}

export function DeleteItem({ id }: CID) {
	const dispatch = useAppDispatch();
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant={"ghost"} className="p-0 sm:p-2 h-fit w-fit">
					<Trash color="red" />
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className=" ">Are you sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This will permanently delete your item from your cart.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction
						onClick={() => {
							(async () => {
								if (id === undefined) return;
								const Ldb = new LocalDB();
								await Ldb.createObjectStore(["cart"]);
								await Ldb.deleteValue("cart", id);
								dispatch(removeItem({ id: id }));
							})();
						}}>
						Delete
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
