"use client";
import Title from "@/components/Title";
import { motion } from "motion/react";
import Project from "@/components/Project";
import { projects } from "@/data/data";

const ProjectsPage = () => {
	return (
		<div className="text-center w-screen">
			<Title text="Projects"/>
			<motion.div initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut", delay: 0.8 } }}>
				<div className="grid auto-rows-max auto-cols-max grid-cols-1 lg:grid-cols-3 gap-4 px-5 items-stretch">
					{projects.map((project) => (
						<Project key={project.id} project={project} />
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default ProjectsPage;
