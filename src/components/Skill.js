import React from 'react'
import Image from 'next/image'
const Skill = ({icon, text}) => {
  return (
		<div>
			<div className="group flex flex-row bg-base-100 p-1 px-2 items-center rounded-lg dark:border-black border-2 transition delay-0 duration-200 ease-in-out hover:border-2 hover:border-primary ">
				<Image src={icon} alt="" className="size-4 lg:size-8 m-1 lg:m-2" width={50} height={50} />
				<h1 className=" text-xs lg:text-lg px-2 transition delay-0 duration-200 font-bold font-sans group-hover:scale-110 ease-in-out select-none">{text}</h1>
			</div>
		</div>
	);
}

export default Skill