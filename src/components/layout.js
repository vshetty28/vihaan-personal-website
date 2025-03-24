import NavBar from "./NavBar";
import Footer from "./Footer";
import { Geist, Geist_Mono, Montserrat, Roboto_Flex, Inter } from "next/font/google";
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

const montserrat = Montserrat({
	subsets: ["latin"],
	display:'swap'
});

const inter = Inter({
	subsets: ["latin"],
	display:'swap'
});

export default function Layout({ children }) {

	return (
		<div className={`${inter.className} flex flex-col min-h-screen min-w-screen antialiased text-sm lg:text-xl justify-between scroll-auto scrollbar`}>
			<div className="sticky top-0 bg-[var(--background)] backdrop-blur-2xl flex-none w-screen">
				<NavBar />
			</div>
			<main className="flex-auto min-w-screen flex items-center justify-items-center place-items-center">{children}</main>
			<div className="flex-none">
				<Footer />
			</div>
		</div>
	);
}
