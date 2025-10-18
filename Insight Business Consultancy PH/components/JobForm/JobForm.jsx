import { useState } from "react";

/* ============================================================
   ALERT COMPONENT
   ============================================================ */
const Alert = ({ message, type, onClose }) => {
  const alertStyles = {
    success: "bg-green-100 border-green-400 text-green-700",
    error: "bg-red-100 border-red-400 text-red-700",
  };

  if (!message) return null;

  return (
    <div
      className={`border px-4 py-3 rounded relative mt-4 ${alertStyles[type]}`}
      role="alert"
    >
      <span className="block sm:inline">{message}</span>
      <span
        className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer"
        onClick={onClose}
      >
        <svg
          className="w-6 h-6 fill-current"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );
};

/* ============================================================
   JOB FORM COMPONENT
   ============================================================ */
const JobFormModal = () => {
  const initialFormData = {
    firstName: "",
    middleName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    birthDate: "",
    age: "",
    sex: "male",
    civilStatus: "single",
    citizenship: "",
    religion: "",
    birthPlace: "",
    positionTitle: "",
    address: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [resumeFile, setResumeFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState({
    message: "",
    type: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ============================================================
     FILE HANDLER
     ============================================================ */
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileError("");
    setResumeFile(null);

    if (file) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const maxFileSize = 5 * 1024 * 1024; // 5MB

      if (!allowedTypes.includes(file.type)) {
        setFileError("Invalid file type. Please upload a PDF, DOC, or DOCX file.");
        e.target.value = null;
      } else if (file.size > maxFileSize) {
        setFileError("File is too large. Maximum size is 5MB.");
        e.target.value = null;
      } else {
        setResumeFile(file);
      }
    }
  };

  /* ============================================================
     SUBMIT HANDLER — sends data to your PHP backend
     ============================================================ */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus({ message: "", type: "" });

    if (!resumeFile) {
      setFileError("Please attach your resume to proceed.");
      return;
    }

    setIsLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    data.append("resumeFile", resumeFile);

    try {
      const response = await fetch("https://ibcph.com/backend/send_mail_careers.php", {
        method: "POST",
        body: data,
      });

      const result = await response.text();

      if (response.ok && result.includes("success")) {
        setSubmissionStatus({ message: "✅ Application sent successfully!", type: "success" });
        setFormData(initialFormData);
        setResumeFile(null);
        setFileError("");
        e.target.reset();
      } else {
        setSubmissionStatus({
          message: "❌ Failed to send your application. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionStatus({
        message: "⚠️ Network error. Please try again later.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  /* ============================================================
     RENDER FORM
     ============================================================ */
  return (
    <form onSubmit={handleSubmit}>
      <div className="my-4">
        <h1 className="text-lg font-semibold font-inter">Job Application</h1>
        <p className="font-inter">Please fill out the form below to apply.</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* --- BASIC INFO --- */}
        {[
          ["firstName", "First Name", true],
          ["middleName", "Middle Name", false],
          ["lastName", "Last Name", true],
          ["contactNumber", "Contact Number", true],
          ["email", "Email", true],
          ["birthDate", "Date of Birth", true, "date"],
          ["age", "Age", true, "number"],
          ["citizenship", "Citizenship", true],
          ["religion", "Religion", false],
          ["birthPlace", "Birth Place", true],
          ["positionTitle", "Position Title", true],
          ["address", "Address", true],
        ].map(([name, label, required, type = "text"]) => (
          <div key={name}>
            <label htmlFor={name}>
              {label}
              {required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={type}
              name={name}
              id={name}
              value={formData[name]}
              onChange={handleChange}
              required={required}
              className="bg-[#f1f5f9] border border-gray-300 p-2 rounded block w-full"
            />
          </div>
        ))}

        {/* --- SEX --- */}
        <div>
          <label htmlFor="sex">
            Sex<span className="text-red-500">*</span>
          </label>
          <select
            name="sex"
            id="sex"
            className="bg-[#f1f5f9] border border-gray-300 p-2 rounded block w-full cursor-pointer"
            value={formData.sex}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>

        {/* --- CIVIL STATUS --- */}
        <div>
          <label htmlFor="civilStatus">
            Civil Status<span className="text-red-500">*</span>
          </label>
          <select
            name="civilStatus"
            id="civilStatus"
            className="bg-[#f1f5f9] border border-gray-300 p-2 rounded block w-full cursor-pointer"
            value={formData.civilStatus}
            onChange={handleChange}
          >
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="separated">Separated</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>

        {/* --- FILE UPLOAD --- */}
        <div className="lg:col-span-2">
          <label htmlFor="resumeFile">
            Portfolio / CV / Resume<span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name="resumeFile"
            id="resumeFile"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            required
            className="block w-full text-sm cursor-pointer text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
          />
          <p className="mt-1 text-xs text-gray-500">PDF, DOC, DOCX (Max 5MB).</p>

          {resumeFile && !fileError && (
            <div className="p-2 mt-2 text-sm text-green-700 bg-green-100 rounded-md">
              ✅ Attached: {resumeFile.name}
            </div>
          )}
          {fileError && (
            <div className="p-2 mt-2 text-sm text-red-600 bg-red-100 rounded-md" role="alert">
              🚫 {fileError}
            </div>
          )}
        </div>
      </div>

      {/* --- SUBMIT BUTTON --- */}
      <button
        type="submit"
        disabled={isLoading}
        className={`font-inter font-semibold bg-[#668557] px-4 py-3 lg:px-8 text-white rounded-md border-b-4 border-[#4d6242] text-md lg:text-lg transition-all duration-300 ease-in-out block text-center mt-4 w-full ${
          isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#59734c] hover:border-b-2"
        }`}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span className="ml-2">Sending...</span>
          </div>
        ) : (
          "Submit Application"
        )}
      </button>

      <Alert
        message={submissionStatus.message}
        type={submissionStatus.type}
        onClose={() => setSubmissionStatus({ message: "", type: "" })}
      />
    </form>
  );
};

export default JobFormModal;
