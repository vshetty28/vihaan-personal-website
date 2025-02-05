import Image from "next/image";

export default function Home() {
	return (
		<div className="text-center">
			<title>Vihaan Shetty | Home</title>
			<div className="">
				<h1 className="text-5xl m-4 transition delay-75 duration-500 ease-in-out hover:text-primary">Welcome to my personal website! </h1>
				<p className="transition delay-75 duration-500 ease-in-out hover:text-primary">Please use the tabs above to navigate, or use the links below to contact me.</p>
			</div>
		</div>
	);
}
