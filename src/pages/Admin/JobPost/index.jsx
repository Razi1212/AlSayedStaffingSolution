'use client'; // If App Router

import React, { useState, useEffect } from "react";
import Dashboard from "../Dashboard";
import { useRouter } from "next/router";
import Link from "next/link";
import Loader from "@/components/loaders/Loader";
import Swal from "sweetalert2";

const JobPost = () => {
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true); // <-- Added loading state

  const fetchJobs = async () => {
    setIsLoading(true); // Start loading
    try {
      const res = await fetch("/api/getJobs");
      if (!res.ok) throw new Error("Failed to fetch jobs");
      const data = await res.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleAddJobClick = () => {
    router.push("/Admin/JobPost/AddJob");
  };

  const handleDelete = async (job) => {
    const result = await Swal.fire({
      title: `Are you sure?`,
      text: `Do you want to delete "${job.title}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33', // red
      cancelButtonColor: '#3085d6', // blue
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    });
  
    if (result.isConfirmed) {
      try {
        const res = await fetch(`/api/deleteJob?jobId=${job?.jobId}`, {
          method: 'DELETE',
        });
  
        if (res.ok) {
          await Swal.fire({
            title: 'Deleted!',
            text: `${job.title} has been deleted successfully.`,
            icon: 'success',
            confirmButtonText: 'OK'
          });
          fetchJobs(); // Refresh job list
        } else {
          Swal.fire({
            title: 'Failed!',
            text: 'Failed to delete job.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      } catch (error) {
        console.error('Error deleting job:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  };

  const filteredJobs = jobs.filter(job =>
    job.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Dashboard />
      <div className="bg-BgColor-Dashboard min-h-screen w-full px-10">
        <p className="text-lg py-4">Create and manage job postings here.</p>

        <div className="flex  items-center justify-between mb-4">
         
        <div className="flex   flex-wrap gap-6">
        <input
            type="text"
            placeholder="Search Job Description"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 rounded-md text-black border border-gray-400"
          />

          <input
            type="date"
            placeholder="Date Filter"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="p-2 rounded-md text-black border border-gray-400"
          />
        </div>
         
           <div className="">
           <button
            onClick={handleAddJobClick}
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
          >
           + Add Job
          </button>
           </div>
        </div>

        <hr className="border-t border-black my-4" />

        <div>
          <ul>
            {isLoading ? (
              <div className="text-center py-4">
                <Loader />
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className="text-center py-4">
                <p>No jobs available</p>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <li
                  key={job._id}
                  className="border p-4 mb-6 rounded-lg shadow-md  flex flex-col gap-2"
                >
                  <h2 className="text-xl font-bold uppercase text-black-1000">{job.title}</h2>
                  <h2 className="text-lg font-semibold capitalize">{job.location}</h2>
                  <p className="text-gray-700">{job.description} ....</p>
                  <p className="text-sm text-gray-500">Job ID: {job.jobId}</p>

                  <div className="flex  justify-end gap-2">
                    <Link href={`/Jobseekers/${job.jobId}`}>
                      <button className="bg-yellow-300 text-black px-6 py-2 w-80 rounded hover:bg-yellow-400 transition">
                        View More
                      </button>
                    </Link>

                    <button
                      onClick={() => handleDelete(job)}
                      className="bg-red-400 text-white px-6 py-2 rounded w-80 hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default JobPost;
