import React from "react";

const Title = ({text}) => {
	return <h1 className="max-w-fit bg-inherit p-4 py-6 text-3xl lg:text-6xl lg:mb-8 justify-self-center text-center font-bold bg-primary dark:bg-gradient-to-br from-primary to-primary lg:to-indigo-800 text-transparent bg-clip-text tracking-wide border-primary rounded-md">{text}</h1>;
};

export default Title;
