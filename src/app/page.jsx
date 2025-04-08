import HomePage from "./home-page";
export const metadata = {
	title: "Vihaan Shetty | Home",
	description: "vihaan-shetty.com - Vihaan Shetty's Personal Website and Portfolio",
	keywords: ["vihaan", "shetty", "personal website", "computer science", "cupertino", "california", "monta vista", "purdue", "data science", "software engineer", "new york", "bny mellon"],
	openGraph: {
		url: "https://vihaan-shetty.com",
		type: "website",
		title: "Vihaan Shetty | Home",
		description: "vihaan-shetty.com - Vihaan Shetty's Personal Website and Portfolio",
	},
};

export default function Home() {
	return <HomePage />;
}
