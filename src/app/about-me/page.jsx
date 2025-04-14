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

const jsonLd = {
	"@context": "https://schema.org/",
	"@type": "BreadcrumbList",
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			name: "About Me",
			item: "https://vihaan-shetty.com/about-me",
		},
	],
};

const AboutMe = () => {
	return (
		<div>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}></script>
			<AboutMePage />
		</div>
	);
};

export default AboutMe;
