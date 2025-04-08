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
	applicationName: "Vihaan Shetty | Home"
};
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
