import React, {useEffect, useRef, useState} from "react";

/* ============================================================
   DROPDOWN COMPONENT (Scrollable + Compact)
   ============================================================ */
   const DropdownCheckbox = ({
	handleSelectedServices,
	showServiceTypes,
	setShowServiceTypes,
	resetSelection,
	selectedServices,
	serviceCheckboxMap,
  }) => {
	const [openCategory, setOpenCategory] = useState(null);
  
	const toggleCategory = (category) => {
	  setOpenCategory((prev) => (prev === category ? null : category));
	};
  
	return (
	  <div className="w-full">
		<label className="font-montserrat text-sm md:text-base mb-2 block text-[#003a22] font-semibold">
		  Select Services
		</label>
  
		{/* Main Dropdown Toggle */}
		<button
		  type="button"
		  onClick={() => setShowServiceTypes(!showServiceTypes)}
		  className="w-full px-4 py-3 border-2 rounded-lg bg-white text-left
					 focus:outline-none focus:ring-2 focus:ring-[#003a22]
					 transition-transform duration-300 hover:scale-[1.01] hover:shadow-md flex justify-between items-center"
		>
		  <span className="text-[15px]">
			{selectedServices.some((s) => s.items.length > 0)
			  ? "Selected Services"
			  : "Choose Services"}
		  </span>
		  <i
			className={`fa-solid fa-chevron-${
			  showServiceTypes ? "up" : "down"
			} text-gray-600`}
		  ></i>
		</button>
  
		{/* Accordion List */}
		{showServiceTypes && (
		  <div className="w-full p-4 mt-2 overflow-y-auto bg-white border-2 border-gray-200 rounded-lg shadow-inner max-h-72">
			{selectedServices.map((service, i) => {
			  const selectedCount = service.items.length;
			  return (
				<div key={i} className="pb-2 mb-3 border-b">
				  {/* Category Header */}
				  <button
					type="button"
					onClick={() => toggleCategory(service.type)}
					className="flex justify-between items-center w-full font-semibold text-[#003a22] text-sm hover:text-[#004524] transition-colors"
				  >
					<span className="flex-1 text-left pr-4 leading-snug whitespace-normal break-words text-[12px] sm:text-[12px]">
  						{service.type}
					</span>

  
					<div className="flex items-center flex-shrink-0 gap-1">
					  {selectedCount > 0 && (
						<span className="text-xs bg-[#e6f8ed] text-[#004524] px-2 py-[1px] rounded-full font-medium">
						  {selectedCount}
						</span>
					  )}
					  <i
						className={`fa-solid fa-${
						  openCategory === service.type ? "minus" : "plus"
						} text-gray-600 text-sm`}
					  ></i>
					</div>
				  </button>
  
				  {/* Sub-items */}
				  {openCategory === service.type && (
					<div className="grid grid-cols-1 pl-3 mt-2 gap-y-1 sm:grid-cols-2">
					  {serviceCheckboxMap[service.type]?.map((item) => (
						<label
						  key={item}
						  className="flex items-center gap-2 text-[13px] text-gray-700 hover:text-[#004524] transition-colors"
						>
						  <input
							type="checkbox"
							name={item}
							checked={service.items.includes(item)}
							onChange={handleSelectedServices}
							className="accent-[#003a22]"
						  />
						  {item}
						</label>
					  ))}
					</div>
				  )}
				</div>
			  );
			})}
  
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
  };  
  
/* ============================================================
   MAIN INQUIRE SECTION — FINAL REBUILT LAYOUT
   ============================================================ */
const InquireNow = () => {
	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => entries[0].isIntersecting && setIsVisible(true),
			{threshold: 0.2}
		);
		const ref = sectionRef.current;
		if (ref) observer.observe(ref);
		return () => ref && observer.unobserve(ref);
	}, []);

	// Services list
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
	const [emailStatus, setEmailStatus] = useState({status: "idle", message: ""});
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
          <div style="margin-bottom:10px;">
            <strong>${s.type}</strong>
            <ul style="margin:4px 0 0 16px;">
              ${s.items.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>`
			)
			.join("");

		const data = {...formData, servicesHTML};

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
					message: "❌ Failed to send. Check PHP config.",
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
			className="flex flex-col items-stretch justify-center px-6 py-16 bg-white lg:flex-row gap-14 sm:px-10 md:px-20 lg:px-28 font-montserrat"
		>
			{/* Left Form */}
			<div
				className={`flex-1 flex flex-col justify-center bg-gray-50 p-8 rounded-2xl shadow-md 
                    transition-all duration-1000 ease-in-out ${
					isVisible
						? "opacity-100 translate-x-0"
						: "opacity-0 -translate-x-10"
				}`}
			>
				<h2 className="text-[#003a22] text-2xl font-bold text-center mb-6">
					INQUIRE NOW!
				</h2>

				<form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
					<input
						name="full_name"
						value={formData.full_name}
						onChange={handleFormChange}
						placeholder="Full Name*"
						required
						className="w-full p-4 border-2 rounded-lg placeholder-[#003a22] focus:outline-none focus:ring-2 focus:ring-[#003a22]"
					/>
					<input
						name="company_name"
						value={formData.company_name}
						onChange={handleFormChange}
						placeholder="Company Name*"
						required
						className="w-full p-4 border-2 rounded-lg placeholder-[#003a22] focus:outline-none focus:ring-2 focus:ring-[#003a22]"
					/>
					<input
						name="email"
						value={formData.email}
						onChange={handleFormChange}
						type="email"
						placeholder="Email Address*"
						required
						className="w-full p-4 border-2 rounded-lg placeholder-[#003a22] focus:outline-none focus:ring-2 focus:ring-[#003a22]"
					/>
					<input
						name="phone_number"
						value={formData.phone_number}
						onChange={handleFormChange}
						type="tel"
						placeholder="Mobile Number*"
						required
						className="w-full p-4 border-2 rounded-lg placeholder-[#003a22] focus:outline-none focus:ring-2 focus:ring-[#003a22]"
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
						className="w-full p-4 border-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#003a22]"
					></textarea>

					<button
						type="submit"
						disabled={isLoading}
						className="mt-4 bg-[#003a22] text-white font-semibold rounded-full px-8 py-4 shadow-md hover:bg-[#025232] hover:scale-[1.03] hover:shadow-xl transition-all duration-300 cursor-pointer"
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
			</div>

	{/* Right Facebook Page */}
<div
	className={`flex-1 w-full flex flex-col justify-center items-center transition-all duration-1000 ease-in-out ${
		isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
	}`}
>
	<h2 className="text-[#003a22] text-3xl font-bold text-center mb-6">
		FACEBOOK PAGE
	</h2>

	{/* Responsive Wrapper */}
	<div className="w-full max-w-[500px] sm:max-w-[400px] md:max-w-[500px] overflow-hidden rounded-2xl border-4 border-emerald-900 shadow-md hover:-translate-y-1 hover:shadow-lg transition-transform duration-300">
		<iframe
			src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61581819928948%23&tabs=timeline&width=340&height=650&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
			width="100%"
			height="650"
			style={{
				border: "none",
				overflow: "hidden",
				width: "100%",
			}}
			scrolling="no"
			frameBorder="0"
			allowFullScreen
			allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
			title="Facebook Page"
		></iframe>
	</div>
</div>


		</section>
	);
};

export default InquireNow;
