// import Navigation from "@/pages/Components/Navigations";
// import Footer from "@/pages/Components/Footer";
// import { useState } from "react";
// import Swal from "sweetalert2";
// const JobDetails = ({ job }) => {

//   const [file, setFile] = useState([]);
//   const [formData, setFormData] = useState({
//     position: "",
//     candidateName: "",
//     nationality: "",
//     contactNumber: "",
//     email: "",
//     currentLocation: "",
//     dob: "",
//     passportNumber: "",
//     ecnrEcr: "",
//     passportExpiry: "",
//     currentCompany: "",
//     localExperience: "",
//     internationalExperience: "",
//     totalExperience: "",
//     education: "",
//     currentSalary: "",
//     expectedSalary: "",
//   });

//   // Handle Input Change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     console.log(JSON.stringify(formData))
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   // Handle Form Submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!file) {
//       alert('Please select a file');
//       return;
//     }

//     const formDetails = new FormData();
//     formDetails.append('file', file);
//     formDetails.append('formData', JSON.stringify(formData));

//     try {
//       const res = await fetch('/api/applyJob', {
//         method: 'POST',
//         body: formDetails,
//       });

//       const data = await res.json();

//       if (res.ok) {
//         Swal.fire({
//           title: "Success",
//           text: `File uploaded: ${data.fileName}`,
//           icon: "success"
//         });
//         console.log("Form Data Submitted:", formData);
//       } else {
//         Swal.fire({
//           title: 'Error!',
//           text: `Error: ${data.error}`,
//           icon: 'error',
//           confirmButtonColor: '#d33',  // Red color for error confirmation
//           confirmButtonText: 'OK'
//         });
//         console.log("error", data.error);
//       }
//     } catch (error) {
//       Swal.fire({
//         title: 'Unexpected Error!',
//         text: error.message || 'Something went wrong during submission.',
//         icon: 'error',
//         confirmButtonColor: '#d33'
//       });
//       console.error("Unexpected Exception:", error);
//     }
//   };


//   return (
//     <div>
//       <Navigation />


//       <div className="bg-BgColor-homecolor lg:px-60 lg:py-10  w-full">
//         <div >
//           <form onSubmit={handleSubmit} className="space-y-6 bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl sm:p-12 text-gray-800 transition-all duration-300 hover:shadow-[0_10px_60px_rgba(99,102,241,0.25)] hover:border-indigo-400 group p-10 rounded-xl">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
//               <div className="form-group">
//                 <label className="block text-sm font-medium">Position</label>
//                 <input
//                   type="text"
//                   name="position"
//                   value={formData.position}
//                   onChange={handleChange}
//                   className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label className="block text-sm font-medium">Candidate Name</label>
//                 <input
//                   type="text"
//                   name="candidateName"
//                   value={formData.candidateName}
//                   onChange={handleChange}
//                   className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="form-group">
//                 <label className="block text-sm font-medium">Nationality</label>
//                 <input
//                   type="text"
//                   name="nationality"
//                   value={formData.nationality}
//                   onChange={handleChange}
//                   className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label className="block text-sm font-medium">Contact Number</label>
//                 <input
//                   type="tel"
//                   name="contactNumber"
//                   value={formData.contactNumber}
//                   onChange={handleChange}
//                   className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="form-group">
//                 <label className="block text-sm font-medium">Email ID</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label className="block text-sm font-medium">Current Location</label>
//                 <input
//                   type="text"
//                   name="currentLocation"
//                   value={formData.currentLocation}
//                   onChange={handleChange}
//                   className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="form-group">
//                 <label className="block text-sm font-medium">Date of Birth (DOB)</label>
//                 <input
//                   type="date"
//                   name="dob"
//                   value={formData.dob}
//                   onChange={handleChange}
//                   className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label className="block text-sm font-medium">Passport Number</label>
//                 <input
//                   type="text"
//                   name="passportNumber"
//                   value={formData.passportNumber}
//                   onChange={handleChange}
//                   className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="form-group">
//                 <label className="block text-sm font-medium">ECNR/ECR</label>
//                 <select
//                   name="ecnrEcr"
//                   value={formData.ecnrEcr}
//                   onChange={handleChange}
//                   className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
//                   required
//                 >
//                   <option value="">Select</option>
//                   <option value="ECNR">ECNR</option>
//                   <option value="ECR">ECR</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label className="block text-sm font-medium">Passport Expiry</label>
//                 <input
//                   type="date"
//                   name="passportExpiry"
//                   value={formData.passportExpiry}
//                   onChange={handleChange}
//                   className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="form-group">
//                 <label className="block text-sm font-medium">Current Company Name</label>
//                 <input
//                   type="text"
//                   name="currentCompany"
//                   value={formData.currentCompany}
//                   onChange={handleChange}
//                   className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label className="block text-sm font-medium">Local Experience (Years)</label>
//                 <input
//                   type="number"
//                   name="localExperience"
//                   value={formData.localExperience}
//                   onChange={handleChange}
//                   className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="form-group">
//                 <label className="block text-sm font-medium">International Experience (Years)</label>
//                 <input
//                   type="number"
//                   name="internationalExperience"
//                   value={formData.internationalExperience}
//                   onChange={handleChange}
//                   className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label className="block text-sm font-medium">Total Experience (Years)</label>
//                 <input
//                   type="number"
//                   name="totalExperience"
//                   value={formData.totalExperience}
//                   onChange={handleChange}
//                   className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="form-group">
//                 <label className="block text-sm font-medium">Education Qualification</label>
//                 <input
//                   type="text"
//                   name="education"
//                   value={formData.education}
//                   onChange={handleChange}
//                   className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label className="block text-sm font-medium">Current Salary</label>
//                 <input
//                   type="number"
//                   name="currentSalary"
//                   value={formData.currentSalary}
//                   onChange={handleChange}
//                   className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 gap-6">
//               <div className="form-group">
//                 <label className="block text-sm font-medium">Expected Salary</label>
//                 <input
//                   type="number"
//                   name="expectedSalary"
//                   value={formData.expectedSalary}
//                   onChange={handleChange}
//                   className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium">Upload Your Resume</label>
//               <input type="file" name="file" onChange={handleFileChange} accept=".pdf" />
//             </div>

