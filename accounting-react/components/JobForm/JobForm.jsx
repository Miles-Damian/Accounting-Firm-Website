import { useState } from 'react';

const JobFormModal = () => {
	const [formData, setFormData] = useState({
		reference: '',
		firstName: '',
		middleName: '',
		lastName: '',
		contactNumber: '',
		email: '',
		birthDate: '',
		age: '',
		sex: '',
		civilStatus: '',
		citizenShip: '',
		religion: '',
		birthPlace: '',
		positionTitle: '',
		address: '',
		dateAdded: '',
		selectedFile: null,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleFileChange = (event) => {
		const file = event.target.files[0]; // for single file
		setFormData({
			...formData,
			selectedFile: file,
		});
	};

	console.log(formData);
	
	return (
		<form>
			<div className='mb-4'>
				<h1 className='font-inter text-lg font-semibold'>Job Application</h1>
				<p className='font-inter'>Please fill out the form below to apply.</p>
			</div>

			<div className='grid gap-4 lg:grid-cols-2'>
				<div>
					<label htmlFor="reference">
						Reference
						<span className='text-red-500'>*</span>
					</label>
					<input 
						type="text" 
						name="reference" 
						id="reference" 
						required
						value={formData.reference}
						onChange={handleChange}
						className='bg-[#f1f5f9] border border-gray-300 p-1 rounded block w-full'
					/>
				</div>

				<div>
					<label htmlFor="firstName">
						First Name
						<span className='text-red-500'>*</span>
					</label>
					<input
						type="text"
						name="firstName"
						id="firstName"
						required
						autoComplete='given-name'
						value={formData.firstName}
						onChange={handleChange}
						className='bg-[#f1f5f9] border border-gray-300 p-1 rounded block w-full'
					/>
				</div>

				<div>
					<label htmlFor="middleName">
						Middle Name
						<span className='text-red-500'>*</span>
					</label>
					<input
						type="text"
						name="middleName"
						id="middleName"
						autoComplete='additional-name'
						value={formData.middleName}
						onChange={handleChange}
						className='bg-[#f1f5f9] border border-gray-300 p-1 rounded block w-full'
					/>
				</div>

				<div>
					<label htmlFor="lastName">
						Last Name
						<span className='text-red-500'>*</span>
					</label>
					<input
						type="text"
						name="lastName"
						id="lastName"
						autoComplete='family-name'
						value={formData.lastName}
						onChange={handleChange}
						required
						className='bg-[#f1f5f9] border border-gray-300 p-1 rounded block w-full'
					/>
				</div>

				<div>
					<label htmlFor="contactNumber">
						Contact Number
						<span className='text-red-500'>*</span>
					</label>
					<input
						type="tel"
						name="contactNumber"
						id="contactNumber"
						autoComplete='tel'
						value={formData.contactNumber}
						onChange={handleChange}
						required
						className='bg-[#f1f5f9] border border-gray-300 p-1 rounded block w-full'
					/>
				</div>

				<div>
					<label htmlFor="email">
						Email
						<span className='text-red-500'>*</span>
					</label>
					<input
						type="email"
						name="email"
						id="email"
						autoComplete='email'
						value={formData.email}
						onChange={handleChange}
						required
						className='bg-[#f1f5f9] border border-gray-300 p-1 rounded block w-full'
					/>
				</div>

				<div>
					<label htmlFor="birthDate">
						Date of Birth
						<span className='text-red-500'>*</span>
					</label>
					<input
						type="date"
						name="birthDate"
						id="birthDate"
						value={formData.birthDate}
						onChange={handleChange}
						required
						className='bg-[#f1f5f9] border border-gray-300 p-1 rounded block w-full'
					/>
				</div>

				<div>
					<label htmlFor="age">
						Age
						<span className='text-red-500'>*</span>
					</label>
					<input
						type="number"
						name="age"
						id="age"
						min={16}
						value={formData.age}
						onChange={handleChange}
						required
						className='bg-[#f1f5f9] border border-gray-300 p-1 rounded block w-full'
					/>
				</div>

				<div>
					<label htmlFor="age">
						Sex
						<span className='text-red-500'>*</span>
					</label>
					<select 
						name="sex" 
						id="sex"
						className='bg-[#f1f5f9] border border-gray-300 p-1 rounded block w-full'
						value={formData.sex}
						onChange={handleChange}
					>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="others">Others</option>
					</select>
				</div>

				<div>
					<label htmlFor="age">
						Civil Status
						<span className='text-red-500'>*</span>
					</label>
					<select
						name="civilStatus"
						id="civilStatus"
						className='bg-[#f1f5f9] border border-gray-300 p-1 rounded block w-full'
						value={formData.civilStatus}
						onChange={handleChange}
					>
						<option value="single">Single</option>
						<option value="married">Married</option>
						<option value="separated">Separated</option>
						<option value="widowed">Widowed</option>
					</select>
				</div>

				<div>
					<label htmlFor="citizenship">
						Citizenship
						<span className='text-red-500'>*</span>
					</label>
					<input
						type="text"
						name="citizenship"
						id="citizenship"
						value={formData.citizenship}
						onChange={handleChange}
						required
						className='bg-[#f1f5f9] border border-gray-300 p-1 rounded block w-full'
					/>
				</div>

				<div>
					<label htmlFor="religion">
						Religion
						<span className='text-red-500'>*</span>
					</label>
					<input
						type="text"
						name="religion"
						id="religion"
						value={formData.religion}
						onChange={handleChange}
						className='bg-[#f1f5f9] border border-gray-300 p-1 rounded block w-full'
					/>
				</div>

				<div>
					<label htmlFor="birthPlace">
						Birth Place
						<span className='text-red-500'>*</span>
					</label>
					<input
						type="text"
						name="birthPlace"
						id="birthPlace"
						autoComplete='address-level2'
						value={formData.birthPlace}
						onChange={handleChange}
						required
						className='bg-[#f1f5f9] border border-gray-300 p-1 rounded block w-full'
					/>
				</div>

				<div>
					<label htmlFor="positionTitle">
						Position TItle
						<span className='text-red-500'>*</span>
					</label>
					<input
						type="text"
						name="positionTitle"
						id="positionTitle"
						value={formData.positionTitle}
						onChange={handleChange}
						required
						className='bg-[#f1f5f9] border border-gray-300 p-1 rounded block w-full'
					/>
				</div>

				<div>
					<label htmlFor="address">
						Address
						<span className='text-red-500'>*</span>
					</label>
					<input
						type="text"
						name="address"
						id="address"
						autoComplete='street-address'
						value={formData.address}
						onChange={handleChange}
						required
						className='bg-[#f1f5f9] border border-gray-300 p-1 rounded block w-full'
					/>
				</div>

				<div>
					<label htmlFor="file">
						File Upload
						<span className='text-red-500'>*</span>
					</label>
					<input
						type="file"
						name="selectedFile"
						id="selectedFile"
						onChange={handleFileChange}
						required
						className='bg-[#f1f5f9] border border-gray-300 p-1 rounded block w-full file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:bg-gray-700 file:text-white file:cursor-pointer hover:file:bg-gray-600'
					/>
				</div>
			</div>

			<a href="#" className="font-inter font-semibold bg-[#668557] px-4 py-3 lg:px-8 text-white rounded-md cursor-pointer border-b-6 border-[#4d6242] text-md lg:text-lg transition-all duration-300 ease-in-out  hover:bg-[#59734c] hover:scale-105 block text-center mt-4">
					Apply Now
				</a>
		</form>
	);
};

export default JobFormModal;