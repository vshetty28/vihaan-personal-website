import React from 'react'
import Skill from './Skill'

const SkillList = ({name, skills}) => {
  return (
		<div className='lg:my-8'>
			<h1 className='lg:p-2 m-2 place-self-center text-center font-bold text-lg lg:text-3xl tracking-normal'>{name}</h1>
			<div className="flex flex-row gap-2 items-center flex-wrap justify-center p-2 lg:p-4">
				{skills.map((skill) => (
					<Skill key={skill.text} icon={skill.icon} text={skill.text} />
				))}
			</div>
		</div>
	);
}

export default SkillList