import React from "react";
import { motion } from "motion/react";
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
			<motion.button initial={{opacity:0, x:200}} animate={{opacity:1, x:0, transition:{duration:0.6, delay:0.2 + 0.4 * experience.id, ease:'easeInOut'}}} whileHover={{scale:1.05}} className="timeline-end timeline-box text-left hover:border-primary bg-transparent border-base-100 border-2 lg:mx-3" onClick={() => document.getElementById(`my_modal_${experience.id}`).showModal()}>
				<motion.p className="font-bold bg-gradient-to-tr to-primary from-purple-400 text-transparent bg-clip-text text-xs lg:text-lg text-balance">{experience.title}</motion.p>
				<motion.div className="flex flex-col lg:flex-row lg:gap-1">
					<motion.p className="italic shrink-0 font-bold lg:font-normal">{experience.company}</motion.p>
					<motion.p className="hidden lg:block">&ndash;</motion.p>
					<motion.p className="shrink-0">{experience.location}</motion.p>
				</motion.div>
			</motion.button>
			<dialog id={`my_modal_${experience.id}`} className="modal">
				<div className="modal-box bg-base-300">
					<h1 className="font-bold text-lg lg:text-2xl bg-gradient-to-tr to-primary from-purple-400 text-transparent bg-clip-text my-2">{experience.title}</h1>
					<p className="lg:py-4 whitespace-pre-line">{experience.description}</p>
					<div className="modal-action">
						<form method="dialog">
							<button className="btn btn-primary btn-xs lg:btn-md">Close</button>
						</form>
					</div>
				</div>
			</dialog>
			{experience.end ? <></> : <hr />}
		</li>
	);
};

export default WorkExperience;
