"use client";
import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard";
import axios from "axios";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import Loader from "@/components/loaders/Loader";

const ViewResume = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [fileUrls, setFileUrls] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoader(true);
        const response = await axios.get("/api/applyJob");
        setData(response?.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoader(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const urls = {};
    data.forEach((user) => {
      if (user?.file?.data) {
        const fileUrl = URL.createObjectURL(
          new Blob([new Uint8Array(user.file.data)], {
            type: "application/pdf",
          })
        );
        urls[user.fileName] = fileUrl;
      }
    });
    setFileUrls(urls);

    return () => {
      Object.values(urls).forEach((url) => URL.revokeObjectURL(url));
    };
  }, [data]);

  const handleDownloadAll = async () => {
    if (window.confirm("Are you sure you want to download all PDFs?")) {
      const zip = new JSZip();

      for (const user of data) {
        if (user?.file?.data) {
          const fileData = new Uint8Array(user.file.data);
          zip.file(`${user.fileName}`, fileData);
        }
      }

      const blob = await zip.generateAsync({ type: "blob" });
      saveAs(blob, "resumes.zip");
    }
  };

  const handlePreview = (fileName) => {
    const fileUrl = fileUrls[fileName];
    if (fileUrl) {
      window.open(fileUrl, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-BgColor-testing">
     <Dashboard />
      <div className="lg:px-[8%]  lg:py-10 p-5">
          <p className="text-lg py-4">View Candidates Information</p>
        <div className="flex justify-between items-center mb-8">
          <div className="flex   flex-wrap gap-6">
            <input
              type="text"
              placeholder="Search by Location"
              className="p-2 rounded-md text-black border border-gray-400"
            />
            <input
              type="date"
              placeholder="Date Filter"
              className="p-2 rounded-md text-black border border-gray-400"
            />
          </div>
       

          {data?.length > 0 && (
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md shadow transition"
              onClick={handleDownloadAll}
            >
              Download All as ZIP
            </button>
          )}
        </div>

   <hr className="border-t border-black my-4" />


        {loader ? (
          <Loader />
        ) : data.length === 0 ? (
          <p className="text-gray-500">No resumes found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {data.map((user, index) => (
              <div
                key={index}
                className="flex flex-col justify-between bg-BgColor-contactcolor border border-gray-200 rounded-lg shadow-md p-5 transition hover:shadow-lg"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 capitalize">
                    {user.candidateName}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 capitalize">{user.position}</p>
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
                  {fileUrls[user.fileName] && (
                    <>
                      <a
                        className="bg-violet-600 hover:bg-violet-700 text-white px-3 py-1 rounded-md text-sm transition"
                        href={fileUrls[user.fileName]}
                        download={user.fileName}
                      >
                        Download PDF
                      </a>
                      <button
                        className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded-md text-sm transition"
                        onClick={() => handlePreview(user.fileName)}
                      >
                        Preview PDF
                      </button>

                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewResume;
