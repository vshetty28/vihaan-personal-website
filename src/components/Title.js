import React from "react";
import { motion } from "motion/react";
const Title = ({ text }) => {
	return <motion.h1 initial={{opacity:0, y: 50}} animate={{opacity:1, y:0, transition:{duration:0.8, ease:'easeInOut'}}} className="min-w-screen lg:min-w-fit bg-inherit p-4 py-6 text-3xl lg:text-6xl lg:mb-5 justify-self-center text-center font-bold bg-linear-to-br to-primary from-purple-500 text-transparent bg-clip-text tracking-wide border-primary rounded-md">{text}</motion.h1>;
};

export default Title;
