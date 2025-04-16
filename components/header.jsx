import React, { useState, useEffect, useRef } from "react";
import { Bell, Search } from "lucide-react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
  
      const storedUser = localStorage.getItem("auth");
      if (storedUser) {
        setUserData(JSON.parse(storedUser));
      }
    
  }, []);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth");
      localStorage.removeItem("isLogin");
      router.push("/SignIn");
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-[60px] fixed top-0 w-full bg-white shadow flex items-center px-6 justify-between z-50">
      <div className="flex items-center gap-6">
        <div className="text-xl font-bold flex items-center">
          Unknown
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-4 pr-10 py-1 rounded-full border border-[#DEDEDE] outline-none focus:ring-2 focus:ring-blue-400"
          />
          <Search className="absolute right-2 top-1.5 w-4 h-4 text-gray-500" />
        </div>
      </div>

      <div className="relative" ref={dropdownRef}>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span className="text-gray-800 text-sm font-medium">
            {userData?.firstName || "User"}
          </span>
          <span className="text-gray-600 text-xs">▼</span>
        </div>

        {showDropdown && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md z-10">
            <button
              onClick={() => router.push("/profile")}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            >
              Profile
            </button>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
