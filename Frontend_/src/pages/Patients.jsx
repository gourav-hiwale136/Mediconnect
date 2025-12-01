import React, { useState } from "react";
import { UserPlus } from "lucide-react";
import AddPatientModal from "../model/AddPatientModal";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddPatient = (patient) => {
    setPatients((prev) => [...prev, patient]);
  };

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8 bg-gray-100 min-h-screen">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">Patients</h1>

        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm sm:text-base"
        >
          <UserPlus size={20} />
          Add Patient
        </button>
      </div>

      <div className="bg-white shadow rounded-xl p-4 sm:p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 whitespace-nowrap">Name</th>
                <th className="p-3 whitespace-nowrap">Age</th>
                <th className="p-3 whitespace-nowrap">Disease</th>
                <th className="p-3 whitespace-nowrap">Status</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((pat, idx) => (
                <tr
                  className="border-b last:border-b-0 hover:bg-gray-50"
                  key={idx}
                >
                  <td className="p-3 whitespace-nowrap">{pat.name}</td>
                  <td className="p-3 whitespace-nowrap">{pat.age}</td>
                  <td className="p-3 whitespace-nowrap">{pat.disease}</td>
                  <td
                    className={`p-3 font-semibold whitespace-nowrap ${
                      pat.status === "Recovered"
                        ? "text-green-600"
                        : pat.status === "Critical"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {pat.status}
                  </td>
                </tr>
              ))}

              {patients.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="p-4 text-center text-gray-500 text-sm"
                  >
                    No patients added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AddPatientModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onAdd={handleAddPatient}
      />
    </div>
  );
};

export default Patients;
