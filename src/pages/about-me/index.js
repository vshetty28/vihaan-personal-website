import React from "react";
import Image from "next/image";
import Title from "@/components/Title";
import Head from "next/head";
const AboutMe = () => {
	return (
		<div>
			<Head>
				<title>About Me</title>
			</Head>
			<div className="hero bg-inherit min-w-screen">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<Image src="/assets/headshot.png" alt="" className="size-1/2 lg:size-1/4 rounded-full shadow-2xl max-h-full lg:m-4" width={4000} height={4000} />
					<div className="lg:px-20 lg:mx-10">
						<h1 className="p-4 text-3xl lg:text-6xl mb-4 text-center font-bold text-primary tracking-wide"> About Me </h1>
						<p className="text-pretty text-sm lg:text-xl">Hi! My name is Vihaan Shetty. Welcome to my personal website! I am originally from the SF Bay Area, California, but am currently studying Computer Science and Data Science at Purdue. I expect to graduate in Spring 2026. I am a huge sports fan, with some of my favorite teams being the 49ers, Warriors, FC Barcelona and Liverpool FC. In my free time, I love working out and playing videogames. Feel free to contact me at the links provided below, or explore the rest of the site!</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
