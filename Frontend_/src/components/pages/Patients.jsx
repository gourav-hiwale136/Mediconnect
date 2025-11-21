import React from "react";
import { UserPlus } from "lucide-react";

const Patients = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Patients</h1>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <UserPlus size={20} />
          Add Patient
        </button>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-xl p-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Age</th>
              <th className="p-3">Disease</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-3">Rohit Sharma</td>
              <td className="p-3">30</td>
              <td className="p-3">Fever</td>
              <td className="p-3 text-green-600 font-semibold">Recovered</td>
            </tr>

            <tr className="border-b">
              <td className="p-3">Rutuja Patil</td>
              <td className="p-3">22</td>
              <td className="p-3">Cold</td>
              <td className="p-3 text-yellow-600 font-semibold">
                Under Treatment
              </td>
            </tr>

            <tr>
              <td className="p-3">Ganesh Kale</td>
              <td className="p-3">45</td>
              <td className="p-3">Diabetes</td>
              <td className="p-3 text-red-600 font-semibold">Critical</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patients;
