import { Link } from "react-router-dom";

const NotFound = () => {
	return(
		<section className="h-screen w-screen flex flex-col items-center justify-center gap-4">
			<img src="/images/logo/logo.png" alt="Insight logo" />
			<h1 className="text-6xl font-bold text-red-500 text-center">Error: Page not Found</h1>
			<Link to='/' className="text-xl underline text-blue-700">Go to Home Page</Link>
		</section>
	)
};

export default NotFound;