// // 'use client';

// // import React, { useEffect, useState } from "react";
// // import Navigation from "../Components/Navigations";
// // import { BsBag } from "react-icons/bs";
// // import { FiMapPin } from "react-icons/fi";
// // import Footer from "../Components/Footer";
// // import Link from "next/link";
// // import Loader from "@/components/loaders/Loader"; // Loader component

// // const Jobseekers = () => {
// //   const [Jobs, setJobs] = useState([]);
// //   const [filteredJobs, setFilteredJobs] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [job, setJob] = useState('');
// //   const [location, setLocation] = useState('');
// //   const [displayCount, setDisplayCount] = useState(2);
// //   const [titleFilter, setTitleFilter] = useState('');
// //   const [locationFilter, setLocationFilter] = useState('');

// //   const handleKeyDown = (e) => {
// //     if (e.key === 'Enter') {
// //       e.preventDefault();

// //       const filtered = Jobs.filter((jobItem) =>
// //         jobItem.title.toLowerCase().includes(job.toLowerCase())
// //       );

// //       setFilteredJobs(filtered);
// //     }
// //   };

// //   useEffect(() => {
// //     async function fetchJobs() {
// //       setIsLoading(true);
// //       try {
// //         const res = await fetch("/api/getJobs");
// //         if (!res.ok) throw new Error("Failed to fetch jobs");
// //         const data = await res.json();
// //         setJobs(data);
// //         setFilteredJobs(data); // Set filtered jobs to all initially
// //       } catch (error) {
// //         console.error("Error fetching jobs:", error);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     }
// //     fetchJobs();
// //   }, []);

// //  const visibleJobs = filteredJobs.slice(0, displayCount);

// //   return (
// //     <>
// //       <Navigation />
// //       <div className="w-full bg-white">
// //         <div className="bg-BgColor-testing min-h-screen w-full lg:max-w-[1600px] mx-auto lg:px-[5%] lg:py-10 p-5 space-y-16 md:p-20">
// //           <div>
// //             <h6 className="text-3xl sm:text-4xl font-bold text-center mb-5">
// //               Find and become a professional with passion
// //             </h6>
// //             <p className="text-center text-lg sm:text-xl mb-10 px-2">
// //               We specialize in connecting job seekers with the best career
// //               opportunities across the Gulf region. Whether you're a seasoned
// //               professional or a fresh graduate, our platform is designed to help
// //               you navigate the job market with ease.
// //             </p>


// //             <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-2xl mx-auto mb-10">
// //               <div className="relative w-full sm:w-auto">
// //                 <BsBag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
// //                 <input
// //                   type="text"
// //                   placeholder="Job"
// //                   value={job}
// //                   onChange={(e) => setJob(e.target.value)}
// //                   onKeyDown={handleKeyDown}
// //                   className="pl-10 pr-4 py-2 w-full sm:w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
// //                 />


// //               </div>
// //               <div className="relative w-full sm:w-auto">
// //                 <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
// //                 <input
// //                   type="text"
// //                   placeholder="Title Location"
// //                   value={location}
// //                   onChange={(e) => setLocation(e.target.value)}
// //                   onKeyDown={handleKeyDown}
// //                   className="pl-10 pr-4 py-2 w-full sm:w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
// //                 />
// //               </div>
// //             </div>

// //           </div>

// //           <div>
// //             {isLoading ? (
// //               <div className="flex justify-center items-center min-h-[300px]">
// //                 <Loader />
// //               </div>
// //             ) : (
// //               <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-10">
// //                 {filteredJobs.length === 0 ? (
// //                   <div className="text-center w-full col-span-2">
// //                     <p>No jobs available</p>
// //                   </div>
// //                 ) : (
// //                   filteredJobs.map((Job) => (
// //                     <li
// //                       key={Job._id}
// //                       className=" bg-BgColor-contactcolor rounded-2xl p-6 sm:p-12 text-gray-800 transition-all duration-300 hover:shadow-[0_10px_60px_rgba(99,102,241,0.25)] hover:border-indigo-400 group"
// //                     >
// //                       <h2 className="text-xl font-semibold mb-3">{Job.title}</h2>
// //                       <h2 className="text-xl mb-1 flex items-center gap-2">
// //                         <FiMapPin className="text-gray-500" />
// //                         {Job.location}
// //                       </h2>

