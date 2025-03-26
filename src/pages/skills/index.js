import React from "react";
import SkillList from "@/components/SkillList";
import { programmingLanguages, frameworks } from "@/data/data";
import Title from "@/components/Title";
import Head from "next/head";
import { motion } from "motion/react";
const Skills = () => {
	return (
		<div>
			<Head>
				<title>Skills</title>
			</Head>
			<Title text="Technical Skills" />
			<div className="flex flex-col justify-items-center">
				<SkillList name="Programming Languages" skills={programmingLanguages} />
				<SkillList name="Frameworks/Technologies" skills={frameworks}/>
			</div>
		</div>
	);
};

export default Skills;
