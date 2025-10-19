import React, {useEffect, useRef, useState} from "react";
import {useSearchParams} from "react-router-dom";

/* ============================================================
   INLINE DROPDOWN COMPONENT (compact & scrollable)
   ============================================================ */
const DropdownCheckbox = ({
							  handleSelectedServices,
							  showServiceTypes,
							  setShowServiceTypes,
							  resetSelection,
							  selectedServices,
							  serviceCheckboxMap,
						  }) => (
	<div className="w-full">
		<label className="font-montserrat text-sm md:text-base mb-1 block text-[#003a22] font-semibold">
			Select Services
		</label>

		{/* Toggle button */}
		<button
			type="button"
			onClick={() => setShowServiceTypes(!showServiceTypes)}
			className="w-full p-4 border-2 rounded-lg bg-white placeholder-[#003a22] text-left focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-transform duration-300 hover:scale-105 hover:shadow-lg flex justify-between items-center"
		>
      <span>
        {selectedServices.some((s) => s.items.length > 0)
			? "Selected Services"
			: "Choose Services"}
      </span>
			<i
				className={`fa-solid fa-chevron-${
					showServiceTypes ? "up" : "down"
				} text-gray-500`}
			></i>
		</button>

		{/* Scrollable container */}
		{showServiceTypes && (
			<div
				className="w-full p-4 mt-3 overflow-y-auto transition-all duration-300 bg-white border-2 border-gray-200 rounded-lg shadow-inner max-h-60">
				{selectedServices.map((service, i) => (
					<div key={i} className="mb-3">
						<p className="font-semibold text-[#003a22] text-xs mb-1">
							{service.type}
						</p>
						<div className="grid grid-cols-1 gap-1 pl-2 sm:grid-cols-2">
							{serviceCheckboxMap[service.type]?.map((item) => (
								<label
									key={item}
									className="flex items-center gap-2 text-xs text-gray-700 hover:text-[#004524] transition-colors"
								>
									<input
										type="checkbox"
										name={item}
										checked={service.items.includes(item)}
										onChange={handleSelectedServices}
										className="accent-[#003a22]"
									/>
									{item
										.replace(/-/g, " ")
										.replace(/\b\w/g, (l) => l.toUpperCase())}
								</label>
							))}
						</div>
					</div>
				))}
				<div className="flex justify-end mt-3">
					<button
						type="button"
						onClick={resetSelection}
						className="text-sm text-red-600 hover:underline"
					>
						Clear All
					</button>
				</div>
			</div>
		)}
	</div>
);

/* ============================================================
   MAIN CONTACT US COMPONENT
   ============================================================ */
