
// import Navigation from "@/pages/Components/Navigations";
// import Footer from "@/pages/Components/Footer";
// import Link from "next/link";
// import { MongoClient, ObjectId } from "mongodb";
// import { useState } from "react";
// import { FiMapPin, FiBriefcase, FiCheckCircle, FiUsers } from "react-icons/fi";
// import Swal from "sweetalert2";
// import { useRouter } from 'next/router';
// import { Checkbox } from "@/components/ui/checkbox"

// // Job Details Component
// const JobDetails = ({ job }) => {
//     const router = useRouter();
//     const handleApplyClick = () => {
//         router.push('/Jobseekers/31/Apply');
//     };

//     if (!job) {
//         return (
//             <div className="flex items-center justify-center h-screen">
//                 <h1 className="text-2xl font-bold">Job Not Found 😢</h1>
//             </div>
//         );
//     }

//     const [file, setFile] = useState([]);
//     const [formData, setFormData] = useState({
//         position: "",
//         candidateName: "",
//         nationality: "",
//         contactNumber: "",
//         email: "",
//         currentLocation: "",
//         dob: "",
//         passportNumber: "",
//         ecnrEcr: "",
//         passportExpiry: "",
//         currentCompany: "",
//         localExperience: "",
//         internationalExperience: "",
//         totalExperience: "",
//         education: "",
//         currentSalary: "",
//         expectedSalary: "",
//     });

//     // Handle Input Change
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//         console.log(JSON.stringify(formData))
//     };

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };

//     // Handle Form Submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!file) {
//             alert('Please select a file');
//             return;
//         }

//         const formDetails = new FormData();
//         formDetails.append('file', file);
//         formDetails.append('formData', JSON.stringify(formData));

//         const res = await fetch('/api/applyJob', {
//             method: 'POST',
//             body: formDetails,
//         });

//         const data = await res.json();

//         if (res.ok) {
//             Swal.fire({
//                 title: "Success",
//                 text: `File uploaded: ${data.fileName}`,
//                 icon: "success"
//             });
//         } else {

//             Swal.fire({
//                 title: 'Error!',
//                 text: `Error: ${data.error}`,
//                 icon: 'error',
//                 confirmButtonColor: '#d33',  // Red color for error confirmation
//                 confirmButtonText: 'OK'
//             });
//             console.log("error", data.error)
//         }
//         console.log("Form Data Submitted:", formData);
//         Swal.fire({
//             title: "Success",
//             text: "Form submitted successfully",
//             icon: "success"
//         });


//     };

//     return (

//         <div  className="">
//             <Navigation />


//             <div className="min-h-screen bg-gradient-to-tr from-[#f0f4f8] via-white to-[#e0e7ff] flex items-center justify-center p-6">
//                 <div className="w-full max-w-4xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-8 sm:p-12 text-gray-800 transition-all duration-300 hover:shadow-[0_10px_60px_rgba(99,102,241,0.25)] hover:border-indigo-400 group">

//                     {/* Header */}
//                     <div className="mb-8">
//                         <h1 className="text-3xl font-bold text-gray-900 drop-shadow-md mb-3">
//                             {job.title || "Untitled Position"}
//                         </h1>
//                         <div className="flex items-center gap-2 text-gray-600 text-lg">
//                             <FiMapPin className="text-indigo-500" />
//                             <span>{job.location || "Somewhere on Earth 🌍"}</span>
//                         </div>
//                     </div>

//                     {/* Industry */}
//                     <div className="mb-6 flex items-center gap-3 text-base text-gray-700">

//                         <span>
//                             <strong>Industry:</strong> {job.industry || "Not Specified"}
//                         </span>
//                     </div>

//                     {/* Description */}
//                     <section className="mb-8">
//                         <h2 className="text-xl font-semibold  mb-2"> Description</h2>
//                         <p className="whitespace-pre-line leading-5 tracking-wide text-gray-800">
//                             {job.description || "No description available at the moment."}
//                         </p>
//                     </section>

