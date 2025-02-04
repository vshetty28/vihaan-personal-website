import React from "react";
import Image from "next/image";
const AboutMe = () => {
	return (
		<div>
			<div className="hero bg-inherit w-screen">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<Image src="/assets/headshot.png" alt='' class="size-1/3 rounded-full shadow-2xl" width={4000} height={4000}/>
					<div className="px-24 mx-10">
						<h1 className="text-5xl font-bold text-primary">About Me</h1>
						<p className="py-6">Hi! My name is Vihaan Shetty. Welcome to my personal website! I am originally from the SF Bay Area, California, but studying Computer Science and Data Science at Purdue. I am a huge sports fan, with some of my favorite teams being the 49ers, Warriors, FC Barcelona and Liverpool FC. In my free time, I love working out and playing videogames. Feel free to contact me at the links provided below!</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
