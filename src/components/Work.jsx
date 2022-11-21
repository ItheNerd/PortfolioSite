import React from "react";
import Code from "../assets/icons/atom.png";

const Work = () => {
	const list = [Code, Code, Code, Code, Code, Code];
	return (
		<div
			name="Work"
			className="h-auto w-full bg-primary text-gray-300 md:h-screen">
			<div className="flex h-full w-full flex-col items-center justify-center px-12">
				<div className="mb-9 grid w-full max-w-[1000px] grid-cols-2">
					<h1 className="inline text-4xl font-bold capitalize after:relative after:-top-5 after:ml-32 after:block after:h-[2px] after:w-full after:overflow-hidden after:bg-blue-400 after:content-[''] sm:text-center sm:before:relative sm:before:top-[22px] sm:before:-ml-20 sm:before:block sm:before:h-[2px] sm:before:w-40 sm:before:bg-blue-400 sm:before:content-[''] sm:after:ml-56 md:before:-ml-12 md:after:ml-80 lg:before:ml-4">
						Work
					</h1>
				</div>

				{/* Container */}
				<div className="mx-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
					{list.map((item, index) => {
						return (
							<div
								key={index}
								style={{ backgroundImage: `url(${item})` }}
								className="group container mx-auto flex items-center justify-center rounded-lg border-[1px] border-blue-400 bg-no-repeat p-7 shadow-lg shadow-[#040c16]">
								<div className="opacity-0 group-hover:opacity-100">
									<span className="text-2xl font-bold tracking-wider text-white">
										React JS Application
									</span>
									<div className="pt-8 text-center">
										<a href="/">
											<button className="m-2 rounded-lg bg-white px-4 py-3 text-center text-lg font-bold text-gray-700">
												Demo
											</button>
										</a>
										<a href="/">
											<button className="m-2 rounded-lg bg-white px-4 py-3 text-center text-lg font-bold text-gray-700">
												Code
											</button>
										</a>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Work;
