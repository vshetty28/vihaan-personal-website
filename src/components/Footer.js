import React from 'react'
import Image from 'next/image';


const github_button = (
	<a href="https://github.com/vshetty28" target="_blank">
		<Image src='/assets/github_icon.png' alt="" className="size-10 rounded-lg" />
	</a>
);

const Footer = () => {
  return (
		<div className="place-items-center">
			<footer className="footer w-screen items-center justify-between px-4">
				<h1 className="text-2xl mt-4 me-10 text-gray-300 font-bold ">Contact Me</h1>
				<div className='flex flex-row'>
					<a href="mailto:vihaandhshetty@gmail.com">
						<Image src="/assets/email.svg" alt="" className="size-14 hover:scale-110 mt-2" width={50} height={80} />
					</a>
					<a href="https://linkedin.com/in/vihaanshetty" target="_blank">
						<Image src="/assets/linkedin.svg" alt="" className="size-10 mt-4 hover:scale-110 " width={50} height={50} />
					</a>
				</div>
			</footer>
		</div>
	);
}

export default Footer