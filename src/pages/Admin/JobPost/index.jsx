import React, { useState } from "react";
import Dashboard from "../Dashboard";
import { useRouter } from "next/router";
import { useEffect} from "react";
import Link from "next/link";

const JobPost = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
    const [Jobs, setJobs] = useState([]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log("Searching for:", e.target.value);
  };

  const handleAddJobClick = () => {
    router.push("/Admin/JobPost/AddJob");
  };

    useEffect(() => {
      async function fetchJobs() {
        try {
          const res = await fetch("/api/getJobs");
          if (!res.ok) throw new Error("Failed to fetch jobs");
          const data = await res.json();
          setJobs(data);
        } catch (error) {
          console.error("Error fetching jobs:", error);
        }
      }
      fetchJobs();
    }, []);
    
  return (
    <>
      <Dashboard />
      <div className="bg-BgColor-Dashboard min-h-screen w-full px-10">
        <p>Create and manage job postings here.</p>
        <div className="flex gap-6"> 
          <button onClick={handleAddJobClick}>Add Job</button>

          <input
            type="text"
            placeholder="Search on JobDescription"
            value={searchQuery}
            onChange={handleSearch}
            className="p-2 rounded-md text-black border border-gray-400"
          />

          <input
            type="text"
            placeholder="Date Filter"
            value={searchQuery}
            onChange={handleSearch}
            className="p-2 rounded-md text-black border border-gray-400"
          />

        </div>

        <hr className="border-t border-black my-4" />

        <div>
          <ul>
            {Jobs.map((Job) => (
              <>
                <li
                  key={Job._id}
                  className="border p-4 mb-6 rounded-lg shadow-md  bg-white"
                >
                  <h2 className="text-xl font-semibold">{Job.title}</h2>
                  <h2 className="text-xl">{Job.location}</h2>
                  <p className="mb-5">{Job.description}</p>
                  <p className="mb-5">{Job.jobId}</p>
                  <div className="flex gap-3 text-center">
                    <Link href={`/Jobseekers/${Job.jobId}`}>
                      <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 transition">
                        View More
                      </button>
                    </Link>

                    <Link href={`/Jobseekers/${Job.jobId}`}>
                      <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 transition">
                       Delete
                      </button>
                    </Link>
                  </div>
                </li>
              </>
            ))}
          </ul>
        </div>

      </div>
    </>
  );
};

export default JobPost;