// //                       <p className="mb-5 line-clamp-2 overflow-hidden text-ellipsis">
// //                         {Job.description}
// //                       </p>

// //                       <div className="flex gap-3 text-center flex-wrap">
// //                         <Link href={`/Jobseekers/${Job.jobId}`}>
// //                           <button className="bg-BgColor-buttonclr text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 transition">
// //                             View More
// //                           </button>
// //                         </Link>
// //                         <h2>Multiple Vacancies</h2>
// //                         <h2>Posted 30 days ago</h2>
// //                       </div>
// //                     </li>
// //                   ))
// //                 )}
// //               </ul>
// //             )}
// //           </div>

// //           {displayCount < filteredJobs.length && (
// //             <div className="mt-6 text-center">
// //               <button
// //                 onClick={() => setDisplayCount((prev) => prev + 2)}
// //                 className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
// //               >
// //                 Load More
// //               </button>
// //             </div>
// //           )}
// //         </div>


// //       </div >
// //       <Footer />
// //     </>
// //   );
// // };

// // export default Jobseekers;

// // 'use client';

// // import React, { useEffect, useState } from "react";
// // import Navigation from "../Components/Navigations";
// // import { BsBag } from "react-icons/bs";
// // import { FiMapPin } from "react-icons/fi";
// // import Footer from "../Components/Footer";
// // import Link from "next/link";
// // import Loader from "@/components/loaders/Loader";

// // const Jobseekers = () => {
// //   const [Jobs, setJobs] = useState([]);
// //   const [filteredJobs, setFilteredJobs] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [job, setJob] = useState('');
// //   const [location, setLocation] = useState('');
// //   const [displayCount, setDisplayCount] = useState(10);

// //   useEffect(() => {
// //     async function fetchJobs() {
// //       setIsLoading(true);
// //       try {
// //         const res = await fetch("/api/getJobs");
// //         if (!res.ok) throw new Error("Failed to fetch jobs");
// //         const data = await res.json();
// //         setJobs(data);
// //         setFilteredJobs(data);
// //       } catch (error) {
// //         console.error("Error fetching jobs:", error);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     }
// //     fetchJobs();
// //   }, []);


// //   const handleKeyDown = (e) => {
// //     if (e.key === 'Enter') {
// //       e.preventDefault();
// //       applyFilters();
// //     }
// //   };

// //   const applyFilters = () => {
// //     const filtered = Jobs.filter((jobItem) =>
// //       jobItem.title.toLowerCase().includes(job.toLowerCase()) &&
// //       jobItem.location.toLowerCase().includes(location.toLowerCase())
// //     );
// //     setFilteredJobs(filtered);
// //     setDisplayCount(10);
// //   };

// //   const visibleJobs = filteredJobs.slice(0, displayCount);

// //   return (
// //     <>
// //       <Navigation />
// //       <div className="w-full bg-white">
// //         <div className="bg-BgColor-testing min-h-screen w-full lg:max-w-[1600px] mx-auto lg:px-[5%] lg:py-10 p-5 space-y-16 md:p-20">
// //           <div>
// //             <h6 className="text-3xl sm:text-4xl font-bold text-center mb-5">
// //               Find and become a professional with passion
// //             </h6>
// //             <p className="text-center text-lg sm:text-xl mb-10 px-2">
// //               We specialize in connecting job seekers with the best career
// //               opportunities across the Gulf region. Whether you're a seasoned
// //               professional or a fresh graduate, our platform is designed to help
// //               you navigate the job market with ease.
// //             </p>

// //             <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-2xl mx-auto mb-10">
// //               <div className="relative w-full sm:w-auto">
// //                 <BsBag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
// //                 <input
// //                   type="text"
// //                   placeholder="Job Title"
// //                   value={job}
// //                   onChange={(e) => setJob(e.target.value)}
// //                   onKeyDown={handleKeyDown}
// //                   className="pl-10 pr-4 py-2 w-full sm:w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
// //                 />
// //               </div>
// //               <div className="relative w-full sm:w-auto">
// //                 <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
// //                 <input
// //                   type="text"
// //                   placeholder="Location"
// //                   value={location}
// //                   onChange={(e) => setLocation(e.target.value)}
// //                   onKeyDown={handleKeyDown}
// //                   className="pl-10 pr-4 py-2 w-full sm:w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
// //                 />
// //               </div>
// //               <button
// //                 onClick={applyFilters}
// //                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
// //               >
// //                 Search
// //               </button>
// //             </div>
// //           </div>

