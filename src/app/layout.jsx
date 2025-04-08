import "@/styles/globals.css";
import Layout from "@/components/layout";
export const metadata = {
	openGraph: {
		siteName: "Vihaan Shetty | Home",
		type: "website",
		locale: "en_US",
	},
	robots: {
		index: true,
		follow: true,
		"max-image-preview": "large",
		"max-snippet": -1,
		"max-video-preview": -1,
		googleBot: "index, follow",
	},
	applicationName: "Vihaan Shetty | Home",
};
const jsonLd = {
	"@context": "https://schema.org/",
	"@type": "BreadcrumbList",
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: "https://vihaan-shetty.com",
		},
		{
			"@type": "ListItem",
			position: 2,
			name: "About Me",
			item: "https://vihaan-shetty.com/about-me",
		},
		{
			"@type": "ListItem",
			position: 3,
			name: "Experience",
			item: "https://vihaan-shetty.com/experience",
		},
		{
			"@type": "ListItem",
			position: 4,
			name: "Skills",
			item: "https://vihaan-shetty.com/skills",
		},
	],
};
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}></script>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
