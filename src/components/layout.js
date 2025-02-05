import NavBar from "./NavBar";
import Footer from "./Footer";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function Layout({ children }) {
	return (
		<div className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen min-w-screen font-[family-name:var(--font-geist-sans)] antialiased text-sm lg:text-xl justify-between bg-black text-white`}>
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
