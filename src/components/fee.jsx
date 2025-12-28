import React from "react";

const Fee = () => {
  const feeData = [
    { fee: 15, month: "January", paid: true },
    { fee: 15, month: "February", paid: false },
    { fee: 15, month: "March", paid: true },
    { fee: 15, month: "April", paid: false },
    { fee: 15, month: "May", paid: true },
    { fee: 15, month: "June", paid: true },
    { fee: 15, month: "July", paid: false },
    { fee: 15, month: "August", paid: true },
    { fee: 15, month: "September", paid: true },
    { fee: 15, month: "October", paid: false },
    { fee: 15, month: "November", paid: true },
    { fee: 15, month: "December", paid: false },
  ];

  const totalFee = feeData.reduce((total, item) => total + item.fee, 0);
  const paidFee = feeData
    .filter((item) => item.paid)
    .reduce((total, item) => total + item.fee, 0);
  const dueFee = totalFee - paidFee;

  return (
    <div className="p-6 rounded-lg ">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Student Fee</h1>

      {/* Fee Summary */}
      <div className="flex gap-6 mb-6">
        <div className="bg-green-100 rounded-lg p-4 flex-1 text-center">
          <p className="text-gray-500">Total Fee</p>
          <p className="text-black font-bold text-xl">${totalFee}</p>
        </div>
        <div className="bg-blue-100 rounded-lg p-4 flex-1 text-center">
          <p className="text-gray-500">Paid</p>
          <p className="text-black font-bold text-xl">${paidFee}</p>
        </div>
        <div className="bg-red-100 rounded-lg p-4 flex-1 text-center">
          <p className="text-gray-500">Due</p>
          <p className="text-black font-bold text-xl">${dueFee}</p>
        </div>
      </div>

      {/* Fee Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-500 text-white">
            <tr className="text-left">
              <th className="px-4 py-2">Month</th>
              <th className="px-4 py-2">Fee</th>
              <th className="px-4 py-2">Paid</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {feeData.map((item, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-100 ${
                  item.paid ? "bg-green-50" : "bg-red-50"
                }`}
              >
                <td className="px-4 py-2">{item.month}</td>
                <td className="px-4 py-2">${item.fee}</td>
                <td className="px-4 py-2">{item.paid ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Fee;