// //           <div>
// //             {isLoading ? (
// //               <div className="flex justify-center items-center min-h-[300px]">
// //                 <Loader />
// //               </div>
// //             ) : (
// //               <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-10">
// //                 {visibleJobs.length === 0 ? (
// //                   <div className="text-center w-full col-span-2">
// //                     <p>No jobs available</p>
// //                   </div>
// //                 ) : (
// //                   visibleJobs.map((Job) => (
// //                     <li
// //                       key={Job._id}
// //                       className="bg-BgColor-contactcolor rounded-2xl p-6 sm:p-12 text-gray-800 transition-all duration-300 hover:shadow-[0_10px_60px_rgba(99,102,241,0.25)] hover:border-indigo-400 group"
// //                     >
// //                       <h2 className="text-xl font-semibold mb-3">{Job.title}</h2>
// //                       <h2 className="text-xl mb-1 flex items-center gap-2">
// //                         <FiMapPin className="text-gray-500" />
// //                         {Job.location}
// //                       </h2>
// //                       <p className="mb-5 line-clamp-2 overflow-hidden text-ellipsis">
// //                         {Job.description}
// //                       </p>
// //                       <div className="flex gap-3 text-center flex-wrap">
// //                         <Link href={`/Jobseekers/${Job.jobId}`}>
// //                           <button className="bg-BgColor-buttonclr text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 transition">
// //                             View More
// //                           </button>
// //                         </Link>
// //                         <h2>Multiple Vacancies</h2>
// //                         <h2>Posted 30 days ago</h2>
// //                       </div>
// //                     </li>
// //                   ))
// //                 )}
// //               </ul>
// //             )}
// //           </div>

// //           {displayCount < filteredJobs.length && (
// //             <div className="mt-6 text-center">
// //               <button
// //                 onClick={() => setDisplayCount((prev) => prev + 2)}
// //                 className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition text-white"
// //               >
// //                 Load More
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // };

// // export default Jobseekers;




// 'use client';

// import React, { useEffect, useState } from "react";
// import Navigation from "../Components/Navigations";
// import { BsBag } from "react-icons/bs";
// import { FiMapPin } from "react-icons/fi";
// import Footer from "../Components/Footer";
// import Link from "next/link";
// import Loader from "@/components/loaders/Loader";

// const Jobseekers = () => {
//   const [Jobs, setJobs] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [job, setJob] = useState('');
//   const [location, setLocation] = useState('');
//   const [displayCount, setDisplayCount] = useState(10);

//   // ✅ Preload jobs and cache them
//   useEffect(() => {
//     async function fetchJobs() {
//       setIsLoading(true);
//       try {
//         const res = await fetch("/api/getJobs", { cache: "force-cache" });
//         if (!res.ok) throw new Error("Failed to fetch jobs");
//         const data = await res.json();
//         setJobs(data);
//         setFilteredJobs(data);
//       } catch (error) {
//         console.error("Error fetching jobs:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     fetchJobs();
//   }, []);

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       applyFilters();
//     }
//   };

//   const applyFilters = () => {
//     const filtered = (Jobs || []).filter(
//       (jobItem) =>
//         jobItem.title?.toLowerCase().includes(job.toLowerCase()) &&
//         jobItem.location?.toLowerCase().includes(location.toLowerCase())
//     );
//     setFilteredJobs(filtered);
//     setDisplayCount(10);
//   };

//   const visibleJobs = filteredJobs.slice(0, displayCount);

//   return (
//     <>
//       <Navigation />
//       <div className="w-full bg-white">
//         <div className="bg-BgColor-testing min-h-screen w-full lg:max-w-[1600px] mx-auto lg:px-[5%] lg:py-10 p-5 space-y-16 md:p-20">
//           {/* Header Section */}
//           <div>
//             <h6 className="text-3xl sm:text-4xl font-bold text-center mb-5">
//               Find and become a professional with passion
//             </h6>
//             <p className="text-center text-lg sm:text-xl mb-10 px-2">
//               We specialize in connecting job seekers with the best career
//               opportunities across the Gulf region. Whether you're a seasoned
//               professional or a fresh graduate, our platform is designed to help
//               you navigate the job market with ease.
//             </p>

