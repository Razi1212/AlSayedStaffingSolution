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

  // Generate Blob URLs when data changes
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

    // Cleanup URLs when component unmounts or data changes
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
    <div>
      <Dashboard />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Resumes</h2>

        {loader ? (
          <Loader/>
        ) : (
          <div>
            {data?.length > 0 && (
              <button
                className="bg-green-400 text-white px-4 py-2 mb-4 rounded"
                onClick={handleDownloadAll}
              >
                Download All PDFs
              </button>
            )}

            <ul>
              {data.map((user, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center  rounded border p-4 mb-2 shadow-md  gap-2 hover:bg-gray-200 transition"
                >
                  <div >
                    
                    <strong className="capitalize ">{user.candidateName}</strong><p className=" text-xs capitalize">{user.position}</p>
                    <p>{user.email}</p>
                  </div>
                  <div className="flex gap-2">
                    {fileUrls[user.fileName] && (
                      <>
                        <a
                          className="bg-violet-300 text-white px-3 py-1 rounded"
                          href={fileUrls[user.fileName]}
                          download={user.fileName}
                        >
                          Download PDF
                        </a>
                        <button
                          className="bg-yellow-300 text-black px-3 py-1 rounded"
                          onClick={() => handlePreview(user.fileName)}
                        >
                          Preview PDF
                        </button>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewResume;
