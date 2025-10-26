// JobCard.jsx

// 1. Destructure the new props
const JobCard = (props) => {
	const { bgSrc, title, description, onNext, onPrev, showControls } = props;

	return (
		// 2. Make the container relative to position the buttons
		<div
			style={{ backgroundImage: `url(${bgSrc})` }}
			className={`relative bg-bottom bg-cover bg-no-repeat h-[480px] rounded-xl flex flex-col justify-end p-4 md:p-6 lg:p-10`}>

			{/* This content remains the same */}
			<h1 className="font-inter font-extrabold text-4xl lg:text-6xl text-white [text-shadow:_2px_2px_4px_rgba(0,0,0,0.4)] mb-2">{title}</h1>
			<p className="text-white font-inter md:max-w-[70%] lg:text-xl drop-shadow-sm">{description}</p>

			{/* 3. Add the control buttons inside the card */}
			{showControls && (
				<>
					{/* Left Arrow Button */}
					<button
						onClick={onPrev}
						className="cursor-pointer absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-white/50 text-black p-2 rounded-full shadow-md hover:bg-white transition-all focus:outline-none"
						aria-label="Previous job"
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
						</svg>
					</button>

					{/* Right Arrow Button */}
					<button
						onClick={onNext}
						className="cursor-pointer absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-white/50 text-black p-2 rounded-full shadow-md hover:bg-white transition-all focus:outline-none"
						aria-label="Next job"
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
						</svg>
					</button>
				</>
			)}
		</div>
	);
};

export default JobCard;