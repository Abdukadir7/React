import React from "react";

const Schedule = () => {
  return (
    <div className="p-4">
      <h3 className="text-3xl font-bold text-gray-700 mb-4">Schedule</h3>

      <div className="overflow-x-auto border rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-500 text-white sticky top-0">
            <tr>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Saturday</th>
              <th className="px-4 py-2 text-left">Sunday</th>
              <th className="px-4 py-2 text-left">Monday</th>
              <th className="px-4 py-2 text-left">Tuesday</th>
              <th className="px-4 py-2 text-left">Wednesday</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              { time: "7:00 AM - 7:45 AM", subjects: ["Math","Somali","Business","Biology","Physics"] },
              { time: "7:45 AM - 8:45 AM", subjects: ["History","Geography","Arabic","Islamic","Technology"] },
              { time: "8:45 AM - 9:45 AM", subjects: ["Chemistry","Physics","Math","History","Geography"] },
              { time: "9:45 AM - 10:45 AM", subjects: ["Arabic","English","Biology","Chemistry","Physics"] },
              { time: "10:45 AM - 11:45 AM", subjects: ["Islamic","Math","History","Geography","English"] },
              { time: "11:45 AM - 12:30 PM", subjects: ["Biology","Business","Technology","Somali","Arabic"] },
            ].map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-100 bg-gray-50">
                <td className="px-4 py-2">{row.time}</td>
                {row.subjects.map((subject, i) => (
                  <td key={i} className="px-4 py-2">{subject}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
