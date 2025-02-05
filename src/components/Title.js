import React from "react";

const Title = ({text}) => {
	return <h1 className="absolute inset-x-0 top-24 w-screen self-center p-4 py-6 text-6xl mb-16 text-center font-extrabold text-primary tracking-wide border-primary rounded-md">{text}</h1>;
};

export default Title;
