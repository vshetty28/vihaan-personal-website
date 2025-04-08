"use client";
import { motion } from "motion/react";

const HomePage = () => {
	return (
		<div className="flex flex-col items-center place-items-center text-center w-screen justify-items-center px-4">
			<div>
				<motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } }} className="text-nowrap text-xl lg:text-6xl m-4 p-2 bg-gradient-to-r from-primary to-purple-400 text-transparent bg-clip-text">
					Welcome to my personal website!
				</motion.h1>
				<motion.p initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.8, ease: "easeInOut" } }} className="mx-6 lg:mx-0">
					Please use the tabs above to navigate, or use the links below to contact me.
				</motion.p>
			</div>
		</div>
	);
};

export default HomePage;
