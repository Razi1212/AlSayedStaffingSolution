import React,{useState} from "react";

const Admin = () => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  console.log(setPassword);
  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <form className="bg-gray-900 p-6 rounded-lg shadow-lg w-96">
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
          />
        </div>

        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-gray-300 mb-1">
            Password
          </label>
          <input
            name="password"
            id="password"
            placeholder="Enter your password"
            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute right-3 top-9 text-gray-400"
          ></button>
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