//             <button
//               type="submit"
//               className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>

//       <Footer />

//     </div>
//   );
// };

// export default JobDetails;
import Navigation from "@/pages/Components/Navigations";
import Footer from "@/pages/Components/Footer";
import { useState } from "react";
import Swal from "sweetalert2";

const JobDetails = ({ job }) => {
  const [file, setFile] = useState([]);
  const [formData, setFormData] = useState({
    position: "",
    candidateName: "",
    nationality: "",
    contactNumber: "",
    email: "",
    currentLocation: "",
    dob: "",
    passportNumber: "",
    ecnrEcr: "",
    passportExpiry: "",
    currentCompany: "",
    localExperience: "",
    internationalExperience: "",
    totalExperience: "",
    education: "",
    currentSalary: "",
    expectedSalary: "",
  });

  const [loading, setLoading] = useState(false); // Loader state

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file");
      return;
    }

    setLoading(true); // Show loader

    const formDetails = new FormData();
    formDetails.append("file", file);
    formDetails.append("formData", JSON.stringify(formData));

    try {
      const res = await fetch("/api/applyJob", {
        method: "POST",
        body: formDetails,
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          title: "Success",
          text: `File uploaded: ${data.fileName}`,
          icon: "success",
        });
        console.log("Form Data Submitted:", formData);
      } else {
        Swal.fire({
          title: "Error!",
          text: `Error: ${data.error}`,
          icon: "error",
          confirmButtonColor: "#d33",
          confirmButtonText: "OK",
        });
        console.log("error", data.error);
      }
    } catch (error) {
      Swal.fire({
        title: "Unexpected Error!",
        text: error.message || "Something went wrong during submission.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
      console.error("Unexpected Exception:", error);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  return (
    <div>
      <Navigation />

      <div className="bg-BgColor-homecolor lg:px-60 lg:py-10 w-full">
        <div>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl sm:p-12 text-gray-800 transition-all duration-300 hover:shadow-[0_10px_60px_rgba(99,102,241,0.25)] hover:border-indigo-400 group p-10 rounded-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="block text-sm font-medium">Position</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
                  required
                />
              </div>
              <div className="form-group">
                <label className="block text-sm font-medium">Candidate Name</label>
                <input
                  type="text"
                  name="candidateName"
                  value={formData.candidateName}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="block text-sm font-medium">Nationality</label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
                  required
                />
              </div>
              <div className="form-group">
                <label className="block text-sm font-medium">Contact Number</label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="block text-sm font-medium">Email ID</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
                  required
                />
              </div>
              <div className="form-group">
                <label className="block text-sm font-medium">Current Location</label>
                <input
                  type="text"
                  name="currentLocation"
                  value={formData.currentLocation}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="block text-sm font-medium">Date of Birth (DOB)</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
                  required
                />
              </div>
              <div className="form-group">
                <label className="block text-sm font-medium">Passport Number</label>
                <input
                  type="text"
                  name="passportNumber"
                  value={formData.passportNumber}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="block text-sm font-medium">ECNR/ECR</label>
                <select
                  name="ecnrEcr"
                  value={formData.ecnrEcr}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
                  required
                >
                  <option value="">Select</option>
                  <option value="ECNR">ECNR</option>
                  <option value="ECR">ECR</option>
                </select>
              </div>
              <div className="form-group">
                <label className="block text-sm font-medium">Passport Expiry</label>
                <input
                  type="date"
                  name="passportExpiry"
                  value={formData.passportExpiry}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="block text-sm font-medium">Current Company Name</label>
                <input
                  type="text"
                  name="currentCompany"
                  value={formData.currentCompany}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
                  required
                />
              </div>
              <div className="form-group">
                <label className="block text-sm font-medium">Local Experience (Years)</label>
                <input
                  type="number"
                  name="localExperience"
                  value={formData.localExperience}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="block text-sm font-medium">International Experience (Years)</label>
                <input
                  type="number"
                  name="internationalExperience"
                  value={formData.internationalExperience}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
                  required
                />
              </div>
              <div className="form-group">
                <label className="block text-sm font-medium">Total Experience (Years)</label>
                <input
                  type="number"
                  name="totalExperience"
                  value={formData.totalExperience}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="block text-sm font-medium">Education Qualification</label>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
                  required
                />
              </div>
              <div className="form-group">
                <label className="block text-sm font-medium">Current Salary</label>
                <input
                  type="number"
                  name="currentSalary"
                  value={formData.currentSalary}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="form-group">
                <label className="block text-sm font-medium">Expected Salary</label>
                <input
                  type="number"
                  name="expectedSalary"
                  value={formData.expectedSalary}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent focus:outline-none border-b border-gray-400"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Upload Your Resume</label>
              <input type="file" name="file" onChange={handleFileChange} accept=".pdf" />
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-BgColor-buttonclr text-white font-semibold rounded-lg hover:bg-green-600 transition flex items-center justify-center"
              disabled={loading}
            >
              {loading && (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
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
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              )}
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobDetails;