//             {/* Search Filters */}
//             <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-2xl mx-auto mb-10">
//               <div className="relative w-full sm:w-auto">
//                 <BsBag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//                 <input
//                   type="text"
//                   placeholder="Job Title"
//                   value={job}
//                   onChange={(e) => setJob(e.target.value)}
//                   onKeyDown={handleKeyDown}
//                   className="pl-10 pr-4 py-2 w-full sm:w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//               </div>
//               <div className="relative w-full sm:w-auto">
//                 <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//                 <input
//                   type="text"
//                   placeholder="Location"
//                   value={location}
//                   onChange={(e) => setLocation(e.target.value)}
//                   onKeyDown={handleKeyDown}
//                   className="pl-10 pr-4 py-2 w-full sm:w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//               </div>
//               <button
//                 onClick={applyFilters}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
//               >
//                 Search
//               </button>
//             </div>
//           </div>

//           {/* Job List */}
//           <div>
//             {isLoading ? (
//               <div className="flex justify-center items-center min-h-[300px]">
//                 <Loader />
//               </div>
//             ) : (
//               // <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-10">
//               //   {visibleJobs.length === 0 ? (
//               //     <div className="text-center w-full col-span-2">
//               //       <p>No jobs available</p>
//               //     </div>
//               //   ) : (
//               //     visibleJobs.map((Job) => (
//               //       <li
//               //         key={Job._id}
//               //         className="bg-BgColor-contactcolor rounded-2xl p-6 sm:p-12 text-gray-800 transition-all duration-300 hover:shadow-[0_10px_60px_rgba(99,102,241,0.25)] hover:border-indigo-400 group"
//               //       >
//               //         <h2 className="text-xl font-semibold mb-3">{Job.title}</h2>
//               //         <h2 className="text-xl mb-1 flex items-center gap-2">
//               //           <FiMapPin className="text-gray-500" />
//               //           {Job.location}
//               //         </h2>
//               //         <p className="mb-5 line-clamp-2 overflow-hidden text-ellipsis">
//               //           {Job.description}
//               //         </p>

//               //         <div className="flex gap-3 text-center flex-wrap">
//               //           {/* ✅ Prefetch enabled */}
//               //           <Link href={`/Jobseekers/${Job.jobId}`} prefetch>
//               //             <button className="bg-BgColor-buttonclr text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 transition">
//               //               View More
//               //             </button>
//               //           </Link>
//               //           {/* <h2>Multiple Vacancies</h2>
//               //           <h2>Posted 30 days ago</h2> */}
//               //         </div>
//               //       </li>
//               //     ))
//               //   )}
//               // </ul>

//               <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {visibleJobs.length === 0 ? (
//                   <div className="text-center w-full col-span-full">
//                     <p className="text-gray-600 text-lg">No jobs available</p>
//                   </div>
//                 ) : (
//                   visibleJobs.map((Job) => (
//                     <li
//                       key={Job._id}
//                       className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//                     >
//                       {/* Job Title */}
//                       <h2 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-indigo-600 line-clamp-1">
//                         {Job.title}
//                       </h2>

//                       {/* Location */}
//                       <div className="flex items-center gap-2 text-gray-600 mb-4">
//                         <FiMapPin className="text-gray-500" />
//                         <span className="line-clamp-1">{Job.location}</span>
//                       </div>

//                       {/* Description */}
//                       <p className="text-gray-700 text-sm mb-6 line-clamp-3 leading-relaxed">
//                         {Job.description}
//                       </p>

//                       {/* Footer buttons */}
//                       <div className="flex items-center justify-between">
//                         <Link href={`/Jobseekers/${Job.jobId}`} prefetch>
//                           <button className="bg-BgColor-buttonclr hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transition">
//                             View Details
//                           </button>
//                         </Link>

