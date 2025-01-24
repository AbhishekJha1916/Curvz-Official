import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Abstract from "../../assets/back.jpg";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      console.log(response.data);// Store token in localStorage
      localStorage.setItem("token", response.data.token);
      navigate("/market/store"); // Navigate to a protected route
    } catch (err) {
      setError(err.response.data.message || "Something went wrong");
    }
  };      

  const handleForgotPassword = () => {
    navigate("/user/auth/forgot-password");
  };

  const handleSignUp = () => {
    navigate("/user/auth/signup");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Back Option in Top-Left Corner */}
      <div className="absolute top-4 left-4">
        <button onClick={() => navigate("/")} className="text-4xl text-[#8B8B8B]">
          &larr;
        </button>
      </div>
      {/* Left Side - Login Form */}
      <div className="w-full md:w-1/2 bg-gray-100 flex flex-col justify-center px-8 md:px-16 py-20 md:py-0">
        <h1 className="text-3xl font-bold mb-2 text-[#000]">Login</h1>
        <p className="mb-6 text-[#8B8B8B]">Please login to your account.</p>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username or Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A94FF]"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A94FF]"
          />
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#8B8B8B]">
            <label className="flex items-center mb-2 md:mb-0">
              <input type="checkbox" className="mr-2" />
              <span className="text-[#8B8B8B]">Remember Me</span>
            </label>
            <button
              type="button"
              className="hover:underline text-[#8B8B8B]"
              onClick={handleForgotPassword}
            >
              <span className="text-[#8B8B8B]">Forgot Password?</span>
            </button>
          </div>
          <button className="w-full border border-[#6A94FF] text-[#6A94FF] py-2 rounded-lg hover:bg-[#6a94ff1a] transition">
            Login
          </button>
          <div className="text-center text-[#8B8B8B]">or</div>
          <button className="w-full flex justify-center items-center border border-[#6A94FF] text-[#6A94FF] py-2 rounded-lg hover:bg-[#6a94ff1a] transition">
            <img
              src="https://img.icons8.com/color/24/google-logo.png"
              alt="Google"
              className="mr-2"
            />
            Login with Google
          </button>
          <button className="w-full border border-[#6A94FF] text-[#6A94FF] py-2 rounded-lg hover:bg-[#6a94ff1a] transition">
            Login with Mobile Number
          </button>
        </form>
      </div>

      {/* Right Side - Sign Up Section */}
      <div className="w-full h-full md:w-1/2 relative bg-cover bg-center flex flex-col justify-center items-center text-white" style={{ backgroundImage: `url(${Abstract})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center px-8 md:px-0 py-8 md:py-0">
          <h2 className="text-3xl font-semibold mb-2">Welcome Back</h2>
          <p className="text-gray-300 mb-6">Want to create a new account?</p>
          <button
            onClick={handleSignUp}
            className="flex items-center text-lg bg-white text-blue-900 py-2 px-6 rounded-lg shadow hover:bg-gray-200 transition"
          >
            <span className="mr-2">Sign Up</span>
            <span className="text-xl">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
