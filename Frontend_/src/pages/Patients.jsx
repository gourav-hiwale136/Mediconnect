import React, { useState } from "react";
import { UserPlus } from "lucide-react";
import AddPatientModal from "../model/AddPatientModal";

function Patients() {
  // Keep patient data in state; will show in table
  const [patients, setPatients] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // When new patient added from modal, update table
  function handleAddPatient(patient) {
    setPatients([...patients, patient]);
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Patients</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <UserPlus size={20} />
          Add Patient
        </button>
      </div>

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
            {patients.map((pat, idx) => (
              <tr className="border-b" key={idx}>
                <td className="p-3">{pat.name}</td>
                <td className="p-3">{pat.age}</td>
                <td className="p-3">{pat.disease}</td>
                <td
                  className={`p-3 font-semibold ${
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
          </tbody>
        </table>
      </div>

      {/* Add Patient Modal */}
      <AddPatientModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onAdd={handleAddPatient}
      />
    </div>
  );
}

export default Patients;
