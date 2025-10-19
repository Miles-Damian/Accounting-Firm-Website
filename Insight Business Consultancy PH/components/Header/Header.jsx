import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "motion/react";
import {NavLink, useLocation} from "react-router-dom";

const Header = () => {
	const [isSidebarToggled, setIsSidebarToggled] = useState(false);
	const [isServicesToggled, setIsServicesToggled] = useState(false);
	const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
	const location = useLocation();

	const toggleSidebar = () => setIsSidebarToggled(!isSidebarToggled);
	const toggleServices = () => setIsServicesToggled(!isServicesToggled);
	const [showTopBar, setShowTopBar] = useState(true);

	useEffect(() => {
		let lastScrollY = window.scrollY;
		const handleScroll = () => {
			if (window.scrollY > 100) setShowTopBar(false);
			else setShowTopBar(true);
			lastScrollY = window.scrollY;
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const UnderlinedText = ({isActive, children}) => (
		<span
			className={`relative after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:bg-[#004524] after:rounded-full after:w-full after:origin-left after:scale-x-0 after:opacity-0 after:transition-all after:duration-300 group-hover:after:scale-x-100 group-hover:after:opacity-100 ${
				isActive ? "after:scale-x-100 after:opacity-100" : ""
			}`}
		>
      <b>{children}</b>
    </span>
	);

	return (
		<header
			className="fixed top-0 left-0 w-full z-[999] transform-none bg-gradient-to-b from-green-100 to-green-200 shadow-sm">
			<motion.div
				className="pt-1.5 pb-1.5 w-full"
			>
				<nav className="flex justify-between items-center relative w-full p-2 h-auto max-w-[1400px] mx-auto">
					<div className="flex flex-col items-center">
						<img
							className="w-40 h-auto animate-jump animate-duration-[400ms] ml-1.5 mr-4.5"
							src="https://ibcph.com/images/logo/logo.png"
							alt="Insight Accounting Firm"
						/>

					</div>

					{/* Mobile menu toggle */}
					<button onClick={toggleSidebar} className="flex transition-transform duration-300 lg:hidden">
						<i
							className={`fa-solid ${
								isSidebarToggled ? "fa-xmark rotate-90" : "fa-bars rotate-0"
							} fa-2x transition-all duration-300 ease-in-out`}
						></i>
					</button>


					{/* ---------- DESKTOP NAVIGATION ---------- */}
					<ul className="hidden mr-10 lg:flex lg:flex-row lg:items-center lg:gap-11">
						{/* HOME */}
						<li>
							<NavLink
								to="/"
								className={({isActive}) =>
									`group flex items-center gap-2 text-base font-medium font-inter transition-all duration-300 ${
										isActive ? "text-green-800 font-semibold" : ""
									}`
								}
							>
								<motion.i
									className="fa-solid fa-house text-md transition-transform duration-300 group-hover:scale-125 group-hover:text-[#004524]"
									whileHover={{rotate: -15, scale: 1.3, color: "#004524"}}
									whileTap={{scale: 0.9}}
								/>
								<UnderlinedText isActive={location.pathname === "/"}>
									<p className="lg:text-[18px]">HOME</p>
								</UnderlinedText>
							</NavLink>
						</li>

						{/* ABOUT */}
						<li>
							<NavLink
								to="/about"
								className={({isActive}) =>
									`group flex items-center gap-2 text-base font-medium font-inter transition-all duration-300 ${
										isActive ? "text-green-800 font-semibold" : ""
									}`
								}
							>
								<motion.i
									className="fa-solid fa-people-group text-md transition-transform duration-300 group-hover:rotate-6 group-hover:scale-125 group-hover:text-[#00b894]"
									whileHover={{rotate: 10, scale: 1.3, color: "#00b894"}}
									whileTap={{scale: 0.9}}
								/>
								<UnderlinedText isActive={location.pathname === "/about"}>
									<p className="lg:text-[18px]">ABOUT&nbsp;US</p>
								</UnderlinedText>
							</NavLink>
						</li>

						{/* SERVICES (Dropdown - desktop) */}
						<li className="relative">
							<div
								className={`group flex items-center gap-[4px] text-base font-medium font-inter transition-all duration-300 ${
									location.pathname.startsWith("/services")
										? "text-green-800 font-semibold"
										: ""
								}`}
							>
								<motion.i
									className="fa-solid fa-universal-access text-md transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125 group-hover:text-[#004524]"
									whileHover={{rotate: 15, scale: 1.2, color: "#004524"}}
									whileTap={{scale: 0.95}}
								/>
								<button
									id="services-dropdown-btn"
									onClick={toggleServices}
									onMouseEnter={() => setIsServicesToggled(true)}
									onMouseLeave={() => setIsServicesToggled(false)}
									className={`flex items-center gap-[3px] text-base font-inter transition-all duration-200 ${
										location.pathname.startsWith("/services")
											? "font-semibold text-green-800"
											: ""
									}`}
								>
									<UnderlinedText
										isActive={location.pathname.startsWith("/services")}
									>
										<p className="lg:text-[18px]">SERVICES </p>
									</UnderlinedText>
									<motion.i
										className="fa-solid fa-angle-down text-[13px]"
										animate={{
											rotate: isServicesToggled ? 180 : 0,
											color:
												isServicesToggled ||
												location.pathname.startsWith("/services")
													? "#004524"
													: "#000000",
										}}
										transition={{duration: 0.2}}
									/>
								</button>
							</div>

							<AnimatePresence>
								{isServicesToggled && (
									<motion.ul
										className="bg-white rounded-xl absolute left-1/2 -translate-x-1/2 top-full flex flex-col overflow-hidden shadow-[0_2px_6px_rgba(0,0,0,0.1)]"
										initial={{opacity: 0, y: -10}}
										animate={{opacity: 1, y: 0}}
										exit={{opacity: 0, y: -10}}
										transition={{duration: 0.2, ease: "easeOut"}}
										onMouseEnter={() => setIsServicesToggled(true)}
										onMouseLeave={() => setIsServicesToggled(false)}
									>
										{[
											["/services/business-registration", "Business Registration Services"],
											["/services/bookkeeping-and-accounting", "Accounting & Bookkeeping Services"],
											["/services/tax-and-regulatory-compliance", "Tax & Regulatory Compliance"],
											["/services/payroll-outsourced", "Payroll Outsourced Services"],
											["/services/bir-transactions", "BIR One-Time Transactions"],
											["/services/specialized-registration", "Specialized Registrations & Compliance"],
											["/services/business-support", "Business Support Services"],
											["/services/alien-registration", "Alien Registration Services"],
											["/services/certification", "Certification Services"],
											["/services/citizenship", "Citizenship Services"],
											["/services/special-permits", "Special Permits Services"],
										].map(([to, label]) => (
											<li key={to} className="w-full text-center hover:bg-gray-200">
												<NavLink
													to={to}
													className={({isActive}) =>
														`flex items-center justify-center h-10 px-4 text-base whitespace-nowrap transition-colors ${
															isActive ? "text-green-700 font-semibold" : ""
														}`
													}
												>
													{label}
												</NavLink>
											</li>
										))}
									</motion.ul>
								)}
							</AnimatePresence>
						</li>

						{/* FAQ */}
						<li>
							<NavLink
								to="/faq"
								className={({isActive}) =>
									`group flex items-center gap-2 text-base font-medium font-inter transition-all duration-300 ${
										isActive ? "text-green-800 font-semibold" : ""
									}`
								}
							>
								<motion.i
									className="fa-solid fa-circle-question text-md transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125 group-hover:text-[#00b894]"
									whileHover={{rotate: -12, scale: 1.2, color: "#00b894"}}
									whileTap={{scale: 0.9}}
								/>
								<UnderlinedText isActive={location.pathname === "/faq"}>
									<p className="lg:text-[18px]">FAQ </p>
								</UnderlinedText>
							</NavLink>
						</li>

						{/* CONTACT */}
						<li>
							<NavLink
								to="/contact"
								className={({isActive}) =>
									`group flex items-center gap-2 text-base font-medium font-inter transition-all duration-300 ${
										isActive ? "text-green-800 font-semibold" : ""
									}`
								}
							>
								<motion.i
									className="fa-solid fa-phone text-md transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125 group-hover:text-[#004524]"
									whileHover={{rotate: 12, scale: 1.2, color: "#004524"}}
									whileTap={{scale: 0.9}}
								/>
								<UnderlinedText isActive={location.pathname === "/contact"}>
									<p className="lg:text-[18px]">CONTACT</p>
								</UnderlinedText>
							</NavLink>
						</li>

						{/* CAREERS */}
						<li>
							<NavLink
								to="/careers"
								className={({isActive}) =>
									`group flex items-center gap-2 text-base font-medium font-inter transition-all duration-300 ${
										isActive ? "text-green-800 font-semibold" : ""
									}`
								}
							>
								<motion.i
									className="fa-solid fa-briefcase text-md transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125 group-hover:text-[#00b894]"
									whileHover={{rotate: -12, scale: 1.2, color: "#00b894"}}
									whileTap={{scale: 0.9}}
								/>
								<UnderlinedText isActive={location.pathname === "/careers"}>
									<p className="lg:text-[18px]">CAREERS</p>
								</UnderlinedText>
							</NavLink>
						</li>
					</ul>

					{/* ---------- MOBILE NAV ---------- */}
					<AnimatePresence>
						{isSidebarToggled && (
							<motion.ul
								className="absolute right-0 flex flex-col w-full min-h-[100dvh]
 p-4 space-y-3 bg-white rounded-b-lg top-full lg:hidden"
								initial={{opacity: 0, x: "100%"}}
								animate={{opacity: 1, x: 0}}
								exit={{opacity: 0, x: "100%"}}
								transition={{duration: 0.3, ease: "easeInOut"}}
							>
								{/* HOME */}
								<li>
									<NavLink
										to="/"
										onClick={() => setIsSidebarToggled(false)}
										className={({isActive}) =>
											`group flex items-center gap-2 text-xl sm:text-2xl leading-tight transition-all duration-300 ${
												isActive ? "text-green-800 font-semibold" : ""
											}`
										}
									>
										<motion.i
											className="text-lg sm:text-xl fa-solid fa-house transition-transform duration-300 group-hover:scale-125 group-hover:text-[#004524]"
											whileHover={{scale: 1.2, color: "#004524"}}
										/>
										<UnderlinedText isActive={location.pathname === "/"}>
											HOME
										</UnderlinedText>
									</NavLink>
								</li>

								{/* ABOUT */}
								<li>
									<NavLink
										to="/about"
										onClick={() => setIsSidebarToggled(false)}
										className={({isActive}) =>
											`group flex items-center gap-2 text-xl sm:text-2xl leading-tight transition-all duration-300 ${
												isActive ? "text-green-800 font-semibold" : ""
											}`
										}
									>
										<motion.i
											className="text-lg sm:text-xl fa-solid fa-people-group transition-transform duration-300 group-hover:scale-125 group-hover:text-[#00b894]"
											whileHover={{scale: 1.2, color: "#00b894"}}
										/>
										<UnderlinedText isActive={location.pathname === "/about"}>
											ABOUT&nbsp;US
										</UnderlinedText>
									</NavLink>
								</li>

								{/* ✅ SERVICES */}
								<li className="relative">
									<div
										className={`group flex items-center gap-[4px] text-xl sm:text-2xl leading-tight transition-all duration-300 ${
											location.pathname.startsWith("/services")
												? "text-green-800 font-semibold"
												: ""
										}`}
									>
										<motion.i
											className="text-lg sm:text-xl fa-solid fa-universal-access transition-transform duration-300 group-hover:scale-125 group-hover:text-[#004524]"
											whileHover={{scale: 1.2, color: "#004524"}}
										/>
										<button
											onClick={() => setIsMobileServicesOpen((v) => !v)}
											className={`flex items-center gap-[4px] ml-[2px] transition-all duration-200 ${
												location.pathname.startsWith("/services")
													? "font-semibold text-green-800"
													: "font-semibold text-black"
											}`}
										>
											SERVICES
											<motion.i
												className="fa-solid fa-angle-down text-[14px]"
												animate={{
													rotate: isMobileServicesOpen ? 180 : 0,
													color: isMobileServicesOpen ? "#004524" : "#000000",
												}}
												transition={{duration: 0.2}}
											/>
										</button>
									</div>

									<AnimatePresence>
										{isMobileServicesOpen && (
											<motion.ul
												className="flex flex-col gap-[2px] pl-8"
												initial={{opacity: 0, height: 0}}
												animate={{opacity: 1, height: "auto"}}
												exit={{opacity: 0, height: 0}}
												transition={{duration: 0.2, ease: "easeOut"}}
											>
												{[
													["/services/business-registration", "Business Registration Services"],
													["/services/bookkeeping-and-accounting", "Bookkeeping & Accounting Services"],
													["/services/tax-and-regulatory-compliance", "Tax & Regulatory Compliance"],
													["/services/payroll-outsourced", "Payroll Outsourced Services"],
													["/services/bir-transactions", "BIR One-Time Transactions"],
													["/services/specialized-registration", "Specialized Registrations & Compliance"],
													["/services/business-support", "Business Support Services"],
													["/services/alien-registration", "Alien Registration Services"],
													["/services/certification", "Certification Services"],
													["/services/citizenship", "Citizenship Services"],
													["/services/special-permits", "Special Permits Services"],
												].map(([to, label]) => (
													<li key={to}>
														<NavLink
															to={to}
															className={({isActive}) =>
																`text-xs leading-snug break-words whitespace-normal sm:text-sm transition-all duration-200
                       ${
																	isActive
																		? "text-[#004524] font-semibold border-b-2 border-[#004524]"
																		: "text-black hover:text-[#004524]"
																}`
															}
															onClick={() => {
																setIsSidebarToggled(false);
																setIsMobileServicesOpen(false);
															}}
														>
															{label}
														</NavLink>
													</li>
												))}
											</motion.ul>
										)}
									</AnimatePresence>
								</li>

								{/* FAQ */}
								<li>
									<NavLink
										to="/faq"
										onClick={() => setIsSidebarToggled(false)}
										className={({isActive}) =>
											`group flex items-center gap-2 text-xl sm:text-2xl leading-tight transition-all duration-300 ${
												isActive ? "text-green-800 font-semibold" : ""
											}`
										}
									>
										<motion.i
											className="text-lg sm:text-xl fa-solid fa-circle-question transition-transform duration-300 group-hover:scale-125 group-hover:text-[#00b894]"
											whileHover={{scale: 1.2, color: "#00b894"}}
										/>
										<UnderlinedText isActive={location.pathname === "/faq"}>
											FAQ
										</UnderlinedText>
									</NavLink>
								</li>

								{/* CONTACT */}
								<li>
									<NavLink
										to="/contact"
										onClick={() => setIsSidebarToggled(false)}
										className={({isActive}) =>
											`group flex items-center gap-2 text-xl sm:text-2xl leading-tight transition-all duration-300 ${
												isActive ? "text-green-800 font-semibold" : ""
											}`
										}
									>
										<motion.i
											className="text-lg sm:text-xl fa-solid fa-phone transition-transform duration-300 group-hover:scale-125 group-hover:text-[#004524]"
											whileHover={{scale: 1.2, color: "#004524"}}
										/>
										<UnderlinedText isActive={location.pathname === "/contact"}>
											CONTACT
										</UnderlinedText>
									</NavLink>
								</li>

								{/* CAREERS */}
								<li>
									<NavLink
										to="/careers"
										onClick={() => setIsSidebarToggled(false)}
										className={({isActive}) =>
											`group flex items-center gap-2 text-xl sm:text-2xl leading-tight transition-all duration-300 ${
												isActive ? "text-green-800 font-semibold" : ""
											}`
										}
									>
										<motion.i
											className="text-lg sm:text-xl fa-solid fa-briefcase transition-transform duration-300 group-hover:scale-125 group-hover:text-[#00b894]"
											whileHover={{scale: 1.2, color: "#00b894"}}
										/>
										<UnderlinedText isActive={location.pathname === "/careers"}>
											CAREERS
										</UnderlinedText>
									</NavLink>
								</li>

								{/* ---------- FOOTER SECTION ---------- */}
								<div className="flex items-center justify-center pt-4 pb-20 mt-auto text-center">
									{/* Copyright */}
									<p className="text-[11px] text-gray-500 mb-3 leading-snug">
										© {new Date().getFullYear()} Insight Business Consultancy. <br/>
										All rights reserved.
									</p>

									{/* Vertical Divider */}
									<div className="h-10 border-l border-[#e6e6e6] mx-4"></div>

									{/* Contact Icons */}
									<div className="flex flex-row items-center justify-center gap-4">
										{/* Phone */}
										<a
											href="tel:+639399270318"
											className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-[#004524] hover:opacity-80 transition-opacity"
										>
											<i className="text-sm fa-solid fa-phone"></i>
										</a>

										{/* Facebook */}
										<a
											href="https://www.facebook.com/"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-[#004524] hover:opacity-80 transition-opacity"
										>
											<i className="text-sm fa-brands fa-facebook-f"></i>
										</a>

										{/* Email */}
										<a
											href="mailto:inquiry@ibcph.com"
											className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-[#004524] hover:opacity-80 transition-opacity"
										>
											<i className="text-sm fa-solid fa-envelope"></i>
										</a>
									</div>
								</div>


							</motion.ul>
						)}
					</AnimatePresence>

				</nav>
			</motion.div>

			{/* 🔹 Below Contact Bar */}
			<AnimatePresence>
				{showTopBar && (
					<motion.div
						initial={{opacity: 0, y: -20}}
						animate={{opacity: 1, y: 0}}
						exit={{opacity: 0, y: -20}}
						transition={{duration: 0.3}}
						className="flex justify-between items-center py-1.5 px-10 bg-[#004817] text-white text-sm
                 max-[1425px]:text-xs max-[1425px]:px-8 max-[1425px]:gap-4
                 max-[1173px]:text-[11px] max-[1193px]:px-5 max-[1193px]:gap-3
                 max-[1102px]:hidden"
					>
						{/* 🔹 Left: Address (clickable) */}
						<div className="flex items-center gap-5 max-[1425px]:gap-3">
							<a
								href="https://www.google.com/maps?q=Doña+Elena+Tower,+P.+Sanchez+corner+3rd+Street,+Sta.+Mesa,+Manila"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center hover:text-[#aee1c3] transition-colors duration-200"
							>
								<i className="mr-2 fa-solid fa-location-dot"></i>
								8th Floor, Doña Elena Tower 47 P. Sanchez corner 3rd Street,
								Brgy. 605 Zone 060, 1008 Sta. Mesa, City of Manila
							</a>
						</div>

						{/* 🔹 Right: Contact info (clickable) */}
						<div className="flex items-center gap-5 max-[1425px]:gap-3">
							<a
								href="tel:+639399270318"
								className="flex items-center hover:text-[#aee1c3] transition-colors duration-200"
							>
								<i className="mr-2 fa-solid fa-phone"></i>+63 939 927 0318
							</a>

							<a
								href="mailto:inquiry@ibcph.com"
								className="flex items-center hover:text-[#aee1c3] transition-colors duration-200"
							>
								<i className="mr-2 fa-solid fa-envelope"></i>inquiry@ibcph.com
							</a>

							<a
								href="mailto:careers@ibcph.com"
								className="flex items-center hover:text-[#aee1c3] transition-colors duration-200"
							>
								<i className="mr-2 fa-solid fa-envelope"></i>careers@ibcph.com
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>


		</header>

	);
};

export default Header;
