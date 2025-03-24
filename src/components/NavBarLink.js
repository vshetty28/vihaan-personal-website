import React from "react";
import Link from "next/link";
import { motion } from 'motion/react'
const NavBarLink = ({ name, link, activeTab, setActiveTab }) => {
    return (
			<Link onClick={() => setActiveTab(link)} className="group relative lg:p-2 lg:mx-2 text-center no-underline hover:no-underline text-xs lg:text-lg text-foreground hover:text-primary font-bold" href={link}>
				<h1 className={activeTab === link ? "text-primary" : ""}>{name}</h1>
				<div className={`hidden lg:block group-hover:w-full transform duration-300 ease-initial absolute bottom-0 left-0 h-0.5 bg-primary origin-left ${activeTab === link ? "w-full" : "w-0"}`} />
			</Link>
		);
};

export default NavBarLink;
