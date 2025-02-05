import React from "react";
import WorkExperience from "./WorkExperience";
const ExperienceList = ({ experiences }) => {
	return (
		<ul className="timeline timeline-vertical px-4">
			{experiences.map((experience) => (
				<WorkExperience key={experience.title} experience={experience} />
			))}
		</ul>
	);
};

export default ExperienceList;
