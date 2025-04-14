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

const jsonLdName = {
	"@context": "https://schema.org/",
	"@type": "WebSite",
	name: "Vihaan Shetty | Personal Website",
	url: "https://vihaan-shetty.com",
	potentialAction: {
		"@type": "SearchAction",
		target: "{search_term_string}",
		"query-input": "required name=search_term_string",
	},
};
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdName) }}></script>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
