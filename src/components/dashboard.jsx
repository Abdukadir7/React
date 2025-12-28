import React, { useState } from "react";
import Admin from "../pages/admin";
import Student from "../pages/students";
import Parent from "../pages/Parent";
import About from "../pages/About";
import ContactPage from "../pages/Contact";
import { UserCog, User, Users, Info, Mail } from "lucide-react";

const Dashboard = () => {
  // Simulated logged-in user
  const user = {
    role: "student", // change to student | parent
  };

  // Default page based on role
  const [page, setPage] = useState(user.role);

  const renderPage = () => {
    switch (user.role) {
      case "admin":
        return page === "admin" && <Admin />;
      case "student":
        return page === "student" && <Student />;
      case "parent":
        return page === "parent" && <Parent />;
      default:
        return <h1>Unauthorized</h1>;
    }
  };

  return (
    <div className="flex font-sans">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 bg-blue-500 w-64 h-screen text-gray-300">
        <div className="p-5 text-white font-bold text-xl border-b border-blue-900">
          School<span className="text-white text-2xl">.</span>
        </div>

        <div className="p-5">
          <ul className="text-white space-y-4">
            {/* ADMIN */}
            {user.role === "admin" && (
              <li
                className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
                  page === "admin" ? "bg-blue-700" : "hover:bg-blue-400"
                }`}
                onClick={() => setPage("admin")}
              >
                <UserCog size={20} />
                Dashboard
              </li>
            )}

            {/* STUDENT */}
            {user.role === "student" && (
              <li
                className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
                  page === "student" ? "bg-blue-700" : "hover:bg-blue-400"
                }`}
                onClick={() => setPage("student")}
              >
                <User size={20} />
                Dashboard
              </li>
            )}

            {/* PARENT */}
            {user.role === "parent" && (
              <li
                className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
                  page === "parent" ? "bg-blue-700" : "hover:bg-blue-400"
                }`}
                onClick={() => setPage("parent")}
              >
                <Users size={20} />
                Dashboard
              </li>
            )}

            {/* COMMON LINKS */}
            <li
              className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
                page === "about" ? "bg-blue-700" : "hover:bg-blue-400"
              }`}
              onClick={() => setPage("about")}
            >
              <Info size={20} />
              About
            </li>

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
      <div className="flex-1 ml-64 p-10 ">
        {renderPage()}
        {page === "about" && <About />}
        {page === "contact" && <ContactPage />}
      </div>
    </div>
  );
};

export default Dashboard;
