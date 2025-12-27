import React from "react";
import { useState } from "react";
import Admin from "../pages/admin";
import Student from "../pages/students";
import Parent from "../pages/Parent";
import { Contact } from "lucide-react";
import About from "../pages/About";

const Dashboard = () => {
  const [page, setPage] = useState();
  return (
    <div className="flex font-sans">
      {/* Sidebar */}
      {/* Header */}
      <div className=" bg-[#0280ff] w-64 h-screen text-gray-300 ">
        <div className="p-5 text-white font-bold text-xl border-b border-blue-900">
          School<span className="text-white text-2xl">.</span>
        </div>
        <div className="sidebar-links p-5">
          <ul className="text-white space-y-6">
            <li>
              <button onClick={() => setPage("admin")}>Admin</button>
            </li>
            <li>
              <button onClick={() => setPage("student")}>Student</button>
            </li>
            <li>
              <button onClick={() => setPage("parent")}>Parent</button>
            </li>
            <li>
              <button onClick={() => setPage("about")}>About</button>
            </li>
            <li>
              <button onClick={() => setPage("contact")}>Contact us</button>
            </li>
          </ul>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-10">
        {page === "admin" && <Admin />}
        {page === "student" && <Student />}
        {page === "parent" && <Parent />}
        {page === "about" && <About />}
        {page === "contact" && <Contact />}
      </div>
    </div>
  );
};
export default Dashboard;
