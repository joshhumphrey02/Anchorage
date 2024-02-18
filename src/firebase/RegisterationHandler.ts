import { IUser } from "@/screens/registeration/Register";
import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function RegisterationHandler({ email, password }: IUser) {
	try {
		const storeD = await createUserWithEmailAndPassword(auth, email, password);
		if (storeD.user) {
			// await updateProfile(storeD.user, {
			// 	displayName: store.storeName,
			// });
			return { error: false, message: email };
		}
	} catch (error) {
		console.log(error);
		return { error: true, message: (error as Error).message };
	}
}
