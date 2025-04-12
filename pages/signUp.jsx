import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setLoginState } from "@/Redux/slices/loginSlice";
import axios from "axios";
import { toast } from "react-toastify";

function SignUp() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNo: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:2000/api/signup",
        formData
      );

      if (response.data.success) {
        localStorage.setItem("isLogin", true);
        dispatch(setLoginState(true));
        toast.success("Signup successful! Redirecting...");
        router.push("/dashboard");
      } else {
        toast.error(response.data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup failed:", error.message || error);
      toast.error("Signup failed. Please check your network or server.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create an Account
        </h2>
        <div className="space-y-5">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-600"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="John"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-600"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Doe"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="mobileNo"
              className="block text-sm font-medium text-gray-600"
            >
              Mobile No
            </label>
            <input
              type="number"
              id="mobileNo"
              placeholder="9876543210"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              value={formData.mobileNo}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
