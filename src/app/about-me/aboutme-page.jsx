"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Title from "../../components/Title";

const AboutMePage = () => {
	return (
		<div className="hero max-h-screen">
			<div className="hero-content max-w-screen flex-col lg:flex-row-reverse">
				<motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1, x: 0, transition: { duration: 1.1, ease: "easeInOut", delay: 0.8 } }} className="flex-2 size-5/12 lg:size-1/4 rounded-full lg:m-4">
					<motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 0 }}>
						<Image src="/headshot.jpg" alt="Vihaan Headshot" className="rounded-full lg:size-3/4" width={1000} height={1000} />
					</motion.div>
				</motion.div>
				<div className="lg:px-20 lg:mx-10 flex-2">
					<Title text="About Me" />
					<motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut", delay: 0.1 } }} className="text-center text-pretty text-sm lg:text-xl max-w-screen px-5 lg:px-0">
						Hi! My name is Vihaan Shetty. Welcome to my personal website! I am originally from the SF Bay Area, California, however, I am currently studying Computer Science and Data Science at Purdue University. I expect to graduate in Spring 2026. I am a huge sports fan, with some of my favorite teams being the 49ers, Warriors, FC Barcelona and Liverpool FC. In my free time I love to work out, watch sports, play videogames, or spend time with my family, friends, and my dog. Feel free to contact me at the links below, or explore the rest of the site!
					</motion.p>
				</div>
			</div>
		</div>
	);
};

export default AboutMePage;
