import Title from "@/components/Title";
import React from "react";
import Head from "next/head";
import { motion } from "motion/react";
const Projects = () => {
	return (
		<div className="text-center w-screen">
			<Head>
				<title>Projects</title>
			</Head>
			<Title text="Projects" />
			<motion.div initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut", delay: 0.8 } }}>
				Under Construction. Please check back soon!
			</motion.div>
		</div>
	);
};

export default Projects;