const ContactUs = () => {
	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	const [searchParams] = useSearchParams();
	const [shortcutService, setShortcutService] = useState("");

	useEffect(() => {
		const serviceFromUrl = searchParams.get("service");
		if (serviceFromUrl) {
			setShortcutService(serviceFromUrl);
			setTimeout(() => {
				sectionRef.current?.scrollIntoView({behavior: "smooth"});
			}, 300);
		}
	}, [searchParams]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => entries[0].isIntersecting && setIsVisible(true),
			{threshold: 0.2}
		);
		const currentRef = sectionRef.current;
		if (currentRef) observer.observe(currentRef);
		return () => currentRef && observer.unobserve(currentRef);
	}, []);

	/* ============================================================
	   SERVICES AND SUBSERVICES
	   ============================================================ */
	const serviceCheckboxMap = {
		"Business Registration Services": [
			"SEC Registration",
			"DTI Registration",
			"BIR Registration",
			"Business Permit",
			"SSS/PhilHealth/Pag-IBIG Registration",
			"Other Government Registrations",
		],
		"Accounting & Bookkeeping Services": [
			"Financial Statement Preparation",
			"Computerized Accounting System",
			"Financial Forecasting",
			"Loose-Leaf Books of Account",
		],
		"Tax & Regulatory Compliance": [
			"BIR Filings",
			"SEC Filing (GIS & AFS)",
			"SSS/PhilHealth/Pag-IBIG Compliance",
		],
		"Payroll Outsourced Services": [
			"Payroll Processing",
			"Automated Tracking",
			"Compensation Filing",
		],
		"BIR One Time Transactions": ["Sales", "Donation", "Estate"],
		"Specialized Registration & Compliance": [
			"SEC Amendments",
			"AMLC Registration",
			"DOLE Registration",
			"IPO Registration",
			"PEZA Registration",
			"BSP Registration",
		],
		"Business Support Services": [
			"Website Development",
			"Social Media Marketing",
		],

		// ✅ Newly added categories
		"Alien Registration": [
			"Annual Report (A.R)",
			"ACR I-CARD Issuance",
			"Voluntary Application for ACR I-CARD",
			"Renewal ACR I-CARD",
			"Re-Issuance of ACR I-CARD",
			"ACR I-CARD Waiver",
			"Cancellation of ACR I-CARD",
			"Philippine-Born Registration",
		],
		"Certification": [
			"Certification for Not the Same Person",
			"ACR I-CARD Certification",
			"BI Clearance Certification",
			"Pending Visa Application Certification",
			"Certified True Copy Certification",
			"Travel Records Certification",
			"Certificate of Non-Registration / Registration",
		],
		"Citizenship": [
			"Application for Retention / Re-acquisition of Phil. Citizenship",
			"Inclusion of Dependents under R.A. 9225",
			"Recognition as Filipino Citizen",
			"Affirmation of Recognition as Filipino Citizen",
			"Cancellation of Alien Certificate of Registry (ACR)",
		],
		"Special Permits": [
			"Special Study Permit",
			"Provisional Work Permit",
			"Special Work Permit – Commercial",
			"Special Work Permit – Artists & Athletes",
		],
	};

	const formRef = useRef();
	const [isLoading, setIsLoading] = useState(false);
	const [emailStatus, setEmailStatus] = useState({
		status: "idle",
		message: "",
	});
	const [formData, setFormData] = useState({
		full_name: "",
		company_name: "",
		phone_number: "",
		email: "",
		inquiry: "",
	});

	const [showServiceTypes, setShowServiceTypes] = useState(false);
	const [selectedServices, setSelectedServices] = useState(
		Object.keys(serviceCheckboxMap).map((type) => ({type, items: []}))
	);

	useEffect(() => {
		if (emailStatus.status !== "idle") {
			const timer = setTimeout(
				() => setEmailStatus({status: "idle", message: ""}),
				5000
			);
			return () => clearTimeout(timer);
		}
	}, [emailStatus]);

	const handleFormChange = (e) =>
		setFormData((prev) => ({...prev, [e.target.name]: e.target.value}));

	const handleSelectedServices = (e) => {
		const {name, checked} = e.target;
		setSelectedServices((prev) =>
			prev.map((service) =>
				serviceCheckboxMap[service.type]?.includes(name)
					? {
						...service,
						items: checked
							? [...service.items, name]
							: service.items.filter((i) => i !== name),
					}
					: service
			)
		);
	};

	const resetSelection = () =>
		setSelectedServices((prev) => prev.map((s) => ({...s, items: []})));

	const sendEmail = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		const servicesHTML = selectedServices
			.filter((s) => s.items.length > 0)
			.map(
				(s) => `
          <div style="margin-bottom:12px;">
            <strong>${s.type}</strong>
            <ul style="margin:4px 0 0 16px;">
              ${s.items.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>`
			)
			.join("");

		const data = {
			...formData,
			servicesHTML,
		};

		try {
			const response = await fetch(
				"https://ibcph.com/backend/send_mail_inquiry.php",
				{
					method: "POST",
					headers: {"Content-Type": "application/x-www-form-urlencoded"},
					body: new URLSearchParams(data).toString(),
				}
			);

			if (response.ok) {
				setEmailStatus({
					status: "success",
					message: "✅ Inquiry sent successfully!",
				});
				setFormData({
					full_name: "",
					company_name: "",
					phone_number: "",
					email: "",
					inquiry: "",
				});
				resetSelection();
				formRef.current.reset();
			} else {
				setEmailStatus({
					status: "error",
					message: "❌ Failed to send. Check PHP path or mail config.",
				});
			}
		} catch {
			setEmailStatus({
				status: "error",
				message: "❌ Network error. Please check your server.",
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<section
			ref={sectionRef}
			className="px-6 py-16 overflow-hidden bg-white pt-35 lg:px-20 font-montserrat"
		>
			{/* Heading */}
			<div
				className={`transition-all duration-1000 ease-in-out ${
					isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
				}`}
			>
				<h2 className="text-3xl md:text-4xl font-bold text-center text-[#003a22] mb-6">
					INQUIRE AND CONTACT US
				</h2>
				<p className="mb-12 text-center text-gray-600">
					We’d Love to Hear From You
				</p>
			</div>

			{/* Two Columns */}
			<div className="grid max-w-6xl grid-cols-1 gap-16 mx-auto lg:grid-cols-2">
				{/* LEFT FORM */}
				<form
					ref={formRef}
					onSubmit={sendEmail}
					className={`bg-gray-50 p-8 rounded-2xl shadow-md flex flex-col gap-5 transition-all duration-1000 ease-in-out ${
						isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
					}`}
				>
					<input
						name="full_name"
						value={formData.full_name}
						onChange={handleFormChange}
						placeholder="Full Name*"
						required
						className="w-full p-4 border-2 rounded-lg placeholder-[#003a22] focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
					/>
					<input
						name="company_name"
						value={formData.company_name}
						onChange={handleFormChange}
						placeholder="Company Name*"
						required
						className="w-full p-4 border-2 rounded-lg placeholder-[#003a22] focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
					/>
					<input
						name="email"
						value={formData.email}
						onChange={handleFormChange}
						type="email"
						placeholder="Email Address*"
						required
						className="w-full p-4 border-2 rounded-lg placeholder-[#003a22] focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
					/>
					<input
						name="phone_number"
						value={formData.phone_number}
						onChange={handleFormChange}
						type="tel"
						placeholder="Mobile Number*"
						required
						className="w-full p-4 border-2 rounded-lg placeholder-[#003a22] focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
					/>

					<DropdownCheckbox
						handleSelectedServices={handleSelectedServices}
						showServiceTypes={showServiceTypes}
						setShowServiceTypes={setShowServiceTypes}
						resetSelection={resetSelection}
						selectedServices={selectedServices}
						serviceCheckboxMap={serviceCheckboxMap}
					/>

					<textarea
						name="inquiry"
						value={formData.inquiry}
						onChange={handleFormChange}
						placeholder="Inquiry / Message*"
						rows="4"
						required
						className="w-full p-4 border-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#003a22] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
					></textarea>

					<button
						type="submit"
						disabled={isLoading}
						className="mt-4 bg-[#003a22] text-white font-semibold rounded-full px-6 py-3 shadow-md hover:bg-[#025232] hover:scale-105 hover:shadow-xl transition-all duration-300"
					>
						{isLoading ? "Sending..." : "Submit Inquiry"}
					</button>

					{emailStatus.status !== "idle" && (
						<p
							className={`text-center mt-2 ${
								emailStatus.status === "success"
									? "text-green-600"
									: "text-red-600"
							}`}
						>
							{emailStatus.message}
						</p>
					)}
				</form>

				{/* RIGHT CONTACT INFO */}
				<div
					className={`flex flex-col gap-8 transition-all duration-1000 ease-in-out ${
						isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
					}`}
				>
					{[
						{icon: "fa-solid fa-phone", text: "+639-399-270-318"},
						{
							icon: "fa-solid fa-envelope",
							text: (
								<div className="flex flex-col">
									<a href="mailto:inquiry@ibcph.com" className="hover:underline">
										inquiry@ibcph.com
									</a>
									<a href="mailto:careers@ibcph.com" className="hover:underline">
										careers@ibcph.com
									</a>
								</div>
							),
						},
						{
							icon: "fa-brands fa-facebook text-[#1877f2]",
							text: (
								<a href="#" className="text-lg text-blue-600 hover:underline">
									Facebook Page
								</a>
							),
						},
						{
							icon: "fa-solid fa-location-dot",
							text: (
								<p className="text-lg">
									8th Floor, Doña Elena Tower 47 P. Sanchez corner 3rd Street,
									Brgy. 605 Zone 060, Sta. Mesa, 1008 Manila, First District
									Philippines
								</p>
							),
						},
						{
							icon: "fa-solid fa-clock",
							text: "Monday to Saturday: 8:00am – 5:00pm",
						},
					].map((item, i) => (
						<div
							key={i}
							style={{transitionDelay: `${i * 200}ms`}}
							className={`flex items-center gap-4 ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-6"
							} transition-opacity transition-transform duration-[1000ms] ease-in-out hover:scale-105 hover:text-green-800`}
						>
							<i
								className={`${item.icon} text-2xl text-[#003a22] transition-transform duration-200 ease-out hover:rotate-12 hover:scale-125`}
							></i>
							<span className="text-lg">{item.text}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
