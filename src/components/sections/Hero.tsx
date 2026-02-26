import {  Linkedin,  Mail } from "lucide-react";
import React, { useState } from "react";

const Hero: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	console.log(isMenuOpen);

	const [currentSection, setCurrentSection] = useState("hero");
	console.log(currentSection);

	const scrollToSection = (sectionId: string) => {
		setCurrentSection(sectionId);
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	return (
		<>
			<section
				id="home"
				className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-15">
				<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900"></div>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>

				<div className="container mx-auto px-6 relative z-10">
					<div className="text-center max-w-4xl mx-auto">
						<div className="mb-8">
							{/* <div className="w-32 h-32 mx-auto mt-6 mb-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1"> */}
							{/* <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center"> */}
							{/* <img
										src="/images/elinah.jpg"
										className="rounded-full "
									/> */}

							<div className="w-52 h-52 mx-auto mt-6 mb-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
								<div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
									<img
										src="/images/james.jpg"
										alt="Samwel James"
										// className="rounded-full w-full h-full object-cover"
									/>


								</div>
							</div>
						</div>

						<h1 className="text-5xl md:text-7xl font-bold mb-5">
							<span className="bg-gradient-to-r from-green-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Samwel James
							</span>
						</h1>

						<h2 className="text-2xl mb-1  font-semibold text-slate-200">
							Tutor
						</h2>

						<p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
							
							<br />•{" "}
							<span className="text-purple-800">
								Language and Humanities tutor (CBE and IGSCE compliant)
							</span>{" "}
						</p>
						

						<div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
							<button
								onClick={() => scrollToSection("experience")}
								className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
								View My Experience
							</button>
							<button
								onClick={() => scrollToSection("")}
								className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
								View My Resume
							</button>
							<button
								onClick={() => scrollToSection("contact")}
								className="px-8 py-3 border border-slate-700 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-200">
								Get In Touch
							</button>
						</div>

						<div className="flex justify-center space-x-6">
							{/* <a
								// href="https://github.com/elinah254"
								className="text-slate-400 hover:text-white transition-colors duration-200">
								<Github className="w-6 h-6" />
							</a> */}
							<a
								 href="https://www.linkedin.com/in/owino-samwel/"
								className="text-slate-400 hover:text-white transition-colors duration-200">
								<Linkedin className="w-6 h-6" />
							</a>


							<a
								// An email link that doesnt depend on system apps or default apps - it opens the email in the browser
								href="https://mail.google.com/mail/?view=cm&fs=1&to=owinojs014@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-slate-400 hover:text-white transition-colors duration-200">
								<Mail className="w-6 h-6" />
							</a>


							
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
