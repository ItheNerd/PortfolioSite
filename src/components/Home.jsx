/* eslint-disable react/no-unescaped-entities */
import React from "react";

function Home() {
	return (
		<div name="Home" className="h-screen w-full bg-primary">
			{/* container */}
			<div className="mx-auto flex h-full max-w-[1000px] flex-col justify-center px-8 text-right">
				<p className="pb-3 text-lg text-blue-400">Hola! My name is</p>
				<h1 className="mb-1 text-4xl font-bold text-slate-200 sm:text-6xl">
					Jayanth Ponnada
				</h1>
				<h2 className="mb-1 pt-4 text-4xl font-bold text-slate-400 sm:text-6xl">
					I turn coffee into code.🙂
				</h2>
				<p className="py-4 text-slate-400 sm:ml-96">
					I'm a FrontEnd developer and currently a student at MUJ and I simply
					like to build small and simple projects in Python and React.
				</p>
				<div className="ml-auto">
					<button
						type="button"
						className="nav_btn my-2 flex items-center rounded-lg border-2 border-blue-400 px-6 py-3 text-blue-400 hover:text-primary">
						View Projects
					</button>
				</div>
			</div>
		</div>
	);
}

export default Home;
