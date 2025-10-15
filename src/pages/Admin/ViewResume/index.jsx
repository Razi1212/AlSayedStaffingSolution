// "use client";
// import React, { useEffect, useState } from "react";
// import Dashboard from "../Dashboard";
// import axios from "axios";
// import JSZip from "jszip";
// import { saveAs } from "file-saver";
// import Loader from "@/components/loaders/Loader";

// const ViewResume = () => {
//   const [data, setData] = useState([]);
//   const [loader, setLoader] = useState(false);
//   const [fileUrls, setFileUrls] = useState({});
//   const [filters, setFilters] = useState({
//     position: "",
//     location: "",
//     date: "",
//   });

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         setLoader(true);
//         const response = await axios.get("/api/applyJob");
//         setData(response?.data || []);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoader(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   useEffect(() => {
//     const urls = {};
//     data.forEach((user) => {
//       if (user?.file?.data) {
//         const fileUrl = URL.createObjectURL(
//           new Blob([new Uint8Array(user.file.data)], {
//             type: "application/pdf",
//           })
//         );
//         urls[user.fileName] = fileUrl;
//       }
//     });
//     setFileUrls(urls);

//     return () => {
//       Object.values(urls).forEach((url) => URL.revokeObjectURL(url));
//     };
//   }, [data]);

//   const handleDownloadAll = async () => {
//     if (window.confirm("Are you sure you want to download all PDFs?")) {
//       const zip = new JSZip();

//       for (const user of filteredData) {
//         if (user?.file?.data) {
//           const fileData = new Uint8Array(user.file.data);
//           zip.file(`${user.fileName}`, fileData);
//         }
//       }

//       const blob = await zip.generateAsync({ type: "blob" });
//       saveAs(blob, "resumes.zip");
//     }
//   };

//   const handlePreview = (fileName) => {
//     const fileUrl = fileUrls[fileName];
//     if (fileUrl) {
//       window.open(fileUrl, "_blank");
//     }
//   };

//   // ✅ Filtering logic
//   const filteredData = data.filter((user) => {
//     const matchesPosition =
//       !filters.position ||
//       user.position?.toLowerCase().includes(filters.position.toLowerCase());

//     const matchesLocation =
//       !filters.location ||
//       user.currentLocation
//         ?.toLowerCase()
//         .includes(filters.location.toLowerCase());

//     const matchesDate =
//       !filters.date ||
//       (user.dob &&
//         new Date(user.dob).toISOString().slice(0, 10) === filters.date);

//     return matchesPosition && matchesLocation && matchesDate;
//   });

//   // ✅ Extract unique positions & locations for datalist
//   const uniquePositions = [...new Set(data.map((u) => u.position).filter(Boolean))];
//   const uniqueLocations = [...new Set(data.map((u) => u.currentLocation).filter(Boolean))];

//   return (
//     <div className="min-h-screen bg-BgColor-testing">
//       <Dashboard />
//       <div className="lg:px-[8%] lg:py-10 p-5">
//         <p className="text-lg py-4">View Candidates Information</p>
//         <div className="flex justify-between items-center mb-8">
//           <div className="flex flex-wrap gap-6">
//             {/* Position Filter with Datalist */}
//             <input
//               type="text"
//               list="positions"
//               placeholder="Search by Position"
//               value={filters.position}
//               onChange={(e) =>
//                 setFilters({ ...filters, position: e.target.value })
//               }
//               className="p-2 rounded-md text-black border border-gray-400"
//             />
//             <datalist id="positions">
//               {uniquePositions.map((pos, i) => (
//                 <option key={i} value={pos} />
//               ))}
//             </datalist>

//             {/* Location Filter with Datalist */}
//             <input
//               type="text"
//               list="locations"
//               placeholder="Search by Location"
//               value={filters.location}
//               onChange={(e) =>
//                 setFilters({ ...filters, location: e.target.value })
//               }
//               className="p-2 rounded-md text-black border border-gray-400"
//             />
//             <datalist id="locations">
//               {uniqueLocations.map((loc, i) => (
//                 <option key={i} value={loc} />
//               ))}
//             </datalist>

