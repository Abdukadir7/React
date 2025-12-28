import React from "react";
import students from "../data/student.json";

const AllStudents = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">All Students</h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border">#</th>
            <th className="p-3 border">First Name</th>
            <th className="p-3 border">Last Name</th>
            <th className="p-3 border"></th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 transition"
            >
              <td className="p-3 border">{index + 1}</td>
              <td className="p-3 border">{student.first_name}</td>
              <td className="p-3 border">{student.last_name}</td>
              <td className="p-3 border">{student.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllStudents;
