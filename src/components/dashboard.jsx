import React, { useState } from "react";
import Admin from "../pages/admin";
import Student from "../pages/students";
import Parent from "../pages/Parent";
import About from "../pages/About";
import ContactPage from "../pages/Contact"; // Replace with a proper Contact component
import { UserCog, User, Users, Info, Mail } from "lucide-react";

const Dashboard = () => {
  const [page, setPage] = useState("admin");

  return (
    <div className="flex font-sans">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 bg-blue-500 w-64 h-screen text-gray-300">
        <div className="p-5 text-white font-bold text-xl border-b border-blue-900">
          School<span className="text-white text-2xl">.</span>
        </div>

        <div className="sidebar-links p-5">
          <ul className="text-white space-y-4">
            {/* Admin */}
            <li
              className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
                page === "admin" ? "bg-blue-700" : "hover:bg-blue-400"
              }`}
              onClick={() => setPage("admin")}
            >
              <UserCog size={20} />
              Admin
            </li>

            {/* Student */}
            <li
              className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
                page === "student" ? "bg-blue-700" : "hover:bg-blue-400"
              }`}
              onClick={() => setPage("student")}
            >
              <User size={20} />
              Student
            </li>

            {/* Parent */}
            <li
              className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
                page === "parent" ? "bg-blue-700" : "hover:bg-blue-400"
              }`}
              onClick={() => setPage("parent")}
            >
              <Users size={20} />
              Parent
            </li>

            {/* About */}
            <li
              className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
                page === "about" ? "bg-blue-700" : "hover:bg-blue-400"
              }`}
              onClick={() => setPage("about")}
            >
              <Info size={20} />
              About
            </li>

            {/* Contact */}
            <li
              className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
                page === "contact" ? "bg-blue-700" : "hover:bg-blue-400"
              }`}
              onClick={() => setPage("contact")}
            >
              <Mail size={20} />
              Contact
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 bg-gray-100 p-10 min-h-screen">
        {page === "admin" && <Admin />}
        {page === "student" && <Student />}
        {page === "parent" && <Parent />}
        {page === "about" && <About />}
        {page === "contact" && <ContactPage />}
      </div>
    </div>
  );
};

export default Dashboard;
