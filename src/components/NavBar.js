import React from "react";
import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
	return (
		<div className="navbar bg-inherit min-w-screen border-black dark:border-base-100 border-b-2 pt-2 justify-items-center">
			<div className="flex flex-row w-screen justify-between lg:px-5">
				<Link className="btn btn-link btn-sm lg:btn-lg text-lg lg:text-2xl text-primary no-underline hover:no-underline" href="/">
					Home
				</Link>
				<div className="flex flex-row flex-wrap justify-end">
					<Link className="btn btn-link btn-xs lg:btn-md no-underline hover:no-underline transition duration-200 ease-in-out hover:text-primary lg:text-xl dark:text-white text-black" href="/about-me">
						About Me
					</Link>
					<Link className="btn btn-link btn-xs lg:btn-md no-underline hover:no-underline transition duration-200 ease-in-out hover:text-primary lg:text-xl dark:text-white text-black" href="/experience">
						Experience
					</Link>
					<Link className="btn btn-link btn-xs lg:btn-md no-underline hover:no-underline transition duration-200 ease-in-out hover:text-primary lg:text-xl dark:text-white text-black" href="/skills">
						Skills
					</Link>
					<div className="dropdown dropdown-end">
						<div tabIndex={0} role="button" className="btn btn-link btn-xs lg:btn-md no-underline hover:no-underline transition duration-200 ease-in-out hover:text-primary lg:text-xl dark:text-white text-black">
							More
						</div>
						<ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 lg:w-52 lg:p-2 shadow">
							<li>
								<Link href="/projects" className="hover:text-primary text-xs lg:text-lg">
									Projects
								</Link>
							</li>
							<li>
								<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-xs lg:text-lg">
									Resume
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
