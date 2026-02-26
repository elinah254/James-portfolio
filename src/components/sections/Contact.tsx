import { Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";

const Contact: React.FC = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");

	const handleSend = (e: React.FormEvent) => {
		e.preventDefault();

		const subject = encodeURIComponent(`New Message from Portfolio: ${name}`);
		const body = encodeURIComponent(
			`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
		);

		const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=owinojs014@gmail.com&su=${subject}&body=${body}`;

		window.open(gmailLink, "_blank");
	};

	return (
		<section id="contact" className="py-20 bg-slate-900/50">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
						Let's Connect
					</h2>
					<p className="text-xl text-slate-300 max-w-3xl mx-auto">
						Ready to bring your ideas to life? Let’s discuss how we can work together.
					</p>
				</div>

				<div className="max-w-5xl mx-auto">
					<div className="grid md:grid-cols-2 gap-12">
						{/* Contact Info Cards */}
						<div className="space-y-6">
							{[
								{ icon: <Mail className="w-6 h-6 text-blue-400" />, title: "Email", info: "owinojs014@gmail.com" },
								{ icon: <Phone className="w-6 h-6 text-blue-400" />, title: "Phone", info: "+254 723 698 985" },
								{ icon: <MapPin className="w-6 h-6 text-blue-400" />, title: "Location", info: "Available for remote work" },
							].map((item, idx) => (
								<div
									key={idx}
									className="flex items-center gap-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300"
								>
									<div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
										{item.icon}
									</div>
									<div>
										<h3 className="font-semibold text-slate-200">{item.title}</h3>
										<p className="text-slate-400">{item.info}</p>
									</div>
								</div>
							))}
						</div>

						{/* Contact Form */}
						<div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-lg">
							<form className="space-y-6" onSubmit={handleSend}>
								{[
									{ id: "name", type: "text", value: name, setter: setName, placeholder: "Your Name", required: true },
									{ id: "email", type: "email", value: email, setter: setEmail, placeholder: "your.email@example.com", required: true },
									{ id: "phone", type: "tel", value: phone, setter: setPhone, placeholder: "+254 7XX XXX XXX", required: false },
								].map((field) => (
									<div key={field.id}>
										<label htmlFor={field.id} className="block text-sm font-medium mb-2 text-slate-200">
											{field.id.charAt(0).toUpperCase() + field.id.slice(1)}
										</label>
										<input
											type={field.type}
											id={field.id}
											value={field.value}
											onChange={(e) => field.setter(e.target.value)}
											placeholder={field.placeholder}
											required={field.required}
											className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:scale-[1.01] hover:border-blue-400"
										/>
									</div>
								))}

								<div>
									<label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-200">
										Message
									</label>
									<textarea
										id="message"
										rows={4}
										value={message}
										onChange={(e) => setMessage(e.target.value)}
										placeholder="Tell me about your project..."
										required
										className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:scale-[1.01] hover:border-blue-400"
									></textarea>
								</div>

								<button
									type="submit"
									className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-md"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;



// import { Mail, MapPin, Phone } from "lucide-react";
// import type React from "react";

// const Contact: React.FC = () => {
// 	return (
// 		<section id="contact" className="py-20">
// 			<div className="container mx-auto px-6">
// 				{/* Heading */}
// 				<div className="text-center mb-16">
// 					<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
// 						Let's Connect
// 					</h2>
// 					<p className="text-xl text-slate-300 max-w-3xl mx-auto">
// 						Ready to bring your ideas to life? Let's discuss how
// 						we can work together to create something extraordinary.
// 					</p>
// 				</div>

// 				<div className="max-w-4xl mx-auto">
// 					<div className="grid md:grid-cols-2 gap-12">
// 						{/* Contact Info */}
// 						<div className="space-y-8">
// 							<div className="flex items-center space-x-4">
// 								<div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
// 									<Mail className="w-6 h-6 text-blue-400" />
// 								</div>
// 								<div>
// 									<h3 className="font-semibold">Email</h3>
// 									<p className="text-slate-400">
// 										mmboneelinah@gmail.com
// 									</p>
// 								</div>
// 							</div>

// 							<div className="flex items-center space-x-4">
// 								<div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
// 									<Phone className="w-6 h-6 text-blue-400" />
// 								</div>
// 								<div>
// 									<h3 className="font-semibold">Phone</h3>
// 									<p className="text-slate-400">
// 										+254 797 757 681
// 									</p>
// 								</div>
// 							</div>

// 							<div className="flex items-center space-x-4">
// 								<div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
// 									<MapPin className="w-6 h-6 text-blue-400" />
// 								</div>
// 								<div>
// 									<h3 className="font-semibold">Location</h3>
// 									<p className="text-slate-400">
// 										Available for remote work
// 									</p>
// 								</div>
// 							</div>
// 						</div>

// 						{/* Email Form */}
// 						<div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
// 							<form className="space-y-6">
// 								<div>
// 									<label
// 										htmlFor="name"
// 										className="block text-sm font-medium mb-2"
// 									>
// 										Name
// 									</label>
// 									<input
// 										type="text"
// 										id="name"
// 										className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
// 										placeholder="Your Name"
// 									/>
// 								</div>

// 								<div>
// 									<label
// 										htmlFor="email"
// 										className="block text-sm font-medium mb-2"
// 									>
// 										Email
// 									</label>
// 									<input
// 										type="email"
// 										id="email"
// 										className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
// 										placeholder="your.email@example.com"
// 									/>
// 								</div>

// 								<div>
// 									<label
// 										htmlFor="message"
// 										className="block text-sm font-medium mb-2"
// 									>
// 										Message
// 									</label>
// 									<textarea
// 										id="message"
// 										rows={4}
// 										className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
// 										placeholder="Tell me about your project..."
// 									></textarea>
// 								</div>

// 								{/* Send via email button */}
// 								{/* Lets make the email not to depend on the system apps  */}
// 								<a
// 									href={`https://mail.google.com/mail/?view=cm&fs=1&to=mmboneelinah@gmail.com&su=New%20Message%20from%20Portfolio&body=Name:%20[Your Name]%0DEmail:%20[Your Email]%0DMessage:%20[Your Message]`}
// 									target="_blank"
// 									rel="noopener noreferrer"
// 									className="w-full inline-block text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
// 								>
// 									Send Message
// 								</a>



// 								{/* <a
// 									href="mailto:mmboneelinah@gmail.com?subject=New%20Message%20from%20Portfolio&body=Name:%0D%0AEmail:%0D%0AMessage:%0D%0A"
// 									className="w-full inline-block text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
// 								>
// 									Send Message
// 								</a> */}
// 							</form>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Contact;
