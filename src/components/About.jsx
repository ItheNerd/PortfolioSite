/* eslint-disable react/no-unescaped-entities */
import React from "react";
const About = () => {
	return (
		<section
			name="About"
			className="relative h-screen w-full bg-primary text-slate-300">
			<div className="flex h-full w-full flex-col items-center justify-center px-12">
				<div className="mb-9 grid w-full max-w-[1000px] grid-cols-2">
					<h1 className="inline text-4xl font-bold capitalize after:relative after:-top-5 after:ml-32 after:block after:h-[2px] after:w-full after:overflow-hidden after:bg-blue-400 after:content-[''] sm:text-center sm:before:relative sm:before:top-[22px] sm:before:-ml-20 sm:before:block sm:before:h-[2px] sm:before:w-40 sm:before:bg-blue-400 sm:before:content-[''] sm:after:ml-56 md:before:-ml-12 md:after:ml-80 lg:before:ml-4">
						About
					</h1>
				</div>
				<div className="grid w-full max-w-[1000px] grid-cols-2 gap-8">
					<div className="text-right text-xl font-bold">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
							incidunt ex placeat modi magni quia error alias, adipisci rem
							similique, at omnis eligendi optio eos harum.
						</p>
					</div>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
						incidunt ex placeat modi magni quia error alias, adipisci rem
						similique, at omnis eligendi optio eos harum.Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Illo incidunt ex placeat modi
						magni quia error alias, adipisci rem similique, at omnis eligendi
						optio eos harum.Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Illo incidunt ex placeat modi magni quia error alias, adipisci
						rem similique, at omnis eligendi optio eos harum.
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
