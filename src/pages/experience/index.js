import Title from "@/components/Title";
import React from "react";
import Head from "next/head";
const checkmarkIcon = (
	<div className="timeline-middle">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
			<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
		</svg>
	</div>
);
const Experience = () => {
	return (
		<div className="w-screen">
			<Head>
				<title>Experience</title>
			</Head>
			<Title text="Work Experience" />
			<ul className="timeline timeline-vertical px-4">
				<li>
					<div className="timeline-start">Aug 2023 - May 2024</div>
					{checkmarkIcon}
					<div className="timeline-end timeline-box">
						<p className="font-bold">Undergraduate Researcher - Pro Football Focus</p>
						<p className="text-xs lg:text-sm">The Data Mine - Purdue University</p>
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div className="timeline-start">Jan 2024 - Present</div>
					{checkmarkIcon}
					<div className="timeline-end timeline-box">
						<p className="font-bold">Corporate Partners TA</p>
						<p className="text-xs lg:text-sm">The Data Mine - Purdue University</p>
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div className="timeline-start">Summer 2025</div>
					{checkmarkIcon}
					<div className="timeline-end timeline-box">
						<p className="font-bold">Data Science Engineer Intern</p>
						<p className="text-xs lg:text-sm">BNY Mellon</p>
					</div>
					<hr />
				</li>
			</ul>
		</div>
	);
};

export default Experience;
