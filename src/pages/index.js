import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-col items-center place-items-center text-center w-screen justify-items-center px-4">
			<title>Vihaan Shetty | Home</title>
			<div className="">
				<h1 className="text-xl lg:text-5xl m-4 bg-gradient-to-r from-primary to-indigo-700 text-transparent bg-clip-text">Welcome to my personal website! </h1>
				<p className="transition delay-75 duration-500 ease-in-out hover:text-primary">Please use the tabs above to navigate, or use the links below to contact me.</p>
			</div>
		</div>
	);
}
