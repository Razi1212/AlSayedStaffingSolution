import React, { useState } from "react";  // Removed duplicate import
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'; 
import Swal from "sweetalert2";

const Admin = () => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = () => {
    if (UserName === 'Admin' & Password ==='123123'){

      const user = { name: UserName };  
      dispatch(login(user));
      Cookies.set('isAuthenticated', 'true', { expires: 7 }); 
      router.push('/Admin/JobPost');  
    }
    else{
      Swal.fire({
        title: 'Error!',
        text: "Wrong Credentials",
        icon: 'error',
        confirmButtonColor: '#d33',  
        confirmButtonText: 'OK'
      });
    }
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();  // Handle login on form submission
  };

  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-white text-2xl font-semibold mb-4 text-center">
          Login
        </h2>

        <div className="mb-4">
          <label htmlFor="UserName" className="block text-gray-300 mb-1">
            Username
          </label>
          <input
            type="text"
            name="UserName"
            id="UserName"
            required
            placeholder="Enter your username"
            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-gray-300 mb-1">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter your password"
            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-gray-400"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md mt-4"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Admin;