//                     {/* Responsibilities */}
//                     <section className="mb-8">
//                         <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
//                         {(job.responsibilities || "No responsibilities listed.")
//                             .split("\n")
//                             .map((item, index) => (
//                                 <div key={index} className="flex items-start gap-2 mb-1">

//                                     <span>{item}</span>
//                                 </div>
//                             ))}
//                     </section>

//                     {/* Qualifications */}
//                     <section className="mb-8">
//                         <h2 className="text-xl font-semibold mb-2"> Qualifications</h2>
//                         <p>{job.qualifications || "No qualifications provided."}</p>
//                     </section>

//                     {/* Benefits */}
//                     <section>
//                         <h2 className="text-xl font-semibold mb-2">Benefits</h2>
//                         <p className="whitespace-pre-line">{job.benefits || "No benefits mentioned."}</p>
//                     </section>

//                     <section className="mt-10  gap-5 flex mb-5" >
//                         <Checkbox />
//                         <h2>To proceed with your application, please provide the following documents: educational certificates and transcripts, experience letters, passport (front and back), recent passport-size photograph, and relevant skill certificates.</h2>
//                     </section>

//                     <div>
//                         <button
//                             type="submit"
//                             onClick={handleApplyClick}
//                             className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
//                         >
//                             Apply
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <Footer />

//         </div>
//     );
// };

// export default JobDetails;


// export async function getServerSideProps(context) {
//     const { id } = context.params;

//     try {
//         // MongoDB connection URI
//         const uri = process.env.MONGODB_URI;

//         // Connect to MongoDB
//         const client = await MongoClient.connect(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         const database = client.db("AlSayed"); // Your database name
//         const collection = database.collection("Jobs"); // Your collection name

//         // Check if the ID is valid. If it's an ObjectId, convert it. If it's a number (like '9'), query by jobId.
//         let query;
//         if (ObjectId.isValid(id)) {
//             query = { _id: new ObjectId(id) }; // For ObjectId
//         } else {
//             query = { jobId: parseInt(id) }; // For numerical jobId (like '9')
//         }

//         // Fetch the job from MongoDB
//         const job = await collection.findOne(query);

//         // Close MongoDB connection
//         client.close();

//         // If job not found, return 404
//         if (!job) {
//             return {
//                 notFound: true,
//             };
//         }

//         // Return job data as props
//         return {
//             props: {
//                 job: JSON.parse(JSON.stringify(job)),
//             },
//         };
//     } catch (error) {
//         console.error("Error fetching job:", error);
//         return {
//             notFound: true,
//         };
//     }
// }


