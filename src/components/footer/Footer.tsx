import { isMobile } from "react-device-detect";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

function Footer() {
	return <>{isMobile ? <MobileFooter /> : <DesktopFooter />}</>;
}

export default Footer;
