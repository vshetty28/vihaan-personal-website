import React from 'react'
import Image from 'next/image'
const Skill = ({icon, text}) => {
  return (
		<div>
			<div className="group flex flex-row bg-base-100 p-1 px-2 items-center rounded-lg border-base-100 border-2 hover:border-primary">
				<Image src={icon} alt="" className="size-8 m-2 group-hover:scale-110 ease-in-out" width={50} height={50} />
				<h1 className="px-2 font-bold group-hover:scale-110 ease-in-out">{text}</h1>
			</div>
		</div>
	);
}

export default Skill