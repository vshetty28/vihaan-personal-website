export const programmingLanguages = [
	{ icon: "/assets/python.svg", text: "Python" },
	{ icon: "/assets/java.svg", text: "Java" },
	{ icon: "/assets/javascript.svg", text: "JavaScript" },
	{ icon: "/assets/cpp.svg", text: "C++/C" },
	{ icon: "/assets/html.svg", text: "HTML" },
	{ icon: "/assets/css.svg", text: "CSS" },
	{ icon: "/assets/sql.svg", text: "SQL" },
	{ icon: "/assets/r.svg", text: "R" },
	{ icon: "/assets/typescript.svg", text: "TypeScript" },
];

export const frameworks = [
	{ icon: "/assets/pytorch.svg", text: "Pytorch" },
	{ icon: "/assets/tensorflow.svg", text: "TensorFlow" },
	{ icon: "/assets/react.svg", text: "React.js" },
	{ icon: "/assets/nextjs.svg", text: "Next.js" },
	{ icon: "/assets/node.svg", text: "Node.js" },
	{ icon: "/assets/pandas.svg", text: "Pandas" },
	{ icon: "/assets/flask.svg", text: "Flask" },
	{ icon: "/assets/scikit-learn.svg", text: "sk-learn" },
	{ icon: "/assets/numpy.svg", text: "NumPy" },
	{ icon: "/assets/postgresql.svg", text: "PostgreSQL" },
	{ icon: "/assets/tableau.svg", text: "Tableau" },
	{ icon: "/assets/github.svg", text: "Github" },
	{ icon: "/assets/tailwind.svg", text: "Tailwind" },
	{ icon: "/assets/docker.svg", text: "Docker" },
	{ icon: "/assets/prisma.svg", text: "Prisma" },
	{ icon: "/assets/google_cloud.svg", text: "Google Cloud" },
	{ icon: "/assets/react_native.svg", text: "React Native" },
	{ icon: "/assets/bash.svg", text: "Linux" },
	{ icon: "/assets/expo.svg", text: "Expo" },
	{ icon: "/assets/mongodb.svg", text: "MongoDB" },
	{ icon: "/assets/airflow.svg", text: "Airflow" },
	{ icon: "/assets/springboot.svg", text: "Spring Boot" },
	{ icon: "/assets/jira.svg", text: "Jira" },
];

export const experiences = [
	{ id: 1, date: "Aug 2023 - May 2024", title: "Undergraduate Researcher - PFF", company: "The Data Mine", location: "Purdue University", description: "- Developed ML algorithms using XGBoost on advanced NFL charting data to analyze value, difficulty, and frequency of NFL quarterback throws\n\n- Trained models on Pro Football Focus's NFL data and applied to NCAAF data for applications in pre-draft analysis\n\n- Created interactive Tableau visualizations of algorithm results and other patterns found in data", start: true, end: false, completed: true },
	{ id: 2, date: "Jan 2024 - Present", title: "Corporate Partners TA", company: "The Data Mine", location: "Purdue University", description: "- Project Manager overseeing Data Mine students working alongside the Management Performance Hub on ICJI data\n\n- Responsible for enforcing Agile methodology as Scrum Master\n\n- Helped students with technical issues and assisted in their development of technical skills required for the project", start: false, end: false, completed: true },
	{ id: 3, date: "Summer 2025", title: "Software Engineer Intern", company: "Bank of New York", location: "New York City, NY", description: "Starts in Summer 2025", start: false, end: true, completed: false },
];

export const projects = [
	{ id: 1, name: "Workout Tracker", description: "Full-stack web application for tracking workouts online and monitoring progressive overload. Features a RESTful API, OAuth2.0 Authentication, multi-user concurrency, and optimized database read/write transactions for security and scalability.", skills: ["React.js", "Next.js", "PostgreSQL"], github: "https://github.com/vshetty28/workout-tracker" },
	{ id: 2, name: "Hackathon Leaderboard", description: "Full-stack hackathon leaderboard web application. Features include a fully-customizable user interface and custom hackathon branding, Role-Based Access Control with OAuth2.0 authentication, and a Flask backend API for database access operations and interaction with the ML grading system.", skills: ["React.js", "Next.js", "Flask", "PostgreSQL", "PrismaORM"] },
	{ id:3, name: "UNIX Shell Interpreter", description: "Custom UNIX shell interpreter and scanner/parser supporting simple command execution, piping, file redirection, environment variable expansion, background processes, subshell processes, SIGINT handling, automatic zombie process cleanup, subdirectory wildcarding, path completion, and a custom line editor with command history.", skills: ["C", "C++", "Lex/Yacc", "Bash"] },
	{ id: 4, name: "Personal Website", description: "Personal website (this one!) built to showcase my projects, skills, and work experience, or in other words act as a personal portfolio. Implemented SEO optimization with Next.js, custom animations using Framer Motion, and hosted online using Vercel.", skills: ["React.js", "Next.js", "Tailwind CSS"], github: "https://github.com/vshetty28/vihaan-personal-website" },

];