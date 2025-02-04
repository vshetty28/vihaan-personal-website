import React from 'react'
import Image from 'next/image';


const github_button = (
	<a href="https://github.com/vshetty28" target="_blank">
		<Image src='/assets/github_icon.png' alt="" className="size-10 rounded-lg" />
	</a>
);

const Footer = () => {
  return (
		<div>
			<footer className="footer w-screen text-neutral-content items-center p-4">
				<nav className="grid-flow-col gap-16 md:place-self-center ">
					<h1 className="footer-title text-2xl mt-1">Contact me:</h1>
					<a href="mailto:vihaandhshetty@gmail.com">
						<Image src='/assets/email.svg' alt="" className="size-10" width={50} height={50} />
					</a>
					<a href="https://linkedin.com/in/vihaanshetty" target="_blank">
						<Image src='/assets/linkedin.svg' alt="" className="size-10" width={50} height={50}/>
					</a>
				</nav>
			</footer>
		</div>
	);
}

export default Footer