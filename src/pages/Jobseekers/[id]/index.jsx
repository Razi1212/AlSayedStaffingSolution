
import Navigation from "@/pages/Components/Navigations";
import Footer from "@/pages/Components/Footer";
import Link from "next/link";
import { MongoClient, ObjectId } from "mongodb";
import { useState } from "react";
import { FiMapPin, FiBriefcase, FiCheckCircle, FiUsers } from "react-icons/fi";
import Swal from "sweetalert2";
import { useRouter } from 'next/router';
import { Checkbox } from "@/components/ui/checkbox"

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
        console.log(JSON.stringify(formData))
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
                confirmButtonColor: '#d33',  // Red color for error confirmation
                confirmButtonText: 'OK'
            });
            console.log("error", data.error)
        }
        console.log("Form Data Submitted:", formData);
        Swal.fire({
            title: "Success",
            text: "Form submitted successfully",
            icon: "success"
        });


    };

    return (

        <div  className="">
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
                        <h2 className="text-xl font-semibold  mb-2"> Description</h2>
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
                        <h2 className="text-xl font-semibold mb-2"> Qualifications</h2>
                        <p>{job.qualifications || "No qualifications provided."}</p>
                    </section>

                    {/* Benefits */}
                    <section>
                        <h2 className="text-xl font-semibold mb-2">Benefits</h2>
                        <p className="whitespace-pre-line">{job.benefits || "No benefits mentioned."}</p>
                    </section>

                    <section className="mt-10  gap-5 flex mb-5" >
                        <Checkbox />
                        <h2>To proceed with your application, please provide the following documents: educational certificates and transcripts, experience letters, passport (front and back), recent passport-size photograph, and relevant skill certificates.</h2>
                    </section>

                    <div>
                        <button
                            type="submit"
                            onClick={handleApplyClick}
                            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </div>



            {/* <div className="bg-slate-300 lg:px-60 lg:py-40  w-full bg-[url('/Apply.jpeg')] bg-cover bg-center">
                <div >
                    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-10 rounded-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
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
                            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div> */}

            <Footer />

        </div>
    );
};

export default JobDetails;


export async function getServerSideProps(context) {
    const { id } = context.params;

    try {
        // MongoDB connection URI
        const uri = process.env.MONGODB_URI;

        // Connect to MongoDB
        const client = await MongoClient.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const database = client.db("AlSayed"); // Your database name
        const collection = database.collection("Jobs"); // Your collection name

        // Check if the ID is valid. If it's an ObjectId, convert it. If it's a number (like '9'), query by jobId.
        let query;
        if (ObjectId.isValid(id)) {
            query = { _id: new ObjectId(id) }; // For ObjectId
        } else {
            query = { jobId: parseInt(id) }; // For numerical jobId (like '9')
        }

        // Fetch the job from MongoDB
        const job = await collection.findOne(query);

        // Close MongoDB connection
        client.close();

        // If job not found, return 404
        if (!job) {
            return {
                notFound: true,
            };
        }

        // Return job data as props
        return {
            props: {
                job: JSON.parse(JSON.stringify(job)),
            },
        };
    } catch (error) {
        console.error("Error fetching job:", error);
        return {
            notFound: true,
        };
    }
}
