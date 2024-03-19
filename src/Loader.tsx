import logo from "@/assets/logos/anchorage.png";

function Loader() {
	return (
		<div className=" flex fixed top-0 left-0 w-screen justify-center after:content('') after:absolute after:top-0 after:w-screen after:h-screen after:bg-black after:opacity-40 after:-z-50 after:left-0 items-center text-2xl font-[RobotoBlack] h-screen">
			<img
				src={logo}
				alt="logo"
				className=" cursor-pointer z-50 w-[4rem] h-[4rem] loader"
			/>
		</div>
	);
}

export default Loader;
