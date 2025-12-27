import React, { useState } from "react";
import { Calendar, FileText, CreditCard, CheckSquare } from "lucide-react";
import Schedual from "../components/schedual";
import ExamResult from "../components/ExamResult";
import Attendence from "../components/Attendence";
import Fee from "../components/fee";

const Parent = () => {
  const [page, setPage] = useState("schedual");

  const cards = [
    { name: "Schedual", icon: <Calendar size={32} className="text-red-500" />, key: "schedual" },
    { name: "Exam Result", icon: <FileText size={32} className="text-blue-500" />, key: "examresult" },
    { name: "Fee", icon: <CreditCard size={32} className="text-green-500" />, key: "fee" },
    { name: "Attendence", icon: <CheckSquare size={32} className="text-purple-500" />, key: "attendence" },
  ];

  return (
    <div className="parent p-6">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <button
            key={card.key}
            onClick={() => setPage(card.key)}
            className={`bg-white rounded-lg shadow-md p-6 w-full flex flex-col items-center gap-3 cursor-pointer transition-all ${
              page === card.key ? "ring-2 ring-offset-2 ring-indigo-500" : ""
            }`}
          >
            {card.icon}
            {card.name}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6 mt-6 rounded-lg shadow-md min-h-[400px] overflow-y-auto">
        {page === "schedual" && <Schedual />}
        {page === "examresult" && <ExamResult />}
        {page === "fee" && <Fee />}
        {page === "attendence" && <Attendence />}
      </div>
    </div>
  );
};

export default Parent;
