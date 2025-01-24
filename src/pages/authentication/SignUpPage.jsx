import React from "react";
import { useNavigate } from "react-router-dom";
import Abstract from "../../assets/back.jpg";

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/user/auth/login");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Back Option in Top-Left Corner */}
      <div className="absolute top-4 left-4 z-20">
        <button onClick={() => navigate("/")} className="text-4xl text-white">
          &larr;
        </button>
      </div>
      {/* Left Side - Welcome Section */}
      <div className="w-full md:w-1/2 h-full relative bg-cover bg-center flex flex-col justify-center items-center text-white py-20" style={{ backgroundImage: `url(${Abstract})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center px-8 md:px-0 py-8 md:py-0">
          <h2 className="text-3xl font-semibold mb-2">Welcome to Family</h2>
          <p className="text-gray-300 mb-6">Already have an account?</p>
          <button
            onClick={handleLogin}
            className="flex items-center text-lg bg-white text-blue-900 py-2 px-6 rounded-lg shadow hover:bg-gray-200 transition"
          >
            <span className="text-xl mr-2">&larr;</span>
            <span>Login</span>
          </button>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="w-full md:w-1/2 bg-gray-100 flex flex-col justify-center px-8 md:px-16 py-20 md:py-0">
        <h1 className="text-3xl font-bold mb-2">Sign Up</h1>
        <p className="text-gray-500 mb-6">
          Let's get started. Want to be a part of something new?
        </p>
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A94FF]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A94FF]"
            />
          </div>
          <input
            type="email"
            placeholder="Email or Mobile Number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A94FF]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A94FF]"
          />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <select
              className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A94FF]"
            >
              <option>Day</option>
              {[...Array(31).keys()].map((day) => (
                <option key={day + 1} value={day + 1}>
                  {day + 1}
                </option>
              ))}
            </select>
            <select
              className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A94FF]"
            >
              <option>Month</option>
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month, index) => (
                <option key={index + 1} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
            <select
              className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A94FF]"
            >
              <option>Year</option>
              {Array.from(
                { length: 100 },
                (_, i) => new Date().getFullYear() - i
              ).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">Gender</p>
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="mr-2"
                />
                Female
              </label>
            </div>
          </div>
          <button className="w-full border border-[#6A94FF] text-[#6A94FF] py-2 rounded-lg hover:bg-[#6a94ff1a] transition">
            Sign Up
          </button>
          <div className="text-center text-[#8B8B8B]">or</div>
          <button className="w-full flex justify-center items-center border border-[#6A94FF] text-[#6A94FF] py-2 rounded-lg hover:bg-[#6a94ff1a] transition mb-4">
            <img
              src="https://img.icons8.com/color/24/google-logo.png"
              alt="Google"
              className="mr-2"
            />
            Sign Up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
