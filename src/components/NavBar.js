import React from "react";
import Link from "next/link";
const NavBar = () => {
	return (
		<div className="navbar bg-inherit">
			<div className="flex-none">
				<details className="dropdown">
					<summary className="btn btn-square btn-ghost m-1 bg-inherit">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</summary>
					<ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
						<li>
							<Link href="/about-me">About Me</Link>
						</li>
						<li>
							<Link href="/experience">Experience</Link>
						</li>
						<li>
							<Link href="/skills">Skills</Link>
						</li>
						<li>
							<a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
								Resume
							</a>
						</li>
					</ul>
				</details>
			</div>
			<div className="flex-1">
				<Link className="btn btn-ghost text-xl" href="/">
					Home
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
