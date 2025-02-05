import React from "react";

const Title = ({text}) => {
	return <h1 className="min-w-screen bg-inherit p-4 py-6 text-3xl lg:text-6xl lg:mb-8 text-center font-extrabold bg-gradient-to-t from-primary to-violet-900 text-transparent bg-clip-text tracking-wide border-primary rounded-md">{text}</h1>;
};

export default Title;
