// import Navigation from "@/pages/Components/Navigations";
// import Footer from "@/pages/Components/Footer";
// import { useParams } from 'next/navigation'

// const JobDetails = () => {
//     const params = useParams();

//     const { id } = params;
//     return (
//         <div>
//             <Navigation />
//             <h1>Job ID: {id}</h1>

//             <Footer />
//         </div>
//     );
// };

// export default JobDetails;

import Navigation from "@/pages/Components/Navigations";
import Footer from "@/pages/Components/Footer";
import Link from "next/link";
import { MongoClient, ObjectId } from "mongodb";
import { useState } from "react";


// Job Details Component
const JobDetails = ({ job }) => {
    if (!job) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-2xl font-bold">Job Not Found 😢</h1>
            </div>
        );
    }

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
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        alert("Form submitted successfully!");
    };

    return (
        <div>
            <Navigation />
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold mb-4">Job Title: {job.title || "N/A"}</h1>

                <p className="text-gray-700 mb-2">
                    <strong>industry:</strong> {job.industry || "N/A"}
                </p>

                <p className="text-gray-700 mb-2">
                    <strong>Location:</strong> {job.location || "N/A"}
                </p>
                <p className="text-gray-700 mb-2">
                    <strong>Description:</strong> {job.description || "No description available."}
                </p>

                <p className="text-gray-700 mb-2">
                    <strong> responsibilities:</strong> {job.responsibilities || "No description available."}
                </p>

                <p className="text-gray-700 mb-2">
                    <strong> qualifications:</strong> {job.qualifications || "No description available."}
                </p>

                <p className="text-gray-700 mb-2">
                    <strong> benefits:</strong> {job.benefits || "No description available."}
                </p>
                <Link href="/Apply">
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition">
                        Apply
                    </button>
                </Link>

            </div>


            <div className='bg-slate-300 p-20 flex'>

             


                <div className="flex-1 "><form onSubmit={handleSubmit} className="space-y-6 bg-white p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <div className="form-group">
                            <label className="block text-sm font-medium">Position</label>
                            <input
                                type="text"
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                                className="p-2 border border-gray-300 rounded-md w-full"
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
                                className="p-2 border border-gray-300 rounded-md w-full"
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
                                className="p-2 border border-gray-300 rounded-md w-full"
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
                                className="p-2 border border-gray-300 rounded-md w-full"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-group">
                            <label className="block text-sm font-medium">Email ID</label>
                            <input
                                type="email"
                                name="emailID"
                                value={formData.emailID}
                                onChange={handleChange}
                                className="p-2 border border-gray-300 rounded-md w-full"
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
                                className="p-2 border border-gray-300 rounded-md w-full"
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
                                className="p-2 border border-gray-300 rounded-md w-full"
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
                                className="p-2 border border-gray-300 rounded-md w-full"
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
                                className="p-2 border border-gray-300 rounded-md w-full"
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
                                className="p-2 border border-gray-300 rounded-md w-full"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-group">
                            <label className="block text-sm font-medium">Current Company Name</label>
                            <input
                                type="text"
                                name="currentCompanyName"
                                value={formData.currentCompanyName}
                                onChange={handleChange}
                                className="p-2 border border-gray-300 rounded-md w-full"
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
                                className="p-2 border border-gray-300 rounded-md w-full"
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
                                className="p-2 border border-gray-300 rounded-md w-full"
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
                                className="p-2 border border-gray-300 rounded-md w-full"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-group">
                            <label className="block text-sm font-medium">Education Qualification</label>
                            <input
                                type="text"
                                name="educationQualification"
                                value={formData.educationQualification}
                                onChange={handleChange}
                                className="p-2 border border-gray-300 rounded-md w-full"
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
                                className="p-2 border border-gray-300 rounded-md w-full"
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
                                className="p-2 border border-gray-300 rounded-md w-full"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
                    >
                        Submit
                    </button>
                </form></div>

            </div>

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

