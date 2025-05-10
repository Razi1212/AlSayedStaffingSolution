import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/authSlice"; // Adjust the import if needed
import { useRouter } from "next/router";
import cookie from "js-cookie";  // Add js-cookie for client-side cookie management

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  
  const dispatch = useDispatch();
  const router = useRouter();

  // Handle logout
  const handleLogout = () => {
    dispatch(logout());  // Dispatch logout action to clear Redux state
    cookie.remove("isAuthenticated");  // Remove the authentication cookie if it exists
    router.push("/Admin/login");  // Redirect to login page after logout
  };

  return (
    <div className="bg-BgColor-Dashboard">
      {/* Top Navigation Bar */}
      <nav className="bg-gray-800 text-white p-4 shadow-md">
        <div className="flex gap-6 text-nowrap">
          <Link href="/Admin/JobPost" className="hover:text-gray-300">
            Post Jobs
          </Link>
          <Link href="/Admin/ViewResume" className="hover:text-gray-300">
            View Resume
          </Link>
          <Link href="/Admin/InternalHiring" className="hover:text-gray-300">
            Internal Hiring
          </Link>
        
          <div className="w-full flex justify-end "> 
            <p > {user?.name}</p>
            
            <button
            onClick={handleLogout}
            className="hover:text-gray-300 ml-6 p-2 border border-white rounded"
          >
            Logout
          </button></div>
          
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
