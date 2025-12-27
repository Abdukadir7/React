import React from "react";
import { GraduationCap, UserCog, Users } from "lucide-react";

const Admin = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Welcome, Admin 👋</h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Primary Students Card */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center">
              <GraduationCap size={32} className="text-green-500" />
            </div>
            <div>
              <p className="text-gray-500">Primary Students</p>
              <div className="text-black font-bold text-xl">1500</div>
            </div>
          </div>
        </div>

        {/*  Teachers Card */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
              <UserCog size={32} className="text-blue-500" />
            </div>
            <div>
              <p className="text-gray-500">Teachers</p>
              <div className="text-black font-bold text-xl">50</div>
            </div>
          </div>
        </div>

        {/* Parents Card */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center">
              <Users size={32} className="text-yellow-500" />
            </div>
            <div>
              <p className="text-gray-500">Parents</p>
              <div className="text-black font-bold text-xl">1200</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
