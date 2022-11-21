import React, { useState } from "react";
import {
	FaBars,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTimes,
	FaTwitter,
} from "react-icons/fa";
import Logo from "../assets/logo.png";
import { SiGmail } from "react-icons/si";
import { Link } from "react-scroll";

const Navbar = () => {
	const icons = [
		<FaGithub key="" size={22} />,
		<FaInstagram key="" size={22} />,
		<FaLinkedin key="" size={22} />,
		<FaTwitter key="" size={22} />,
		<SiGmail key="" size={22} />,
	];
	const navList = ["Home", "About", "Skills", "Work", "Contact"];
	const [nav, setNav] = useState(false);
	const handleClick = () => {
		setNav(!nav);
	};
	return (
		<div className="fixed z-10 flex h-[80px] w-full items-center justify-between bg-primary px-4 text-gray-300">
			<div className="ml-3 mt-3">
				<img src={Logo} alt="Logo_Image" className="w-16" />
			</div>
			{/* menu */}
			<ul className="hidden md:flex">
				{navList.map((items, index) => {
					if (items == "Skills") {
						return (
							<li className="flex items-center justify-center" key={index}>
								<Link
									to={items}
									smooth={true}
									duration={500}
									offset={-50}
									className="relative inline-block overflow-hidden rounded-full py-1 px-2 before:absolute before:left-3 before:right-0 before:top-0 before:bottom-0 before:-z-10 before:m-auto before:w-[1px] before:bg-transparent before:duration-700 before:content-[''] hover:before:scale-x-[120] hover:before:bg-blue-500 hover:before:bg-opacity-50">
									<span>{items}</span>
								</Link>
							</li>
						);
					}
					return (
						<li key={index} className="flex items-center">
							<Link
								to={items}
								smooth={true}
								duration={500}
								className="relative inline-block overflow-hidden rounded-full py-1 px-2 before:absolute before:left-3 before:right-0 before:top-0 before:bottom-0 before:-z-10 before:m-auto before:w-[1px] before:bg-transparent before:duration-700 before:content-[''] hover:before:scale-x-[120] hover:before:bg-blue-500 hover:before:bg-opacity-50">
								{items}
							</Link>
						</li>
					);
				})}
			</ul>
			{/* Hamburger Menu */}
			<div className="z-10 md:hidden" onClick={handleClick}>
				{!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
			</div>
			{/* mobile menu */}
			<div
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center bg-primary"
				}>
				<ul>
					<li className="py-6 text-3xl">
						<Link onClick={handleClick} to="Home" smooth={true} duration={500}>
							Home
						</Link>
					</li>
					<li className="py-6 text-3xl">
						<Link onClick={handleClick} to="About" smooth={true} duration={500}>
							About
						</Link>
					</li>
					<li className="py-6 text-3xl">
						<Link
							onClick={handleClick}
							to="Skills"
							smooth={true}
							duration={500}>
							Skills
						</Link>
					</li>
					<li className="py-6 text-3xl">
						<Link onClick={handleClick} to="Work" smooth={true} duration={500}>
							Work
						</Link>
					</li>
					<li className="py-6 text-3xl">
						<Link
							onClick={handleClick}
							to="Contact"
							smooth={true}
							duration={500}>
							Contact
						</Link>
					</li>
				</ul>
			</div>
			{/* Social Icons */}
			<div className="fixed top-[57%] hidden flex-col lg:flex">
				<ul className="after:my-0 after:mx-10 after:block after:h-48 after:w-[2px] after:bg-blue-400 after:content-['']">
					{icons.map((item, index) => {
						return (
							<li className="mx-3 my-6" key={index}>
								<a
									href="/"
									className="flex items-center justify-between duration-150 ease-linear hover:scale-[1.2] hover:animate-none hover:text-blue-400">
									{item}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
