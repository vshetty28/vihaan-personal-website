import React from "react";
const checkmarkIcon = (
	<div className="timeline-middle">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
			<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
		</svg>
	</div>
);
const checkmarkOpen = (
	<div className="timeline-middle">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
			<path fillRule="oddeven" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
		</svg>
	</div>
);
const WorkExperience = ({ experience }) => {
	return (
		<li className="text-xs lg:text-sm">
			{experience.start ? <></> : <hr />}
			<div className="timeline-start lg:mx-3 text-xs lg:text-2xl lg:tracking-wider">{experience.date}</div>
			{experience.completed ? checkmarkIcon : checkmarkOpen}
			<button className="timeline-end timeline-box text-left hover:border-primary border-2 hover:scale-105 transition duration-200 ease-in-out lg:mx-3" onClick={() => document.getElementById(`my_modal_${experience.id}`).showModal()}>
				<p className="font-bold text-primary text-xs lg:text-lg">{experience.title}</p>
				<div className="flex flex-row gap-1">
					<p className="italic">{experience.company}</p>
					<p>&ndash;</p>
					<p>{experience.location}</p>
				</div>
			</button>
			<dialog id={`my_modal_${experience.id}`} className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-md lg:text-2xl text-primary mt-2">{experience.title}</h3>
					<p className="py-4 whitespace-pre-line">{experience.description}</p>
					<div className="modal-action">
						<form method="dialog">
							<button className="btn btn-sm lg:btn-md">Close</button>
						</form>
					</div>
				</div>
			</dialog>
			{experience.end ? <></> : <hr />}
		</li>
	);
};

export default WorkExperience;
