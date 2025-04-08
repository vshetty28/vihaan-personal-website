import React from "react";
import AboutMePage from "@/app/about-me/aboutme-page";

export const metadata = {
	title: "About Me",
	description: "About Vihaan Shetty",
	openGraph: {
		url: "https://vihaan-shetty.com/about-me",
		type: "website",
		title: "About Me",
		description: "About Vihaan Shetty",
	},
};
const AboutMe = () => {
	return (
		<div>
			<AboutMePage />
		</div>
	);
};

export default AboutMe;