import Navigation from "@/pages/Components/Navigations";
import Footer from "@/pages/Components/Footer";
import Link from "next/link";
import { MongoClient, ObjectId } from "mongodb";
import { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import Swal from "sweetalert2";
import { useRouter } from 'next/router';
import { Checkbox } from "@/components/ui/checkbox";

// Job Details Component
const JobDetails = ({ job }) => {
    const router = useRouter();
    const handleApplyClick = () => {
        router.push('/Jobseekers/31/Apply');
    };

    if (!job) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-2xl font-bold">Job Not Found 😢</h1>
            </div>
        );
    }

    const [file, setFile] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
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

    // Handle Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(JSON.stringify(formData));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert('Please select a file');
            return;
        }

        const formDetails = new FormData();
        formDetails.append('file', file);
        formDetails.append('formData', JSON.stringify(formData));

        const res = await fetch('/api/applyJob', {
            method: 'POST',
            body: formDetails,
        });

        const data = await res.json();

        if (res.ok) {
            Swal.fire({
                title: "Success",
                text: `File uploaded: ${data.fileName}`,
                icon: "success"
            });
        } else {
            Swal.fire({
                title: 'Error!',
                text: `Error: ${data.error}`,
                icon: 'error',
                confirmButtonColor: '#d33',
                confirmButtonText: 'OK'
            });
            console.log("error", data.error);
        }

        console.log("Form Data Submitted:", formData);
        Swal.fire({
            title: "Success",
            text: "Form submitted successfully",
            icon: "success"
        });
    };

    return (
        <div>
            <Navigation />

            <div className="min-h-screen bg-gradient-to-tr from-[#f0f4f8] via-white to-[#e0e7ff] flex items-center justify-center p-6">
                <div className="w-full max-w-4xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-8 sm:p-12 text-gray-800 transition-all duration-300 hover:shadow-[0_10px_60px_rgba(99,102,241,0.25)] hover:border-indigo-400 group">

                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 drop-shadow-md mb-3">
                            {job.title || "Untitled Position"}
                        </h1>
                        <div className="flex items-center gap-2 text-gray-600 text-lg">
                            <FiMapPin className="text-indigo-500" />
                            <span>{job.location || "Somewhere on Earth 🌍"}</span>
                        </div>
                    </div>

                    {/* Industry */}
                    <div className="mb-6 flex items-center gap-3 text-base text-gray-700">
                        <span>
                            <strong>Industry:</strong> {job.industry || "Not Specified"}
                        </span>
                    </div>

                    {/* Description */}
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">Description</h2>
                        <p className="whitespace-pre-line leading-5 tracking-wide text-gray-800">
                            {job.description || "No description available at the moment."}
                        </p>
                    </section>

                    {/* Responsibilities */}
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
                        {(job.responsibilities || "No responsibilities listed.")
                            .split("\n")
                            .map((item, index) => (
                                <div key={index} className="flex items-start gap-2 mb-1">
                                    <span>{item}</span>
                                </div>
                            ))}
                    </section>

                    {/* Qualifications */}
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">Qualifications</h2>
                        <p>{job.qualifications || "No qualifications provided."}</p>
                    </section>

                    {/* Benefits */}
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">Benefits</h2>
                        {(job.benefits || "No benefits mentioned.")
                            .split("\n")
                            .map((item, index) => (
                                <div key={index} className="flex items-start gap-2 mb-1">
                                    <span>{item}</span>
                                </div>
                            ))}
                    </section>


                    {/* Checkbox Section */}
                    <section className="mt-10 gap-4 flex items-start mb-6">
                        <Checkbox
                            checked={isChecked}
                            onCheckedChange={(checked) => setIsChecked(!!checked)}
                        />
                        <h2 className="text-sm text-gray-700 leading-relaxed">
                            To proceed with your application, please provide the following documents:
                            educational certificates and transcripts, experience letters, passport (front and back),
                            recent passport-size photograph, and relevant skill certificates.
                        </h2>
                    </section>

                    {/* Apply Button */}
                    <div>
                        <button
                            type="submit"
                            onClick={handleApplyClick}
                            disabled={!isChecked}
                            className={`px-6 py-3 font-semibold rounded-lg transition duration-300 ${isChecked
                                ? "bg-BgColor-buttonclr hover:bg-green-600 text-white cursor-pointer"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`}
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default JobDetails;

// Server-Side Data Fetch
export async function getServerSideProps(context) {
    const { id } = context.params;

    try {
        const uri = process.env.MONGODB_URI;
        const client = await MongoClient.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const database = client.db("AlSayed");
        const collection = database.collection("Jobs");

        let query;
        if (ObjectId.isValid(id)) {
            query = { _id: new ObjectId(id) };
        } else {
            query = { jobId: parseInt(id) };
        }

        const job = await collection.findOne(query);
        client.close();

        if (!job) {
            return { notFound: true };
        }

        return {
            props: {
                job: JSON.parse(JSON.stringify(job)),
            },
        };
    } catch (error) {
        console.error("Error fetching job:", error);
        return { notFound: true };
    }
}
