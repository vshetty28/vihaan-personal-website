import React from "react";
import Image from "next/image";
const Project = ({ project }) => {
	return (
		<div className="flex flex-col h-full border-2 border-gray-700 rounded-md items-center justify-start pb-4 px-4 gap-3">
			<h1 className="text-3xl font-bold mt-4 bg-linear-to-r from-purple-500 to-primary text-transparent bg-clip-text">{project.name}</h1>
			<div className="flex-0 flex flex-row flex-wrap justify-center gap-2">
				{project.skills.map((skill, index) => (
					<span key={index} className="bg-primary text-white dark:text-foreground text-xs font-semibold px-2 py-0.5 rounded-md">
						{skill}
					</span>
				))}
			</div>
			<div className="flex-2 self-center">
				<h1 className="text-sm text-center text-pretty">{project.description}</h1>
			</div>
			<div className={`flex-0 flex items-center justify-center gap-2`}>
				<button className={`btn btn-soft btn-md ${project.github ? "" : "disabled btn-disabled"}`}>
					<Image src="/assets/github.svg" alt="GitHub Icon" width={24} height={24} className="" />
					<a href={project.github} target="_blank" rel="noopener noreferrer">
						GitHub
					</a>
				</button>
			</div>
		</div>
	);
};

export default Project;
