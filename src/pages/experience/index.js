import Title from "@/components/Title";
import React from "react";
import Head from "next/head";
import { experiences } from "@/data/data";
import ExperienceList from "@/components/ExperienceList";

const Experience = () => {
	return (
		<div className="w-screen">
			<Head>
				<title>Experience</title>
			</Head>
			<Title text="Work Experience" />
			<ExperienceList experiences={experiences} />
		</div>
	);
};

export default Experience;
