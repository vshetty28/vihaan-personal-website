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
				<motion.div initial={{ opacity: 0, x: -150 }} animate={{ opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut", delay: 0.6 } }}>
					<SkillList name="Programming Languages" skills={programmingLanguages} />
				</motion.div>
				<motion.div initial={{ opacity: 0, x: -150 }} animate={{ opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut", delay: 1.4 } }}>
					<SkillList name="Frameworks/Technologies" skills={frameworks} />
				</motion.div>
			</div>
		</div>
	);
};

export default Skills;
