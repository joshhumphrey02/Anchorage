import AuthWrapper from "@/lib/AuthWrapper";
import { isMobile } from "react-device-detect";
import AccountMenu from "./AccountMenu";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "@/redux/hook";

function Account() {
	const user = useAppSelector((state) => state.User.id);
	console.log(user);
	return (
		<AuthWrapper>
			{user ? (
				<section>
					{isMobile ? (
						<div></div>
					) : (
						<div className=" grid grid-cols-[16rem,auto] mt-4 gap-2 container">
							<AccountMenu />
							<div>
								<Outlet />
							</div>
						</div>
					)}
				</section>
			) : (
				<Navigate to={"/"} />
			)}
		</AuthWrapper>
	);
}

export default Account;
