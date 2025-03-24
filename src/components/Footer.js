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
			<span className='divider m-1'></span>
			<footer className="flex flex-row place-items-start gap-2 w-full items-center justify-between px-2 lg:px-6 my-2 lg:mb-4">
				<h1 className="text-neutral-content text-xs text-nowrap lg:text-md">© {new Date().getFullYear()} Vihaan Shetty</h1>
				<div className="flex flex-row gap-2 items-center">
					<h1 className="lg:text-xl mx-1 lg:mx-2">Contact Me</h1>

					<a href="mailto:vihaanshetty@gmail.com">
						<Image src="/assets/email.svg" alt="" className="size-8 lg:size-11 hover:scale-110 transition delay-0 duration-200 ease-in-out" width={50} height={50} />
					</a>
					<a href="https://linkedin.com/in/vihaanshetty" target="_blank">
						<Image src="/assets/linkedin.svg" alt="" className="size-6 lg:size-8 transition delay-0 duration-200 ease-in-out hover:scale-110" width={50} height={50} />
					</a>
				</div>
			</footer>
		</div>
	);
}

export default Footer