import {
	isDesktop,
	isMacOs,
	isWindows,
	isMobile,
	isTablet,
} from "react-device-detect";
import { onAuthStateChanged } from "firebase/auth";
import { FC, ReactNode, useEffect } from "react";
import { auth } from "../firebase/firebaseConfig";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { updateUser } from "../reducers/User";
import Loader from "../Loader";
import { Navigate, useLocation } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import LocalDB from "@/localDB/Schema";
import { updateCart } from "@/reducers/Cart";

type MyComponentProps = {
	children: ReactNode;
};

const AuthWrapper: FC<MyComponentProps> = ({ children }) => {
	const { pathname } = useLocation();
	const User = useAppSelector((state) => state.User);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (User.logged === "logged") return;
		const unSubcribe = onAuthStateChanged(auth, (result) => {
			if (result && User.logged === "checking") {
				dispatch(
					updateUser({
						id: result.uid,
						name: result.displayName ? result.displayName : "",
						email: result.email ? result.email : "",
						verified: result.emailVerified,
						logged: "logged",
						image: result.photoURL ? result.photoURL : "",
					})
				);
			} else if (!result && User.logged === "checking") {
				dispatch(updateUser({ logged: "notLogged" }));
			}
		});

		(async () => {
			const Ldb = new LocalDB();
			await Ldb.createObjectStore(["cart"]);
			const result = await Ldb.getAllValue("cart");
			dispatch(updateCart(result));
		})();
		return unSubcribe;
	}, [User.logged, dispatch]);

	if (pathname === "/login" || pathname === "/register") {
		return (
			<div>
				{User.logged === "checking" ? (
					<Loader />
				) : User.logged === "logged" ? (
					<Navigate to={"/"} replace={true} />
				) : (
					<div>{children}</div>
				)}
			</div>
		);
	} else {
		return (
			<div
				className={isMobile || isTablet ? "overflow-hidden" : " overflow-auto"}>
				{User.logged === "checking" ? (
					<Loader />
				) : (
					<div
						className={
							isDesktop || isWindows || isMacOs
								? "min-w-[75rem] xl:min-w-[100dvw] w-full overflow-auto"
								: ""
						}>
						<Navbar />
						<div>{children}</div>
						<Footer />
					</div>
				)}
			</div>
		);
	}
};
export default AuthWrapper;
