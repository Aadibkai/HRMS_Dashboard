import React from 'react';
import { Bell, Search } from 'lucide-react'; 
import Image from 'next/image';

function Header() {
  return (
    <header className="h-[60px] fixed top-0 w-full bg-white shadow flex items-center px-6 justify-between z-50">
      <div className="flex items-center gap-6">
        <div className="text-xl font-bold flex items-center">
         Unknow
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

      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600" />

        <div className="flex items-center gap-2 cursor-pointer">
          {/* <Image
            src="/profile.jpg" 
            alt="Profile"
            width={30}
            height={30}
            className="rounded-full"
          /> */}
          <span className="text-gray-800 text-sm font-medium">
            Adib Kazi
          </span>
          <span className="text-gray-600 text-xs">▼</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
