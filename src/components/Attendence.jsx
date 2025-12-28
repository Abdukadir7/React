import React, { useState } from "react";

const attendanceData = [
  { subject: "Mathematics", attended: 20, total: 22 },
  { subject: "Science", attended: 18, total: 22 },
  { subject: "English", attended: 19, total: 22 },
  { subject: "Biology", attended: 17, total: 22 },
  { subject: "Chemistry", attended: 16, total: 22 },
  { subject: "Physics", attended: 15, total: 22 },
  { subject: "Islamic Studies", attended: 14, total: 22 },
  { subject: "Arabic", attended: 13, total: 22 },
  { subject: "Business", attended: 12, total: 22 },
  { subject: "Technology", attended: 11, total: 22 },
];

// Precompute total attendance
const totalAttendance = attendanceData.reduce(
  (acc, item) => {
    acc.attended += item.attended;
    acc.total += item.total;
    return acc;
  },
  { attended: 0, total: 0 }
);

const Attendence = () => {
  const [subject, setSubject] = useState("all"); // default is "all"

  const handleChange = (e) => setSubject(e.target.value);

  // Determine data to display
  const displayed =
    subject === "all"
      ? totalAttendance
      : attendanceData.find((item) => item.subject === subject);

  const attendancePercentage = ((displayed.attended / displayed.total) * 100).toFixed(2);
  const absent = displayed.total - displayed.attended;

  return (
    <div className="p-6 rounded-lg w-full max-w-3xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Student Attendance</h1>

      <label htmlFor="attendance" className="block mb-2 text-gray-600 font-medium">
        Select Subject:
      </label>
      <select
        id="attendance"
        value={subject}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="all">All</option>
        {attendanceData.map((item) => (
          <option key={item.subject} value={item.subject}>
            {item.subject}
          </option>
        ))}
      </select>

      {displayed && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-blue-100 rounded-lg p-4 text-center">
            <p className="text-gray-500">Attendance Rate</p>
            <p className="font-bold text-xl">{attendancePercentage}%</p>
          </div>
          <div className="bg-green-100 rounded-lg p-4 text-center">
            <p className="text-gray-500">Attended</p>
            <p className="font-bold text-xl">{displayed.attended}</p>
          </div>
          <div className="bg-red-100 rounded-lg p-4 text-center">
            <p className="text-gray-500">Absent</p>
            <p className="font-bold text-xl">{absent}</p>
          </div>
          <div className="bg-yellow-100 rounded-lg p-4 text-center">
            <p className="text-gray-500">Total</p>
            <p className="font-bold text-xl">{displayed.total}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Attendence;
