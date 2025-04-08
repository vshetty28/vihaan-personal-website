import ProjectsPage from "./projects-page"

export const metadata = {
	title: "Projects",
	description: "Projects",
	keywords: ["vihaan", "shetty", "personal website", "computer science", "cupertino", "california", "monta vista", "purdue", "data science", "software engineer", "new york", "bny mellon"],
	openGraph: {
		url: "https://vihaan-shetty.com/projects",
		type: "website",
		title: "Projects",
		description: "Projects",
	},
};

const Projects = () => {
	return (
		<ProjectsPage />
	);
};

export default Projects;
