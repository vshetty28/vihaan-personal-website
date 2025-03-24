import Title from "@/components/Title";
import React from "react";
import Head from "next/head";
import {experiences} from '@/data/data'
import ExperienceList from "@/components/ExperienceList";
import {motion} from 'motion/react'
const checkmarkIcon = (
	<div className="timeline-middle">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
			<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
		</svg>
	</div>
);
const Experience = () => {
	return (
		<div className="w-screen">
			<Head>
				<title>Experience</title>
			</Head>
			<Title text="Work Experience" />
			<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut", delay: 0.1 } }}>
				<ExperienceList experiences={experiences} />
			</motion.div>
		</div>
	);
};

export default Experience;
