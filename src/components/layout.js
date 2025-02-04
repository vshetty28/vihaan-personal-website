import NavBar from "./NavBar";
import Footer from "./Footer";
import { Geist, Geist_Mono } from "next/font/google";

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
		<div className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-8 pb-20 font-[family-name:var(--font-geist-sans)] text-xl`}>
			<NavBar />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
