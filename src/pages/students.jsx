import React from "react";
import { Calendar, FileText, CreditCard, CheckSquare } from "lucide-react";
const Student = () => {
  return (
    <div className="student">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <button className="bg-white rounded-lg shadow-md p-6 w-full flex flex-col items-center gap-3">
            <Calendar size={32} className="text-red-500" />
          Schedual
        </button>
        <button className="bg-white rounded-lg shadow-md p-6 w-full flex flex-col items-center gap-3">
          <FileText size={32} className="text-blue-500" />
          Exam Result
        </button>
        <button className="bg-white rounded-lg shadow-md p-6 w-full flex flex-col items-center gap-3">
          <CreditCard size={32} className="text-green-500" />
          Fee
        </button>
        <button className="bg-white rounded-lg shadow-md p-6 w-full flex flex-col items-center gap-3">
          <CheckSquare size={32} className="text-purple-500" />
          Attendence Rate
        </button>
      </div>
    </div>
  );
};

export default Student;
