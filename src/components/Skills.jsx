/* eslint-disable react/no-unescaped-entities */
import React from "react";
import checkMark from "../assets/icons/checkmark.svg";
import Settings from "../assets/icons/settings.png";
import Tools from "../assets/icons/repair-tools.png";

function Skills() {
	const skills = [
		"JavaScript",
		"HTML5",
		"CSS3",
		"Python",
		"React",
		"Node.js",
		"Tailwind",
		"Astro",
		"Linux",
	];
	const tools = [
		"Git/Github",
		"Sublime Text",
		"VSCode",
		"CLI",
		"Edge Dev Tools",
		"Postman",
	];
	const know = [
		"Git/Github",
		"Sublime Text",
		"VSCode",
		"CLI",
		"Edge Dev Tools",
		"Postman",
	];
	return (
		<div
			name="Skills"
			className="relative h-auto w-full bg-primary pb-24 text-slate-300 md:h-screen">
			<div className="flex h-full w-full flex-col items-center justify-center px-12">
				<div className="grid w-full max-w-[1000px] grid-cols-2 gap-8">
					<h1 className="inline text-4xl font-bold capitalize after:relative after:-top-5 after:ml-32 after:block after:h-[2px] after:w-full after:overflow-hidden after:bg-blue-400 after:content-[''] sm:text-center sm:before:relative sm:before:top-[22px] sm:before:-ml-20 sm:before:block sm:before:h-[2px] sm:before:w-40 sm:before:bg-blue-400 sm:before:content-[''] sm:after:ml-56 md:before:-ml-12 md:after:ml-80 lg:before:ml-4">
						Skills
					</h1>
				</div>
				<p className="my-14 mx-9 text-center text-base">
					I've been doing webdevlopment for 3 years now, and am always eager to
					learn more in this fast paced industry
				</p>
				<div className="mx-5 flex min-h-[50px] w-full max-w-[700px] flex-wrap justify-between gap-4 pl-4">
					<div className="">
						<h2 className="inline border-b-2 border-blue-400 text-xl font-semibold uppercase">
							<img
								src={Settings}
								alt="Logo_Image"
								className="inline -translate-y-2 scale-50"
							/>
							Development
						</h2>
						<ul className="my-4 grid auto-rows-[0px] grid-cols-2 grid-rows-3 overflow-y-hidden xs:grid-cols-3 sm:grid-cols-3">
							{skills.map((item, index) => {
								return (
									<li
										className="m-2 flex h-24 w-24 cursor-default items-center justify-center rounded-[50%] border-4 text-center hover:animate-wiggle hover:bg-blue-700 hover:bg-opacity-25"
										key={index}>
										{item}
									</li>
								);
							})}
						</ul>
					</div>
					<div className="">
						<h2 className="inline border-b-2 border-blue-400 text-lg font-semibold uppercase">
							<img
								src={Tools}
								alt="Logo_Image"
								className="inline -translate-y-2 scale-50"
							/>
							Tools
						</h2>
						<ul className="my-4">
							{tools.map((item, index) => {
								return (
									<li className="" key={index}>
										<img
											src={checkMark}
											alt="Logo_Image"
											className="inline scale-75 pr-3"
										/>
										{item}
									</li>
								);
							})}
						</ul>
						<div className="">
							<h2 className="inline border-b-2 border-blue-400 text-lg font-semibold uppercase">
								Knowledge
							</h2>
							<ul className="my-4">
								{know.map((item, index) => {
									return (
										<li className="" key={index}>
											<img
												src={checkMark}
												alt="Logo_Image"
												className="inline scale-75 pr-3"
											/>
											{item}
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
