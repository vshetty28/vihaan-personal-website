import React from "react";
import Image from "next/image";
import Title from "@/components/Title";
import Head from "next/head";
import { motion } from "motion/react";
const AboutMe = () => {
	return (
		<div>
			<Head>
				<title>About Me</title>
			</Head>
			<div className="hero bg-inherit min-w-screen">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeInOut", delay: 0.8} }} className="flex-2 size-5/12 lg:size-1/4 rounded-full shadow-2xl max-h-full lg:m-4">
						<Image src="/assets/headshot.png" alt="Headshot" className="rounded-full" width={1000} height={1000} />
					</motion.div>
					<div className="lg:px-20 lg:mx-10 flex-1">
						<Title text="About Me" />
						<motion.p initial={{ opacity: 0, x: -150 }} animate={{ opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeInOut", delay: 0.8 } }} className="text-center text-balance lg:text-left text-sm lg:text-xl">
							Hi! My name is Vihaan Shetty. Welcome to my personal website! I am originally from the SF Bay Area, California, but am currently studying Computer Science and Data Science at Purdue. I expect to graduate in Spring 2026. I am a huge sports fan, with some of my favorite teams being the 49ers, Warriors, FC Barcelona and Liverpool FC. In my free time, I love working out and playing videogames. Feel free to contact me at the links provided below, or explore the rest of the site!
						</motion.p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
