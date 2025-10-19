import JobForm from "../../components/JobForm/JobForm";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const CareerApplyPage = () => {
	return (
		<>
			<Header/>
			<section
				className="p-4 lg:p-10 min-h-[calc(100vh-4rem)] max-w-[1400px] mx-auto grid lg:grid-cols-2 lg:gap-12 mt-25">
				<div className="flex flex-col gap-8 mb-4">
					<h1 className="font-inter text-3xl text-center text-[#668557] font-bold mb-4 lg:text-4xl">Accounting
						Associate</h1>

					<div>
						<h2 className="text-lg font-semibold font-inter">Job Summary</h2>
						<hr className="border-t-2 border-gray-300"/>
						<p className="my-2">As an Accounting Associate, you will be part of our finance team, ensuring
							accurate financial records, compliance with regulations, and providing support in day-to-day
							accounting operations</p>
					</div>

					<div>
						<h2 className="text-lg font-semibold font-inter">Responsibilities</h2>
						<hr className="border-t-2 border-gray-300"/>
						<ul className="my-2 list-disc list-inside">
							<li className='marker:text-[#668557]'>Record and maintain financial transactions</li>
							<li className='marker:text-[#668557]'>Manage accounts payable and receivable</li>
							<li className='marker:text-[#668557]'>Prepare payroll and other disbursements</li>
							<li className='marker:text-[#668557]'>Assist in financial reporting and reconciliations</li>
							<li className='marker:text-[#668557]'>Support audits, tax compliance, and related tasks</li>
						</ul>
					</div>

					<div>
						<h2 className="text-lg font-semibold font-inter">Qualifications</h2>
						<hr className="border-t-2 border-gray-300"/>
						<ul className="my-2 list-disc list-inside">
							<li className='marker:text-[#668557]'>Bachelor’s Degree in Accounting, Finance, or related
								field
							</li>
							<li className='marker:text-[#668557]'>Knowledge of bookkeeping and accounting principles
							</li>
							<li className='marker:text-[#668557]'>Proficient in Microsoft Office (Excel, Word);
								experience in accounting software is a plus
							</li>
							<li className='marker:text-[#668557]'>Fresh graduates are encouraged to apply</li>
						</ul>
					</div>
				</div>

				<JobForm/>
			</section>
			<Footer/>
		</>
	);
};

export default CareerApplyPage;