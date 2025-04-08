"use client";
import SkillList from "@/components/SkillList";
import { programmingLanguages, frameworks } from "@/data/data";
import Title from "@/components/Title";
const SkillsPage = () => {
	return (
		<div className="lg:mt-16">
			<Title text="Technical Skills" />
			<div className="flex flex-col justify-items-center">
				<SkillList name="Programming Languages" skills={programmingLanguages} />
				<SkillList name="Frameworks/Technologies" skills={frameworks} />
			</div>
		</div>
	);
};

export default SkillsPage;
