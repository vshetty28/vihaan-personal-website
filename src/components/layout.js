import NavBar from "./NavBar";
import Footer from "./Footer";
import { Geist, Geist_Mono, Roboto, Roboto_Flex } from "next/font/google";
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const roboto = Roboto_Flex({
	subsets: ["latin"],
	variable: "--font-roboto",
	display: "swap",
});

export default function Layout({ children }) {

	return (
		<div className={`${roboto.variable} ${geistMono.variable} flex flex-col min-h-screen min-w-screen font-[family-name:var(--font-geist-sans)] antialiased text-sm lg:text-xl justify-between`}>
			<div className="flex-none w-screen">
				<NavBar />
			</div>
			<main className="flex-auto min-w-screen flex items-center justify-items-center place-items-center">{children}</main>
			<div className="flex-none">
				<Footer />
			</div>
		</div>
	);
}