//                         {/* <div className="text-right">
//                           <p className="text-xs text-gray-500">{formatPostedDate(Job.createdAt)}</p>
//                           <p className="text-xs text-gray-500">Multiple Vacancies</p>
//                         </div> */}
//                       </div>
//                     </li>
//                   ))
//                 )}
//               </ul>

//             )}
//           </div>

//           {/* Load More */}
//           {displayCount < filteredJobs.length && (
//             <div className="mt-6 text-center">
//               <button
//                 onClick={() => setDisplayCount((prev) => prev + 5)}
//                 className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition text-white"
//               >
//                 Load More
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Jobseekers;



'use client';

import React, { useEffect, useState } from "react";
import Navigation from "../Components/Navigations";
import { BsBag } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import Footer from "../Components/Footer";
import Link from "next/link";
import Loader from "@/components/loaders/Loader";
import { useRouter } from "next/navigation"; // ✅ client-side routing

const Jobseekers = () => {
  const router = useRouter(); // ✅ hook for navigation
  const [Jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [job, setJob] = useState('');
  const [location, setLocation] = useState('');
  const [displayCount, setDisplayCount] = useState(10);
  const [loadingJobId, setLoadingJobId] = useState(null); // track loading button

  // ✅ Preload jobs and cache them
  useEffect(() => {
    async function fetchJobs() {
      setIsLoading(true);
      try {
        const res = await fetch("/api/getJobs", { cache: "force-cache" });
        if (!res.ok) throw new Error("Failed to fetch jobs");
        const data = await res.json();
        setJobs(data);
        setFilteredJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchJobs();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      applyFilters();
    }
  };

  const applyFilters = () => {
    const filtered = (Jobs || []).filter(
      (jobItem) =>
        jobItem.title?.toLowerCase().includes(job.toLowerCase()) &&
        jobItem.location?.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredJobs(filtered);
    setDisplayCount(10);
  };

  const visibleJobs = filteredJobs.slice(0, displayCount);

  return (
    <>
      <Navigation />
      <div className="w-full bg-white">
        <div className="bg-BgColor-testing min-h-screen w-full lg:max-w-[1600px] mx-auto lg:px-[5%] lg:py-10 p-5 space-y-16 md:p-20">
          {/* Header Section */}
          <div>
            <h6 className="text-3xl sm:text-4xl font-bold text-center mb-5">
              Find and become a professional with passion
            </h6>
            <p className="text-center text-lg sm:text-xl mb-10 px-2">
              We specialize in connecting job seekers with the best career
              opportunities across the Gulf region. Whether you're a seasoned
              professional or a fresh graduate, our platform is designed to help
              you navigate the job market with ease.
            </p>

            {/* Search Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-2xl mx-auto mb-10">
              <div className="relative w-full sm:w-auto">
                <BsBag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Job Title"
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="pl-10 pr-4 py-2 w-full sm:w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="relative w-full sm:w-auto">
                <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="pl-10 pr-4 py-2 w-full sm:w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                onClick={applyFilters}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Search
              </button>
            </div>
          </div>

          {/* Job List */}
          <div>
            {isLoading ? (
              <div className="flex justify-center items-center min-h-[300px]">
                <Loader />
              </div>
            ) : (
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleJobs.length === 0 ? (
                  <div className="text-center w-full col-span-full">
                    <p className="text-gray-600 text-lg">No jobs available</p>
                  </div>
                ) : (
                  visibleJobs.map((Job) => (
                    <li
                      key={Job._id}
                      className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Job Title */}
                      <h2 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-indigo-600 line-clamp-1">
                        {Job.title}
                      </h2>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-gray-600 mb-4">
                        <FiMapPin className="text-gray-500" />
                        <span className="line-clamp-1">{Job.location}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-sm mb-6 line-clamp-3 leading-relaxed">
                        {Job.description}
                      </p>

                      {/* Footer buttons */}
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => {
                            setLoadingJobId(Job.jobId);
                            router.push(`/Jobseekers/${Job.jobId}`); // ✅ client-side routing
                          }}
                          className="bg-BgColor-buttonclr hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transition"
                        >
                          {loadingJobId === Job.jobId ? "Loading Details..." : "View Details"}
                        </button>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>

          {/* Load More */}
          {displayCount < filteredJobs.length && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setDisplayCount((prev) => prev + 5)}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition text-white"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Jobseekers;
