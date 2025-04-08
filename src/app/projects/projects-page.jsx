"use client";
import Title from "@/components/Title";
import { motion } from "motion/react";

const ProjectsPage = () => {
	return (
		<div className="text-center w-screen">
			<Title text="Projects" />
			<motion.div initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut", delay: 0.8 } }}>
				Under Construction. Please check back soon!
			</motion.div>
		</div>
	);
};

export default ProjectsPage;
