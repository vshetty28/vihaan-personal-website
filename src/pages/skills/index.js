import React from "react";
import SkillList from "@/components/SkillList";
import {programmingLanguages, frameworks} from "@/data/data";
import Title from "@/components/Title";


const Skills = () => {
	return (
		<div>
			<title>Skills</title>

			<Title text="Technical Skills" />
			<div className="justify-items-center mt-36">
				<SkillList name="Programming Languages" skills={programmingLanguages} />
				<SkillList name="Frameworks/Technologies" skills={frameworks} />
			</div>
		</div>
	);
};

export default Skills;