//             {/* Date Filter */}
//             <input
//               type="date"
//               placeholder="Date Filter"
//               value={filters.date}
//               onChange={(e) =>
//                 setFilters({ ...filters, date: e.target.value })
//               }
//               className="p-2 rounded-md text-black border border-gray-400"
//             />
//           </div>

//           {filteredData?.length > 0 && (
//             <button
//               className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md shadow transition"
//               onClick={handleDownloadAll}
//             >
//               Download All as ZIP
//             </button>
//           )}
//         </div>

//         <hr className="border-t border-black my-4" />

//         {loader ? (
//           <Loader />
//         ) : filteredData.length === 0 ? (
//           <p className="text-gray-500">No resumes found.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {filteredData.map((user) => (
//               <div
//                 key={user._id || user.email}
//                 className="flex flex-col justify-between bg-BgColor-contactcolor border border-gray-200 rounded-lg shadow-md p-5 transition hover:shadow-lg"
//               >
//                 <div className="mb-4">
//                   <h3 className="text-lg font-semibold text-gray-800 mb-2 capitalize">
//                     {user.candidateName}
//                   </h3>
//                   <p className="text-sm text-gray-600 mb-4 capitalize">
//                     {user.position}
//                   </p>
//                   <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700">
//                     <p><strong>Email:</strong> {user.email}</p>
//                     <p><strong>Nationality:</strong> {user.nationality}</p>
//                     <p><strong>Contact:</strong> {user.contactNumber}</p>
//                     <p><strong>Location:</strong> {user.currentLocation}</p>
//                     <p><strong>DOB:</strong> {user.dob}</p>
//                     <p><strong>Passport #:</strong> {user.passportNumber}</p>
//                     <p><strong>ECNR/ECR:</strong> {user.ecnrEcr}</p>
//                     <p><strong>Passport Expiry:</strong> {user.passportExpiry}</p>
//                     <p><strong>Company:</strong> {user.currentCompany}</p>
//                     <p><strong>Local Exp:</strong> {user.localExperience} yrs</p>
//                     <p><strong>International Exp:</strong> {user.internationalExperience} yrs</p>
//                     <p><strong>Total Exp:</strong> {user.totalExperience} yrs</p>
//                     <p><strong>Education:</strong> {user.education}</p>
//                     <p><strong>Current Salary:</strong> {user.currentSalary}</p>
//                     <p><strong>Expected Salary:</strong> {user.expectedSalary}</p>
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap gap-2 mt-4">
//                   {fileUrls[user.fileName] && (
//                     <>
//                       <a
//                         className="bg-violet-600 hover:bg-violet-700 text-white px-3 py-1 rounded-md text-sm transition"
//                         href={fileUrls[user.fileName]}
//                         download={user.fileName}
//                       >
//                         Download PDF
//                       </a>
//                       <button
//                         className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded-md text-sm transition"
//                         onClick={() => handlePreview(user.fileName)}
//                       >
//                         Preview PDF
//                       </button>
//                     </>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ViewResume;



"use client";
import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard";
import axios from "axios";
import Loader from "@/components/loaders/Loader";

