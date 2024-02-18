import AuthWrapper from "@/lib/AuthWrapper";
import DesktopView from "./desktopView";
import { useParams } from "react-router-dom";

export interface ACategory {
	state: string;
}

function Account() {
	const { ACategory } = useParams();
	return (
		<AuthWrapper>
			<section>
				<DesktopView state={ACategory} />
			</section>
		</AuthWrapper>
	);
}

export default Account;
