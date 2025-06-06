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
import { FiMapPin, FiBriefcase, FiCheckCircle , FiUsers } from "react-icons/fi";


// Job Details Component
const JobDetails = ({ job }) => {
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
            alert(`File uploaded: ${data.fileName}`);
        } else {
            alert(`Error: ${data.error}`);
            console.log("error", data.error)
        }
        console.log("Form Data Submitted:", formData);
        alert("Form submitted successfully!");
    };

    return (
        <div>
            <Navigation />
           

    <div className="min-h-screen bg-gradient-to-tr from-[#f0f4f8] via-white to-[#e0e7ff] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-8 sm:p-12 text-gray-800 transition-all duration-300 hover:shadow-[0_10px_60px_rgba(99,102,241,0.25)] hover:border-indigo-400 group">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 drop-shadow-md mb-3">
            {job.title || "Untitled Position"}
          </h1>
          <div className="flex items-center gap-2 text-gray-600 text-lg">
            <FiMapPin className="text-indigo-500" />
            <span>{job.location || "Somewhere on Earth 🌍"}</span>
          </div>
        </div>

        {/* Industry */}
        <div className="mb-6 flex items-center gap-3 text-base text-gray-700">
          <FiBriefcase className="text-indigo-500" />
          <span>
            <strong>Industry:</strong> {job.industry || "Not Specified"}
          </span>
        </div>

        {/* Description */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">📄 Description</h2>
          <p className="whitespace-pre-line leading-relaxed tracking-wide text-gray-800">
            {job.description || "No description available at the moment."}
          </p>
        </section>

        {/* Responsibilities */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">🎯 Responsibilities</h2>
          {(job.responsibilities || "No responsibilities listed.")
            .split("\n")
            .map((item, index) => (
              <div key={index} className="flex items-start gap-2 mb-1">
                <FiCheckCircle className="text-green-500 mt-1" />
                <span>{item}</span>
              </div>
            ))}
        </section>

        {/* Qualifications */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">🎓 Qualifications</h2>
          <p>{job.qualifications || "No qualifications provided."}</p>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">💼 Benefits</h2>
          <p className="whitespace-pre-line">{job.benefits || "No benefits mentioned."}</p>
        </section>

        {/* Footer */}
        <div className="mt-12 text-sm text-gray-500 text-center">
          Made with 💖 by Razi &middot; © {new Date().getFullYear()}
        </div>
      </div>
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