const ViewResume = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [filters, setFilters] = useState({
    position: "",
    location: "",
    date: "",
  });

  // Fetch resumes from API (paginated)
  const fetchUsers = async (pageNumber = 1, append = false) => {
    try {
      setLoader(true);
      const response = await axios.get(`/api/applyJob?page=${pageNumber}&limit=5`);
      const resumes = response?.data?.data || response?.data || [];
      const moreData = resumes.length === 5; // if we fetched 5, maybe more exists
      setHasMore(moreData);

      setData((prev) => (append ? [...prev, ...resumes] : resumes));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoader(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchUsers();
  }, []);

  // Load more handler
  const handleLoadMore = () => {
    const nextPage = page + 1;
    fetchUsers(nextPage, true);
    setPage(nextPage);
  };

  // Filtering logic
  const filteredData = data.filter((user) => {
    const matchesPosition =
      !filters.position ||
      user.position?.toLowerCase().includes(filters.position.toLowerCase());

    const matchesLocation =
      !filters.location ||
      user.currentLocation
        ?.toLowerCase()
        .includes(filters.location.toLowerCase());

    const matchesDate =
      !filters.date ||
      (user.dob &&
        new Date(user.dob).toISOString().slice(0, 10) === filters.date);

    return matchesPosition && matchesLocation && matchesDate;
  });

  // Unique options for filters
  const uniquePositions = [...new Set(data.map((u) => u.position).filter(Boolean))];
  const uniqueLocations = [...new Set(data.map((u) => u.currentLocation).filter(Boolean))];

  return (
    <div className="min-h-screen bg-BgColor-testing">
      <Dashboard />
      <div className="lg:px-[8%] lg:py-10 p-5">
        <p className="text-lg py-4">View Candidates Information</p>

        {/* Filters */}
        <div className="flex flex-wrap gap-6 mb-8">
          <input
            type="text"
            list="positions"
            placeholder="Search by Position"
            value={filters.position}
            onChange={(e) =>
              setFilters({ ...filters, position: e.target.value })
            }
            className="p-2 rounded-md text-black border border-gray-400"
          />
          <datalist id="positions">
            {uniquePositions.map((pos, i) => (
              <option key={i} value={pos} />
            ))}
          </datalist>

          <input
            type="text"
            list="locations"
            placeholder="Search by Location"
            value={filters.location}
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
            className="p-2 rounded-md text-black border border-gray-400"
          />
          <datalist id="locations">
            {uniqueLocations.map((loc, i) => (
              <option key={i} value={loc} />
            ))}
          </datalist>

          <input
            type="date"
            placeholder="Date Filter"
            value={filters.date}
            onChange={(e) =>
              setFilters({ ...filters, date: e.target.value })
            }
            className="p-2 rounded-md text-black border border-gray-400"
          />
        </div>

        <hr className="border-t border-black my-4" />

        {loader && page === 1 ? (
          <Loader />
        ) : filteredData.length === 0 ? (
          <p className="text-gray-500">No resumes found.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredData.map((user) => (
                <div
                  key={user._id || user.email}
                  className="flex flex-col justify-between bg-BgColor-contactcolor border border-gray-200 rounded-lg shadow-md p-5 transition hover:shadow-lg"
                >
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 capitalize">
                      {user.candidateName}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 capitalize">
                      {user.position}
                    </p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700">
                      <p><strong>Email:</strong> {user.email}</p>
                      <p><strong>Nationality:</strong> {user.nationality}</p>
                      <p><strong>Contact:</strong> {user.contactNumber}</p>
                      <p><strong>Location:</strong> {user.currentLocation}</p>
                      <p><strong>DOB:</strong> {user.dob}</p>
                      <p><strong>Passport #:</strong> {user.passportNumber}</p>
                      <p><strong>ECNR/ECR:</strong> {user.ecnrEcr}</p>
                      <p><strong>Passport Expiry:</strong> {user.passportExpiry}</p>
                      <p><strong>Company:</strong> {user.currentCompany}</p>
                      <p><strong>Local Exp:</strong> {user.localExperience} yrs</p>
                      <p><strong>International Exp:</strong> {user.internationalExperience} yrs</p>
                      <p><strong>Total Exp:</strong> {user.totalExperience} yrs</p>
                      <p><strong>Education:</strong> {user.education}</p>
                      <p><strong>Current Salary:</strong> {user.currentSalary}</p>
                      <p><strong>Expected Salary:</strong> {user.expectedSalary}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <a
                      className="bg-violet-600 hover:bg-violet-700 text-white px-3 py-1 rounded-md text-sm transition"
                      href={`/api/resume/${user._id}`}
                      download
                    >
                      Download PDF
                    </a>
                    <a
                      className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded-md text-sm transition"
                      href={`/api/resume/${user._id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Preview PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleLoadMore}
                  disabled={loader}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-md transition disabled:opacity-50"
                >
                  {loader ? "Loading..." : "Load More"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ViewResume;
