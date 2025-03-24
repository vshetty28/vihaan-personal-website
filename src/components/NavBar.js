import React from "react";
import Link from "next/link";
import NavBarLink from "./NavBarLink";
import { useState } from "react";

const NavBar = () => {
	const [activeTab, setActiveTab] = useState('/');
	return (
		<div className="navbar min-w-screen pt-2 justify-items-center lg:mt-3">
			<div className="flex flex-row w-screen justify-between items-center lg:px-5">
				<Link className="btn btn-link btn-xs lg:btn-lg lg:text-2xl text-primary no-underline hover:no-underline bg-gradient-to-br to-primary from-purple-500 text-transparent bg-clip-text" href="/">
					<button onClick={() => setActiveTab("/")}>Home</button>
				</Link>
				<div className="flex flex-row flex-nowrap justify-end gap-2 items-center">
					<NavBarLink name="About Me" link="/about-me" activeTab={activeTab} setActiveTab={setActiveTab} />
					<NavBarLink name="Experience" link="/experience" activeTab={activeTab} setActiveTab={setActiveTab} />
					<NavBarLink name="Skills" link="/skills" activeTab={activeTab} setActiveTab={setActiveTab} />
					<NavBarLink name="Projects" link="/projects" activeTab={activeTab} setActiveTab={setActiveTab} />
					<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-xs lg:text-lg font-bold lg:mx-2">
						Resume
					</a>
				</div>
			</div>
			<div className="absolute top-0 w-full bg-black "></div>
		</div>
	);
};

export default NavBar;
