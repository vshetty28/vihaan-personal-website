import React from 'react'
import Image from 'next/image';


const github_button = (
	<a href="https://github.com/vshetty28" target="_blank">
		<Image src='/assets/github_icon.png' alt="" className="size-10 rounded-lg" />
	</a>
);

const Footer = () => {
  return (
		<div className="">
			<footer className="footer min-w-screen items-center justify-between px-6">
				<h1 className="invisible lg:visible lg:text-2xl lg:mt-4 font-bold text-primary">Contact Me</h1>
				<div className="flex flex-row">
					<a href="mailto:vihaandhshetty@gmail.com">
						<Image src="/assets/email.svg" alt="" className="size-12 lg:size-14 hover:scale-110 lg:mt-2 transition delay-0 duration-200 ease-in-out" width={50} height={80} />
					</a>
					<a href="https://linkedin.com/in/vihaanshetty" target="_blank">
						<Image src="/assets/linkedin.svg" alt="" className="size-8 lg:size-10 mt-2 mb-3 lg:mb-0 lg:mt-4 transition delay-0 duration-200 ease-in-out hover:scale-110 " width={50} height={50} />
					</a>
				</div>
			</footer>
		</div>
	);
}

export default Footer