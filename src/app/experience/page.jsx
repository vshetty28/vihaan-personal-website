import ExperiencePage from "@/app/experience/experience-page";

export const metadata = {
	title: "Experience",
	description: "Vihaan Shetty's Work Experience",
	openGraph: {
		url: "https://vihaan-shetty.com/experience",
		type: "website",
		title: "Experience",
		description: "Vihaan Shetty's Work Experience",
	},
};

const jsonLd = {
	"@context": "https://schema.org/",
	"@type": "BreadcrumbList",
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			name: "Experience",
			item: "https://vihaan-shetty.com/experience",
		},
	],
};

const Experience = () => {
	return (
		<div>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}></script>
			<ExperiencePage />
		</div>
	);
};

export default Experience;
