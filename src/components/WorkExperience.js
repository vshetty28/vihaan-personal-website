import React from "react";
const checkmarkIcon = (
	<div className="timeline-middle">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
			<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
		</svg>
	</div>
);
const WorkExperience = ({ experience }) => {
	return (
		<li>
			<div className="timeline-start">{experience.date}</div>
			{checkmarkIcon}
			<div className="timeline-end timeline-box">
				<p className="font-bold text-primary">{experience.title}</p>
				<p className="text-xs lg:text-sm italic">{experience.company}</p>
			</div>
			<hr />
		</li>
	);
};

export default WorkExperience;
