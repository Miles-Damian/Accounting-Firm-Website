const ServiceCard = ({ data }) => {
	return (
		<div className="bg-[#f6f7f8] p-4 rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg cursor-pointer">
			<img
				src={data.src}
				alt={data.title}
				className="rounded-lg object-cover h-52 w-full"
			/>
			<h3 className="font-inter font-extrabold text-xl text-gray-800 my-2">
				{data.title}
			</h3>
			<p className="font-inter font-light text-gray-800">{data.caption}</p>
		</div>
	);
};

export default ServiceCard;
