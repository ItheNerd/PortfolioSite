/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Contact = () => {
	return (
		<div
			name="Contact"
			className="flex h-screen w-full items-center justify-center bg-primary p-4 md:h-screen">
			<form
				method="POST"
				action=""
				className="flex w-full max-w-[600px] flex-col">
				<div className="pb-8 text-right">
					<p
						className="inline pl-3 text-4xl font-bold text-slate-300 before:relative before:top-5 before:mr-40 before:block before:h-[2px] before:w-auto before:overflow-hidden
           before:bg-blue-400 before:content-['']">
						Contact
					</p>
				</div>
				<input
					className="rounded-lg bg-accent p-2 text-white placeholder:text-slate-700 "
					type="text"
					placeholder="Name"
					name="name"
				/>
				<input
					className=" my-4 rounded-lg bg-accent p-2 text-white placeholder:text-slate-700"
					type="email"
					placeholder="Email"
					name="email"
				/>
				<textarea
					className=" rounded-lg bg-accent p-2 text-white placeholder:text-slate-700"
					name="message"
					rows="10"
					placeholder="Message"></textarea>
				<button className="my-8 mx-auto flex items-center rounded-lg border-2 px-4 py-3 text-white duration-200 hover:border-blue-600 hover:bg-blue-900">
					Let's Collaborate
				</button>
			</form>
		</div>
	);
};

export default Contact;
