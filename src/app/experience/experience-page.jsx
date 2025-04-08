"use client";
import { experiences } from "@/data/data";
import ExperienceList from "@/components/ExperienceList";
import { motion } from "motion/react";
import Title from "../../components/Title";

const ExperiencePage = () => {
	return (
		<div>
			<div className="w-screen">
				<Title text="Work Experience" />
				<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut", delay: 0.1 } }}>
					<ExperienceList experiences={experiences} />
				</motion.div>
			</div>
		</div>
	);
};

export default ExperiencePage;
