import Featured from "./Featured";
import Products from "./Products";
import Categories from "./Category";
import WelcomeSection from "./WelcomeSection";
import CarouselImages from "./CarouselImages";
import AccountNav from "./AccountNav";
import AuthWrapper from "@/lib/AuthWrapper";
import { isMobile } from "react-device-detect";
function Home() {
	return (
		<AuthWrapper>
			<main className=" pt-4">
				<div
					className={
						isMobile
							? "hidden"
							: "container grid grid-cols-[16rem,auto,16rem] gap-3"
					}>
					<WelcomeSection />
					<CarouselImages />
					<AccountNav />
				</div>
				<div>
					<Featured />
					<Categories />
					<Products />
				</div>
			</main>
		</AuthWrapper>
	);
}

export default Home;
