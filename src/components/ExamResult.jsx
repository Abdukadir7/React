import React from "react";

const ExamResult = () => {
  const marksData = [
    { subject: "Mathematics", midTerm: 40, final: 50 },
    { subject: "English", midTerm: 45, final: 50 },
    { subject: "Science", midTerm: 42, final: 48 },
    { subject: "History", midTerm: 38, final: 50 },
    { subject: "Geography", midTerm: 40, final: 50 },
    { subject: "Somali", midTerm: 45, final: 50 },
    { subject: "Islamic Studies", midTerm: 44, final: 50 },
    { subject: "Physical", midTerm: 40, final: 50 },
    { subject: "Arabic", midTerm: 45, final: 50 },
    { subject: "Business Studies", midTerm: 45, final: 50 },
    { subject: "Technology", midTerm: 45, final: 50 },
  ];

  const totalMarks = marksData.reduce((sum, item) => sum + item.midTerm + item.final, 0);
  const averageMarks = (totalMarks / marksData.length).toFixed(2);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-gray-700 mb-4">Exam Result</h1>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-500 text-white sticky top-0">
            <tr>
              <th className="px-4 py-2 text-left">Subject</th>
              <th className="px-4 py-2 text-left">Mid Term</th>
              <th className="px-4 py-2 text-left">Final</th>
              <th className="px-4 py-2 text-left">Total Marks</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {marksData.map((item) => (
              <tr key={item.subject} className="hover:bg-gray-100 bg-gray-50">
                <td className="px-4 py-2">{item.subject}</td>
                <td className="px-4 py-2">{item.midTerm}%</td>
                <td className="px-4 py-2">{item.final}%</td>
                <td className="px-4 py-2 font-bold">{item.midTerm + item.final}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-gray-700">
        <p>Total Marks: <span className="font-bold">{totalMarks}%</span></p>
        <p>Average Marks: <span className="font-bold">{averageMarks}%</span></p>
      </div>
    </div>
  );
};

export default ExamResult;
