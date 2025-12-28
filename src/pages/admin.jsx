import React, { useState } from "react";
import students from "../data/student.json";
import AllStudents from "../components/allStudents";
import { GraduationCap, UserCog, Users } from "lucide-react";

const Admin = () => {
  const [showStudents, setShowStudents] = useState(false);

  // Count gender
  const { male, female } = students.reduce(
    (acc, student) => {
      if (student.gender === "Male") acc.male += 1;
      if (student.gender === "Female") acc.female += 1;
      return acc;
    },
    { male: 0, female: 0 }
  );

  const totalStudents = male + female;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Welcome, Admin 👋</h1>

      {/* DASHBOARD CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* STUDENTS CARD */}
        <div
          onClick={() => setShowStudents(true)}
          className="bg-white rounded-lg shadow-md p-6 w-full cursor-pointer hover:shadow-lg transition"
        >
          <div className="flex items-center gap-4">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center">
              <GraduationCap size={32} className="text-green-500" />
            </div>
            <div>
              <p className="text-gray-500">Students</p>
              <p className="text-xl font-bold text-black">
                {totalStudents}
              </p>
            </div>
          </div>
        </div>

        {/* TEACHERS CARD */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
              <UserCog size={32} className="text-blue-500" />
            </div>
            <div>
              <p className="text-gray-500">Teachers</p>
              <p className="text-xl font-bold text-black">50</p>
            </div>
          </div>
        </div>

        {/* PARENTS CARD */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center">
              <Users size={32} className="text-yellow-500" />
            </div>
            <div>
              <p className="text-gray-500">Parents</p>
              <p className="text-xl font-bold text-black">1200</p>
            </div>
          </div>
        </div>
      </div>

      {/* GENDER RATE */}
      <p className="text-gray-500 mt-8 mb-3">Gender Rate</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white p-6 rounded-lg shadow-md">
        <div className="bg-purple-500 w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center text-white">
          <span className="text-sm">Total</span>
          <span className="text-xl font-bold">{totalStudents}</span>
        </div>

        <div className="bg-green-500 w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center text-white">
          <span className="text-sm">Male</span>
          <span className="text-xl font-bold">{male}</span>
        </div>

        <div className="bg-blue-500 w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center text-white">
          <span className="text-sm">Female</span>
          <span className="text-xl font-bold">{female}</span>
        </div>
      </div>

      {/* ALL STUDENTS LIST */}
      {showStudents && (
        <div className="mt-10">
          <AllStudents />
        </div>
      )}
    </div>
  );
};

export default Admin;
