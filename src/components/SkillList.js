import React from 'react'
import Skill from './Skill'
import {motion} from 'motion/react'
const SkillList = ({name, skills}) => {
  return (
		<div className="">
			<motion.h1 initial={{ opacity: 0, scale:1, y: 50 }} animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeInOut", delay: 0.1 } }} className="lg:p-2 m-2 place-self-center text-center font-bold text-lg lg:text-3xl tracking-normal">
				{name}
			</motion.h1>
			<motion.div initial={{ opacity: 0, scale:0.5, y: 50}} animate={{ opacity: 1, scale: 1, y:0, transition: { duration: 1, ease: "easeInOut", delay: 0.8} }} className="flex flex-row gap-2 items-center flex-wrap justify-center p-2 lg:px-72 lg:p-4">
				{skills.map((skill) => (
					<Skill key={skill.text} icon={skill.icon} text={skill.text} />
				))}
			</motion.div>
		</div>
	);
}

export default SkillList