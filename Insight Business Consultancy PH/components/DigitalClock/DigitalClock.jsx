import {useState, useEffect} from 'react';

export default function DigitalClock() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const formatTime = (date) => {
		return date.toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hour12: true
		});
	};

	const formatDate = (date) => {
		return date.toLocaleDateString('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	};

	return (
		<div className="block">
			<div className="relative bg-slate-900/90 backdrop-blur-xl p-2 shadow-2xl border-2 border-slate-700/50">
				{/* Time display */}
				<div className="text-center mb">
					<div
						className="text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 tracking-wider tabular-nums">
						{formatTime(time)}
					</div>
				</div>

				{/* Date display */}
				<div className="text-center">
					<div className="text-sm md:text-base text-white font-light tracking-wide">
						{formatDate(time)}
					</div>
				</div>
			</div>
		</div>
	);
}