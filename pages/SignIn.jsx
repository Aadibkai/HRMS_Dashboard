import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setLoginState } from "@/Redux/slices/loginSlice";
import axios from "axios";
import { toast } from "react-toastify";

function SignIn() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
        "http://localhost:8086/api/signin",
        formData
      );
      if (response.data.success) {
        const user = response.data.user;
        localStorage.setItem("isLogin", true);

        localStorage.setItem("auth", JSON.stringify(user));
        dispatch(setLoginState(true));
        toast.success("Login successful! Redirecting...");
        setTimeout(()=>{
            router.push("/dashboard");
        },500)
  
      } else {
        toast.error(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login failed:", error.message || error);
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  const navigate = () => {
    router.push("/signUp");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Sign In
        </h2>
        <div className="space-y-5">
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
            Sign In
          </button>
        </div>
        <div>
          Not have a account{" "}
          <span className=" cursor-pointer text-[blue]" onClick={navigate}>
            SignUp
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
